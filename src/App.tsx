import { useState } from 'react'
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

//change the publisher for these
// jason bourne, chuck, rambo, Kool-Aid Man, the cape, Ethan Hunt

function App() {
  const [letItSearch, setLetItSearch] = useState(true)
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
  const [teamMembers, setTeamMembers] = useLocalStorage<Character[]>("CHARACTERS_APP_TEAMMEMBERS", [])

  const [theme, setTheme] = useLocalStorage("CHARACTERS_APP_THEME", "dark")


  const { isLoading, isError, data: charactersFiltered, refetch: refetchCharacters, isFetching, isFetched } = useQuery<Character[]>({
    enabled: letItSearch,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: ["Characters"],
    queryFn: async () => {
      const result = await axios.get<Character[]>(`https://charactersapi.onrender.com/api/v1/characters/filter?characterName=${characterName}&howMany=${howMany}&side=${side}&universe=${universe}&team=${team}&gender=${gender}&race=${race}&includeNameOrExactName=${includeNameOrExactName}&characterOrFullName=${characterOrFullName}`).then((response) => response.data)

      setHeroSection({
        imgs: teamIMG(team),
        title: team,
        description: team
      })

      if (team !== "All") setTeamMembers(result.filter((currentCharacter) => currentCharacter.connections.groupAffiliation.includes(team)))

      setLetItSearch(false)
      return result !== undefined ? result : []
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

  function resetCharactersSelection() {
    localStorage.removeItem('CHARACTERS_APP_ALLCHARACTERS')
    localStorage.removeItem("CHARACTERS_APP_CHARACTERSFILTERED");
    localStorage.removeItem("CHARACTERS_APP_NAME");
    localStorage.removeItem("CHARACTERS_APP_HOWMANY");
    localStorage.removeItem("CHARACTERS_APP_SIDE");
    localStorage.removeItem("CHARACTERS_APP_UNIVERSE");
    localStorage.removeItem("CHARACTERS_APP_TEAM");
    localStorage.removeItem("CHARACTERS_APP_GENDER");
    localStorage.removeItem("CHARACTERS_APP_RACE");
    localStorage.removeItem("CHARACTERS_APP_HEROSECTION");
    localStorage.removeItem("CHARACTERS_APP_TEAMMEMBERS");

    setCharacterName("")
    setHowMany(8)
    setSide("All")
    setUniverse("All")
    setTeam("All")
    setGender("All")
    setHeroSection({ imgs: ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"], title: "", description: "" })
    setTeamMembers([])
  }

  function getCharactersToDisplay(): Character[] {
     if (viewFavorites) {
      return favorites;
    } else {
      return charactersFiltered === undefined ? [] : charactersFiltered;
    }
  }

  return (
    <div data-theme={theme} className={`min-h-screen transition-colors duration-500 bg-base-200`}>
      <div className="drawer">
        <input
          id="my-drawer-change"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content">
          {/* Page content here */}

          <Header />

          <HeroSelector
            selectedOne={`${team !== "All" ? universe : team} ${(!listOfTeamsWithImgInTheHeroSection.includes(team) && team !== "All") ? "WithOutImage" : ""}`}
            heroSection={heroSection}
          />

          <div>
            {
              isError || charactersFiltered === undefined ?
                <div
                  id='section-characters'
                  className='flex flex-col gap-5 min-h-[100vh] items-center justify-center'
                >
                  <p>Opps... something happend please try again.</p>
                </div>
                :
                <div>
                  <Characters
                    charactersFiltered={getCharactersToDisplay()}
                    manageFavorite={manageFavorite}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    favorites={favorites}
                    viewFavorites={viewFavorites}
                    selectedCharacter={selectedCharacter}
                    setSelectedCharacter={setSelectedCharacter}
                  />

                  <ModalTeamMembers
                    teamMembers={teamMembers}
                    team={team}
                    universe={universe}
                  />
                </div>
            }
          </div>

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
              refetchCharacters={refetchCharacters}
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