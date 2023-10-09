import { useEffect, useState } from 'react'
import Characters from "./Components/Characters"
import Header from './Components/Header';
import ModalChangeCharacters from './Components/ChangeCharactersProps';
import Footer from './Components/Footer';
import HeroSelector from './Components/HeroSelector';
import ModalTeamMembers from './Components/Modals/ModalTeamMembers';
import ChangeTheme from './Components/ChangeTheme';
import { Character } from './types';
import { characterEmpty, listOfTeamsWithImgInTheHeroSection, teamIMG } from './constants';

import { useQuery } from 'react-query';
import axios from "axios"
import LoadingCharacters from './Components/LoadingCharacters';
import SectionCharacters from './Components/SectionCharacters';
import AlertMessage from './Components/AlertMessage';
import useKeyPress from './hooks/useKeyPress';
import { resetCharactersSelection } from './functions';

import ModalCharacter from './Components/Modals/ModalCharacter';
import useLocalStorage from './hooks/useLocalStorage';
import { Route, Routes, useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams(JSON.parse(localStorage.getItem("CHARACTERS_APP_SEARCHPARAMS") ?? JSON.stringify({ viewFavorites: 'false', characterName: "", howMany: "8", asHowManyAsPossible: "false", side: "All", universe: "All", team: "All", gender: "All", race: "All", includeNameOrExactName: "true", characterOrFullName: "false", theme: 'night', charactersFilteredIds: JSON.stringify(["63744cef81b33ddcb37e931a", "63744cef81b33ddcb37e9172"]) })))

  const objectParams = {
    viewFavorites: searchParams.get("viewFavorites") === "" ? true : searchParams.get("viewFavorites") === "true",
    characterName: searchParams.get("characterName") ?? "",
    howMany: parseInt(searchParams.get("howMany") ?? "2"),
    asHowManyAsPossible: searchParams.get("asHowManyAsPossible") === "true",
    side: searchParams.get("side") ?? "All",
    universe: searchParams.get("universe") ?? "All",
    team: searchParams.get("team") ?? "All",
    gender: searchParams.get("gender") ?? "All",
    race: searchParams.get("race") ?? "All",
    includeNameOrExactName: searchParams.get("includeNameOrExactName") === "true",
    characterOrFullName: searchParams.get("characterOrFullName") === "true",
    theme: searchParams.get("theme") ?? "night",
    charactersFilteredIds: searchParams.get("charactersFilteredIds") ?? []
  }

  const { viewFavorites, characterName, howMany, asHowManyAsPossible, side, universe, team, gender, race, includeNameOrExactName, characterOrFullName, theme, charactersFilteredIds } = objectParams

  useEffect(() => localStorage.setItem("CHARACTERS_APP_SEARCHPARAMS", JSON.stringify(objectParams)), [searchParams]);

  const [selectedCharacter, setSelectedCharacter] = useState<Character>(characterEmpty)
  const [searchDifferentCharacters, setSearchDifferentCharacters] = useState(false)
  const [heroSection, setHeroSection] = useLocalStorage("CHARACTERS_APP_HEROSECTION", { imgs: ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"], title: "", description: "" })
  const [teamMembers, setTeamMembers] = useLocalStorage<Character[]>("CHARACTERS_APP_TEAMMEMBERS", [])
  const [favorites, setFavorites] = useLocalStorage<Character[] | []>("CHARACTERS_APP_FAVORITES", [])

  const { isLoading, isError, data: charactersFiltered, refetch: refetchCharacters, isFetching } = useQuery<Character[]>({
    enabled: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: ["Characters"],
    queryFn: async () => {
      if (charactersFilteredIds.length > 0 && searchDifferentCharacters === false) {
        return await axios.get<Character[]>(`https://charactersapi.onrender.com/api/v1/characters/charactersids?ids=${charactersFilteredIds}`).then((response) => response.data)
        // return await axios.get<Character[]>(`http://localhost:5000/api/v1/characters/charactersids?ids=${charactersFilteredIds}`).then((response) => response.data)
      }
      return await axios.get<Character[]>(`https://charactersapi.onrender.com/api/v1/characters/filter?characterName=${characterName}&howMany=${asHowManyAsPossible ? 0 : howMany}&side=${side}&universe=${universe}&team=${team}&gender=${gender}&race=${race}&includeNameOrExactName=${includeNameOrExactName}&characterOrFullName=${characterOrFullName}`).then((response) => response.data)
      // return await axios.get<Character[]>(`http://localhost:5000/api/v1/characters/filter?characterName=${characterName}&howMany=${asHowManyAsPossible ? 0 : howMany}&side=${side}&universe=${universe}&team=${team}&gender=${gender}&race=${race}&includeNameOrExactName=${includeNameOrExactName}&characterOrFullName=${characterOrFullName}`).then((response) => response.data)
    },
    onSuccess(data) {
      if (data.length > 0) {
        setSearchParams((prev) => {
          prev.set('charactersFilteredIds', JSON.stringify(data.map(c => c.id)))
          return prev
        }, { replace: true })
      }
      if (team !== "All") setTeamMembers(data.filter((currentCharacter) => currentCharacter.connections.groupAffiliation.includes(team)))
      setHeroSection({ imgs: teamIMG(team), title: team, description: team })
      if (howMany === 691){
        setSearchParams((prev) => {
          prev.set('howMany', data.length.toString())
          return prev
        }, { replace: true })
      }
    },
    onSettled: () => setSearchDifferentCharacters(false),
    onError: (error) => console.log(error),
  })

  useKeyPress('Enter', () => { setViewFavorites(false); refetchCharacters() });
  useKeyPress('z', () => setViewFavorites(!viewFavorites));
  useKeyPress('r', () => { resetCharactersSelection(setSearchParams, setHeroSection, setTeamMembers); setViewFavorites(false); refetchCharacters() });

  function setViewFavorites(f: boolean) {
    setSearchParams((prev) => {
      prev.set('viewFavorites', f.toString())
      return prev
    }, { replace: true })
  }

  function setTheme(theme: string) {
    setSearchParams((prev) => {
      prev.set('theme', theme)
      return prev
    }, { replace: true })
  }

  return (
    <div data-theme={theme} className={`min-h-screen transition-colors duration-500 bg-base-200`}>
      <Routes>
        <Route
          path="*"
          element={
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
                    isLoading || isFetching ?
                      <LoadingCharacters howMany={asHowManyAsPossible ? 621 : howMany} />
                      :
                      isError || charactersFiltered === undefined ?
                        <SectionCharacters>
                          <p>Sorry</p>
                          <p>😢 Opps... something happend. Please try again. </p>
                        </SectionCharacters>
                        :
                        <div>
                          <Characters
                            charactersFiltered={viewFavorites ? favorites : charactersFiltered}
                            viewFavorites={viewFavorites}
                            setSelectedCharacter={setSelectedCharacter}
                          />

                          <ModalCharacter
                            setFavorites={setFavorites}
                            favorites={favorites}
                            selectedCharacter={selectedCharacter}
                          />

                          <AlertMessage
                            charactersFiltered={charactersFiltered}
                            viewFavorites={viewFavorites}
                            alertType={viewFavorites ? "alert-warning" : charactersFiltered.length > 0 ? "alert-success" : "alert-error"}
                            message={viewFavorites ? "⭐ Favorites" : charactersFiltered.length > 0 ? "😃 Characters founded" : "😢 No characters founded"}
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

              <div data-test="sidebarOutside" className="drawer-side z-50">
                <label htmlFor="my-drawer-change" className="drawer-overlay cursor-text bg-red-600 h-full w-full"></label>
                <ul data-test="sidebar" className="menu p-4  min-h-[100vh] w-80 lg:w-[30vw]  bg-base-200 text-base-content">
                  <ModalChangeCharacters
                    characterName={characterName}
                    // setCharacterName={setCharacterName}
                    howMany={howMany}
                    // setHowMany={setHowMany}
                    asHowManyAsPossible={asHowManyAsPossible}
                    // setAsHowManyAsPossible={setAsHowManyAsPossible}
                    side={side}
                    // setSide={setSide}
                    universe={universe}
                    // setUniverse={setUniverse}
                    team={team}
                    // setTeam={setTeam}
                    gender={gender}
                    // setGender={setGender}
                    race={race}
                    // setRace={setRace}
                    includeNameOrExactName={includeNameOrExactName}
                    // setIncludeNameOrExactName={setIncludeNameOrExactName}
                    characterOrFullName={characterOrFullName}
                    // setCharacterOrFullName={setCharacterOrFullName}

                    // setViewFavorites={setViewFavorites}
                    refetchCharacters={refetchCharacters}
                    setHeroSection={setHeroSection}
                    setTeamMembers={setTeamMembers}

                    viewFavorites={viewFavorites}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    setSearchDifferentCharacters={setSearchDifferentCharacters}
                    setSearchParams={setSearchParams}
                  />
                  <ChangeTheme
                    theme={theme}
                    setTheme={setTheme}
                  />
                </ul>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App