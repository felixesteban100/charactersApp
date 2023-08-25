import { useQuery } from 'react-query';
import axios from "axios"
import Characters from "./Components/Characters"
import Header from './Components/Header';
import ModalChangeCharacters from './Components/Modals/ModalChangeCharacters';
import Footer from './Components/Footer';
import useLocalStorage from './customHooks/useLocalStorage';
import HeroSelector from './Components/HeroSelector';
import ModalTeamMembers from './Components/Modals/ModalTeamMembers';
import ModalSettings from './Components/Modals/ModalSettings';
import { Character } from './types';
import { characterEmpty, listOfTeamsWithImgInTheHeroSection, teamIMG } from './constants';
import { /* filterAttributes, */ filterName, resetLocalStorage } from './constants/filterCharacters';


// if you want the API to work you should turn off the adblock extention

// USE FRAME MOTION (IT IS ALREADY INSTALLED)
//https://www.framer.com/motion/
//https://www.npmjs.com/package/framer-motion

// AND WATCH THIS VIDEO, MAYBE IT WILL BE HELPFUL
//https://www.youtube.com/watch?v=0MOF_QPcgxs&list=PLTxN-M601XkQrncbxuDKY-zo9jNj6XhUe&index=32&t=10s


//change the publisher for these
// jason bourne, chuck, rambo, Kool-Aid Man, the cape, Ethan Hunt

function App() {
  const [allCharactersSAVED, setAllCharactersSAVED] = useLocalStorage<Character[] | []>("CHARACTERS_APP_ALLCHARACTERS", [])
  const [charactersFiltered, setCharactersFiltered] = useLocalStorage<Character[] | []>("CHARACTERS_APP_CHARACTERSFILTERED", [])

  const [selectedCharacter, setSelectedCharacter] = useLocalStorage<Character>("CHARACTERS_APP_CHARACTERSELECTED", characterEmpty)

  const [favorites, setFavorites] = useLocalStorage<Character[] | []>("CHARACTERS_APP_FAVORITES", [])
  const [viewFavorites, setViewFavorites] = useLocalStorage("CHARACTERS_APP_VIEWFAVORITES", false)

  const [characterName, setCharacterName] = useLocalStorage<string>("CHARACTERS_APP_NAME", "")
  const [howMany, setHowMany] = useLocalStorage<number>("CHARACTERS_APP_HOWMANY", 6)
  const [side, setSide] = useLocalStorage<string>("CHARACTERS_APP_SIDE", "All")
  const [universe, setUniverse] = useLocalStorage<string>("CHARACTERS_APP_UNIVERSE", "All")
  const [team, setTeam] = useLocalStorage<string>("CHARACTERS_APP_TEAM", "All")
  const [gender, setGender] = useLocalStorage<string>("CHARACTERS_APP_GENDER", "All")
  const [race, setRace] = useLocalStorage<string>("CHARACTERS_APP_RACE", "All")
  const [includeNameOrExactName, setIncludeNameOrExactName] = useLocalStorage("CHARACTERS_APP_INCLUDENAMEOREXACTNAME", false)
  const [characterOrFullName, setCharacterOrFullName] = useLocalStorage("CHARACTERS_APP_CHARACTERORFULLNAME", false)

  const [heroSection, setHeroSection] = useLocalStorage("CHARACTERS_APP_HEROSECTION", {
    imgs: ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"],
    title: "",
    description: ""
  })
  const [teamMembers, setTeamMembers] = useLocalStorage<Character[] | [] | undefined>("CHARACTERS_APP_TEAMMEMBERS", [])

  const [theme, setTheme] = useLocalStorage("CHARACTERS_APP_THEME", "dark")


  // try to use the useMemo hook
  const { isLoading, isError/* , data: allCharactersSAVED */ } = useQuery<Character[]>({
    enabled: allCharactersSAVED.length === 0,
    refetchOnMount: false,      // Disable refetch on component mount
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: ["Characters"],
    queryFn: async () => {
      const result = await axios.get<Character[]>('https://heroes-backend.onrender.com/').then((response) => response.data)
      if (result !== undefined) {
        // select 5 random characters at the beginning (when there's no localstorage yet)
        if (charactersFiltered.length === 0) setCharactersFiltered(result.sort(() => 0.5 - Math.random()).slice(0, 8))
        setAllCharactersSAVED(result)
        return result
      }
      return []
    },
    onError: (error) => console.log(error),
  })


  function manageFavorite(action: string, characterSelected: Character) {
    switch (action) {
      case "add":
        setFavorites(prev => [...prev, characterSelected])
        break;

      case "remove":
        setFavorites(prev => prev.filter(current => current.slug !== characterSelected.slug))
        break;
    }
  }

  function filterCharacters() {
    if (allCharactersSAVED !== undefined) {
      let result: Character[] = []
      let firstFilter: Character[] = []
      const randomizedArray = allCharactersSAVED.sort(() => Math.random() - 0.5);

      // filter name
      firstFilter = filterName(firstFilter, randomizedArray, characterName, includeNameOrExactName, characterOrFullName);

      // filter attributes
      // result = filterAttributes(result, firstFilter, team, side, universe, gender, race);

      // filter how Many
      // if (howMany > 0) result = result.slice(0, howMany)

      firstFilter = firstFilter.reduce((acc: Character[], current: Character) => {
        if ((howMany === 0 || howMany === null) || acc.length < howMany) {
          let isMatched = 0

          isMatched = (team === 'All' || current.connections.groupAffiliation?.toLowerCase().includes(team.toLowerCase())) ? isMatched + 1 : isMatched
          isMatched = (race === 'All' || (current.appearance.race !== null && current.appearance.race.toLowerCase().includes(race.toLowerCase()))) ? isMatched + 1 : isMatched
          isMatched = (gender === 'All' || current.appearance.gender === gender) ? isMatched + 1 : isMatched
          isMatched = (side === 'All' || current.biography.alignment === side) ? isMatched + 1 : isMatched
          isMatched = (universe === 'All' || current.biography.publisher === universe) ? isMatched + 1 : isMatched

          if (isMatched === 5) acc.push(current)
        }

        return acc
      }, [])

      setCharactersFiltered(firstFilter)
      // setCharactersFiltered(result)
      setHeroSection({
        imgs: teamIMG(team),
        title: team,
        description: team
      })

      if (team === "All") setTeamMembers(result)
      if (team !== "All") setTeamMembers(allCharactersSAVED!.filter((currentCharacter) => currentCharacter.connections.groupAffiliation.includes(team)))
    }
  }

  function resetCharactersSelection() {
    resetLocalStorage();
    // localStorage.removeItem("CHARACTERS_APP_THEME")

    if (allCharactersSAVED) setCharactersFiltered(allCharactersSAVED.sort(() => 0.5 - Math.random()).slice(0, 6))
    setCharacterName("")
    setHowMany(8)
    setSide("All")
    setUniverse("All")
    setTeam("All")
    setGender("All")
    setHeroSection({ imgs: ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"], title: "", description: "" })
    setTeamMembers([])
  }

  return (
    <div data-theme={theme} className={`min-h-screen transition-colors duration-500 bg-base-200`}>
      <div className="drawer">
        <input id="my-drawer-change" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-content">
          {/* Page content here */}

          <Header />

          <HeroSelector
            selectedOne={`${team !== "All" ? universe : team} ${(!listOfTeamsWithImgInTheHeroSection.includes(team) && team !== "All") ? "WithOutImage" : ""}`}
            heroSection={heroSection}
          />

          <div>
            {
              isError ?
                <div
                  id='section-characters'
                  className='flex flex-col gap-5 min-h-[100vh] items-center justify-center'
                >
                  <p>Opps... something happend please try again.</p>
                </div>
                :
                <div>
                  <Characters
                    charactersFiltered={viewFavorites ? favorites : charactersFiltered}
                    manageFavorite={manageFavorite}
                    isLoading={isLoading}
                    favorites={favorites}
                    viewFavorites={viewFavorites}
                    selectedCharacter={selectedCharacter}
                    setSelectedCharacter={setSelectedCharacter}
                  />
                </div>
            }
          </div>

          <ModalTeamMembers
            teamMembers={teamMembers}
            team={team}
            universe={universe}
          />

          <br />
          <Footer />
        </div>

        <div data-test="sidebarOutside" className="drawer-side">
          <label htmlFor="my-drawer-change" className="drawer-overlay cursor-text bg-red-600 h-full w-full"></label>
          <ul data-test="sidebar" className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <ModalChangeCharacters
              characterName={characterName}
              setCharacterName={setCharacterName}
              howMany={howMany}
              setHowMany={setHowMany}
              side={side}
              setSide={setSide}
              universe={universe}
              setUniverse={setUniverse}
              team={team}
              setTeam={setTeam}
              gender={gender}
              setGender={setGender}
              race={race}
              setRace={setRace}
              includeNameOrExactName={includeNameOrExactName}
              setIncludeNameOrExactName={setIncludeNameOrExactName}
              characterOrFullName={characterOrFullName}
              setCharacterOrFullName={setCharacterOrFullName}

              setViewFavorites={setViewFavorites}
              filterCharacters={filterCharacters}
              resetCharactersSelection={resetCharactersSelection}
            />
            <ModalSettings
              theme={theme}
              setTheme={setTheme}
            />
          </ul>
        </div>

      </div>
    </div>
  )
}

export default App