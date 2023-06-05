import { useQuery } from 'react-query';
import axios from "axios"
// import { useState , useEffect } from 'react';
import Characters from "./Components/Characters"
import Header from './Components/Header';
import ModalChangeCharacters from './Components/ModalChangeCharacters';
import Footer from './Components/Footer';
import Loading from './Components/Loading';
import useLocalStorage from './customComponents/useLocalStorage';
import HeroSelector from './Components/Hero';
import ModalTeamMembers from './Components/ModalTeamMembers';
import SuccessChanged from './Components/SuccessChanged';
import Error from './Components/Error';
import ModalSettings from './Components/ModalSettings';
import { useEffect } from 'react';
import LoadingCard from './Components/LoadingCard';


type Character = {
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string | null;
    height: [string, string];
    weight: [string, string];
    eyeColor: string;
    hairColor: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  _id: string;
  id: number;
  name: string;
  slug: string;
  comics?: string[];
}

// if you want the API to work you should turn off the adblock extention

// USE FRAME MOTION (IT IS ALREADY INSTALLED)
//https://www.framer.com/motion/
//https://www.npmjs.com/package/framer-motion

// AND WATCH THIS VIDEO, MAYBE IT WILL BE HELPFUL
//https://www.youtube.com/watch?v=0MOF_QPcgxs&list=PLTxN-M601XkQrncbxuDKY-zo9jNj6XhUe&index=32&t=10s


function App() {
  const [allCharactersSAVED, setAllCharactersSAVED] = useLocalStorage<Character[] | []>("CHARACTERS_APP_ALLCHARACTERS", [])
  const [charactersFiltered, setCharactersFiltered] = useLocalStorage<Character[] | []>("CHARACTERS_APP_CHARACTERSFILTERED", [])

  const [favorites, setFavorites] = useLocalStorage<Character[] | []>("CHARACTERS_APP_FAVORITES", [])

  const [characterName, setCharacterName] = useLocalStorage<string>("CHARACTERS_APP_NAME", "")
  const [howMany, setHowMany] = useLocalStorage<number>("CHARACTERS_APP_HOWMANY", 6)
  const [side, setSide] = useLocalStorage<string>("CHARACTERS_APP_SIDE", "All")
  const [universe, setUniverse] = useLocalStorage<string>("CHARACTERS_APP_UNIVERSE", "All")
  const [team, setTeam] = useLocalStorage<string>("CHARACTERS_APP_TEAM", "All")
  const [gender, setGender] = useLocalStorage<string>("CHARACTERS_APP_GENDER", "All")
  const [race, setRace] = useLocalStorage<string>("CHARACTERS_APP_RACE", "All")
  const [includeNameOrExactName, setIncludeNameOrExactName] = useLocalStorage("CHARACTERS_APP_INCLUDENAMEOREXACTNAME", false)

  const [heroSection, setHeroSection] = useLocalStorage("CHARACTERS_APP_HEROSECTION", {
    imgs: ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"],
    title: "",
    description: ""
  })
  const [teamMembers, setTeamMembers] = useLocalStorage<Character[] | [] | undefined>("CHARACTERS_APP_TEAMMEMBERS", [])

  const [theme, setTheme] = useLocalStorage("CHARACTERS_APP_THEME", "dark")

  const { isLoading, isError } = useQuery<Character[]>({
    queryKey: ["Characters"],
    queryFn: async () => {
      const result = await axios.get<Character[]>('https://heroes-backend.onrender.com/').then((response) => response.data)
      if (result !== undefined) {
        // select 5 random characters at the beginning (when there's no localstorage yet)
        if (charactersFiltered.length === 0) setCharactersFiltered(result.sort(() => 0.5 - Math.random()).slice(0, 6))
        setAllCharactersSAVED(result)
        return result
      }
      return []
    },
    onError: (error) => console.log(error)
  })

  useEffect(() => {
    if (favorites.length === charactersFiltered.length - 1) {
      setCharactersFiltered(favorites)
    }
  }, [favorites])

  function viewFavorites() {
    setCharactersFiltered(favorites)
  }

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

      /* filter name */
      if (characterName === "") {
        firstFilter = randomizedArray
      }

      if (characterName !== "") {
        let resultArr: Character[] = []
        let name = [characterName]

        if (characterName.includes(",")) name = characterName.split(",").map(current => current.trim())

        name.forEach((currentName) => {
          randomizedArray.forEach(charac => {
            if (includeNameOrExactName === true) {
              if (charac.name.toLowerCase().includes(currentName.toLowerCase())) {
                resultArr.push(charac)
              }
            } else {
              if (charac.name.toLowerCase() === currentName.toLowerCase()) {
                resultArr.push(charac)
              }
            }


          })
        })
        firstFilter = resultArr
      }

      /* filter attributes */
      if (team === "All") {
        result = getCharactersByTeamNotSended(firstFilter)

      }
      if (team !== "All") {
        result = getCharactersByTeamSended(firstFilter)

      }

      /* filter how Many */
      if (howMany > 0) result = result.slice(0, howMany)

      setCharactersFiltered(result)
      setHeroSection({
        imgs: teamIMG(team),
        title: team,
        description: team
      })

      if (team === "All") setTeamMembers(result)
      if (team !== "All") setTeamMembers(allCharactersSAVED!.filter((currentCharacter) => currentCharacter.connections.groupAffiliation.includes(team)))
    }
  }

  function getCharactersByTeamNotSended(firstFilter: Character[]) {
    let resultArr: Character[] = []
    firstFilter.forEach((current: Character) => {
      const currentReturned = confirmConditions(current)
      if (currentReturned !== undefined) resultArr.push(currentReturned)
    })
    return resultArr
  }

  function getCharactersByTeamSended(firstFilter: Character[]) {
    let resultArr: Character[] = []
    firstFilter.forEach((current: Character) => {
      if (current.connections.groupAffiliation.includes(team)) {
        let currentReturned = confirmConditions(current)
        if (currentReturned !== undefined) resultArr.push(currentReturned)
      }
    })
    return resultArr
  }

  function confirmConditions(current: Character) {
    if (side === "All"
      && universe === "All"
      && gender === "All"
      && race === "All") return current

    if (side !== 'All'
      && universe === "All"
      && gender === "All"
      && race === "All"
      && (current.biography.alignment === side)) return current

    if (side !== 'All'
      && universe !== "All"
      && gender === "All"
      && race === "All"
      && (current.biography.alignment === side)
      && (current.biography.publisher === universe)) return current

    if (side === 'All'
      && universe !== "All"
      && gender === "All"
      && race === "All"
      && (current.biography.publisher === universe)) return current

    if (side === 'All'
      && universe !== "All"
      && gender !== "All"
      && race === "All"
      && (current.biography.publisher === universe)
      && (current.appearance.gender === gender)) return current

    if (side === 'All'
      && universe === "All"
      && gender !== "All"
      && race === "All"
      && (current.appearance.gender === gender)) return current

    if (side === 'All'
      && universe === "All"
      && gender !== "All"
      && race !== "All"
      && (current.appearance.gender === gender)
      // && (current.appearance.race === race)) return current
      && (current.appearance.race?.toLowerCase().includes(race.toLowerCase()))) return current

    if (side === 'All'
      && universe === "All"
      && gender === "All"
      && race !== "All"
      // && (current.appearance.race === race)) return current
      && (current.appearance.race?.toLowerCase().includes(race.toLowerCase()))) return current

    if (side !== 'All'
      && universe === "All"
      && gender === "All"
      && race !== "All"
      && (current.appearance.race === race)
      && (current.biography.alignment === side)) return current

    if (side !== 'All'
      && universe === "All"
      && gender !== "All"
      && race === "All"
      && (current.biography.alignment === side)
      && (current.appearance.gender === gender)) return current

    if (side === 'All'
      && universe !== "All"
      && gender === "All"
      && race !== "All"
      && (current.biography.publisher === universe)
      // && (current.appearance.race === race)) return current
      && (current.appearance.race?.toLowerCase().includes(race.toLowerCase()))) return current


    if (current.biography.alignment === side
      && current.biography.publisher === universe
      && current.appearance.gender === gender
      // && current.appearance.race === race) return current
      && (current.appearance.race?.toLowerCase().includes(race.toLowerCase()))) return current

  }

  function resetCharactersSelection() {
    localStorage.removeItem("CHARACTERS_APP_CHARACTERSFILTERED")
    localStorage.removeItem("CHARACTERS_APP_NAME")
    localStorage.removeItem("CHARACTERS_APP_HOWMANY")
    localStorage.removeItem("CHARACTERS_APP_SIDE")
    localStorage.removeItem("CHARACTERS_APP_UNIVERSE")
    localStorage.removeItem("CHARACTERS_APP_TEAM")
    localStorage.removeItem("CHARACTERS_APP_GENDER")
    localStorage.removeItem("CHARACTERS_APP_RACE")
    localStorage.removeItem("CHARACTERS_APP_HEROSECTION")
    localStorage.removeItem("CHARACTERS_APP_TEAMMEMBERS")
    // localStorage.removeItem("CHARACTERS_APP_THEME")

    if (allCharactersSAVED) setCharactersFiltered(allCharactersSAVED.sort(() => 0.5 - Math.random()).slice(0, 6))
    setCharacterName("")
    setHowMany(6)
    setSide("All")
    setUniverse("All")
    setTeam("All")
    setGender("All")
    setHeroSection({ imgs: ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"], title: "", description: "" })
    setTeamMembers([])
  }

  /* teams */
  const listOfTeamsWithImgInTheHeroSection = [
    "Avengers",
    "Justice League",
    "Fantastic Four(Original)",
    "X-Men",
    "Illuminati",
    "Batman Family",
    "Teenage Mutant Ninja Turtles",
    "Guardians of the Galaxy",
    "Fantastic Four",
    "Justice League (Original)",
    "Teen Titans",
    "Future Foundation",
    "Symbiotes",
    "Flash Family",
    "Suicide Squad",
    "Demon Slayer",
    "Ben 10",
    "New Guardians",
    "Lantern Corps",
    "Hulk Family"
  ]
  function teamIMG(teamName: string) {
    // change these for comics images like the guardians of the galaxy one (for a more responsive design)
    switch (teamName) {
      case "Avengers":
        return ["https://comicvine.gamespot.com/a/uploads/scale_small/10/103530/6410591-qwadf.jpg", "https://images.comicbooktreasury.com/wp-content/uploads/2022/04/The-Avengers-100-Avengers-Reading-Order-705x470.jpg"]

      case "Justice League":
        return ["https://i.pinimg.com/564x/5a/75/4b/5a754b3b2eba4bb6784f682003958383.jpg", "https://images.comicbooktreasury.com/wp-content/uploads/2021/09/DC-Comics-Omnibus.jpg"]

      case "Justice League (Original)":
        return ["https://i.pinimg.com/564x/5a/75/4b/5a754b3b2eba4bb6784f682003958383.jpg"]

      case "Fantastic Four(Original)":
        return ["https://www.writeups.org/wp-content/uploads/Ultimate-Fantastic-Four-Marvel-Comics-a.jpg", "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8113336-fantastic_four_vol_6_1_dell%27otto_exclusive_variant_textless.jpg", "https://i.pinimg.com/736x/88/73/ab/8873ab9f66f9283d1c5cf08a708818c1--marvel-dc-comics-marvel-art.jpg", "https://comicartcommunity.com/gallery/data/media/248/ULTIMATE_FANTASTIC_FOUR_06_Dale_Keown.jpg"]

      case "Fantastic Four":
        return ["https://preview.redd.it/amtkskhm6jp71.jpg?width=640&crop=smart&auto=webp&s=5210447223f321889ad6f663e6bf856629c6df0a"]

      case "X-Men":
        return ["https://kevinreviewsuncannyxmen.files.wordpress.com/2014/06/all-new-x-men-covers.jpg"]

      case "Illuminati":
        return ["https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/05/Illuminati.jpg"]

      case "Batman Family":
        return ["https://i.pinimg.com/736x/93/a9/8b/93a98b6a447c4a394c1d2e670996daf5.jpg"]

      case "Teenage Mutant Ninja Turtles":
        return ["https://www.entertainmentearth.com/news/wp-content/uploads/2015/03/teenage-mutant-ninja-turtles-660x400.jpg"]

      case "Guardians of the Galaxy":
        return ["https://cdn.marvel.com/u/prod/marvel/i/mg/6/e0/5c3f94442d3e9/clean.jpg", "https://images5.alphacoders.com/872/872052.jpg"]

      case "Teen Titans":
        return ["https://13thdimension.com/wp-content/uploads/2016/09/640z.jpg"]

      case "Future Foundation":
        return ["https://media.wired.com/photos/5932b9ebd80dd005b42b03b1/master/w_2560%2Cc_limit/FF_1_Cover-660.jpg", "https://staticg.sportskeeda.com/editor/2022/07/3d896-16591198229869-1920.jpg", "https://comicaption.files.wordpress.com/2011/11/fantasticfour600a1.jpg"]

      case "Symbiotes":
        return ["https://celebrity.fm/wp-content/uploads/2022/05/Who-is-the-God-of-symbiote-celebrityfm.jpg", "https://i.pinimg.com/originals/a7/d8/4b/a7d84bf9fe6b44529f3b17555ab07a5d.jpg"]

      case "Flash Family":
        return ["https://w0.peakpx.com/wallpaper/618/788/HD-wallpaper-flash-family-dceu-arrowverse-dc-dc-comics.jpg", "https://i0.wp.com/www.comicsbeat.com/wp-content/uploads/2020/05/EX_IIaHUYAAE6Aa.jpg?ssl=1"]

      case "Suicide Squad":
        return ["https://m.media-amazon.com/images/I/A1nLFV0is9L._AC_UF1000,1000_QL80_.jpg", "https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/09/suicide_squad_detail_-_publicity_-_embed_-_2019.jpg"]

      case "Demon Slayer":
        return ["https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg", "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg", "https://www.nme.com/wp-content/uploads/2023/01/demon-slayer-season-3-swordsmith-village-arc-key-art@2000x1270.jpg", "https://m.media-amazon.com/images/M/MV5BZGVlNzJkN2QtYmQ2YS00MmUzLTk0MjYtOWQ2YmVhZjMyNGZjXkEyXkFqcGdeQXVyOTA2OTk0MDg@._V1_.jpg"]

      case "Ben 10":
        return ["https://i.pinimg.com/originals/56/81/f2/5681f244b6d26283fa5e535e176613e9.jpg"]

      case "New Guardians":
        return ["https://digitalspyuk.cdnds.net/12/40/comics_new_guardians_2.jpg", "https://e1.pxfuel.com/desktop-wallpaper/769/825/desktop-wallpaper-i-redesigned-kyle-s-white-lantern-suit-original-art-by-tyler-kirkham-from-green-lantern-new-guardians-%E2%80%A6-lantern-corps-suits.jpg"]

      case "Lantern Corps":
        return ["https://qph.cf2.quoracdn.net/main-qimg-2673d6d36ab6b962fecea97a8dc6f231-lq"]

      case "Hulk Family":
        return ["https://i.pinimg.com/originals/c4/6b/4c/c46b4cad4416a382de72896f9e0d5b9f.jpg", "https://comicvine.gamespot.com/a/uploads/original/11134/111347244/7079315-4150626068-96446.jpg", "https://i.pinimg.com/736x/4e/e0/1f/4ee01f483be7ac031996b51e30e8e8e1--hulk-hulk-walter-obrien.jpg"]

      default:
        return ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"]
    }
  }
  /* teams */




  return (
    <div data-theme={theme} className={`min-h-screen transition-colors duration-500 bg-base-200`}>
      <Header />

      <HeroSelector
        selectedOne={`${team !== "All" ? universe : team} ${(!listOfTeamsWithImgInTheHeroSection.includes(team) && team !== "All") ? "WithOutImage" : ""}`}
        heroSection={heroSection}
      />

      <div>
        {
          isLoading ?
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] gap-10 mx-auto pt-[2rem] '>
              {charactersFiltered.map((current) => {
                return (
                  <div key={current._id}>
                    <LoadingCard />
                  </div>
                )
              })}
            </div>
            : isError || allCharactersSAVED === undefined ?
              <Error
                message="Opps.... something happend please try again."
              />
              :
              <div>
                <Characters
                  charactersFiltered={charactersFiltered}
                  manageFavorite={manageFavorite}
                  favorites={favorites}
                />
              </div>
        }
      </div>


      {
        isLoading === false ?
          <SuccessChanged
            heroSection={heroSection}
            charactersFiltered={charactersFiltered}
          /> :
          null
      }

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
        viewFavorites={viewFavorites}
        includeNameOrExactName={includeNameOrExactName}
        setIncludeNameOrExactName={setIncludeNameOrExactName}


        filterCharacters={filterCharacters}
        resetCharactersSelection={resetCharactersSelection}
      />

      <ModalTeamMembers
        teamMembers={teamMembers}
        team={team}
        universe={universe}
      />

      <ModalSettings
        theme={theme}
        setTheme={setTheme}
      />

      <br />
      <Footer />
    </div>
  )
}

export default App

// return axios.get<Character[]>('https://heroes-backend.onrender.com/').then((response) => {
//     // const characters = response.data
//     // return characters.filter((current) => current.name.toLowerCase().includes(characterName.toLowerCase()))


//     //const characters = response.data
//     // const result: Character[] = []
//     // let count = 0
//     // const indices: number[] = []
//     // while (count < 6) {
//     //     const index = Math.floor(Math.random() * characters.length);

//     //     if (!indices.includes(index)) {
//     //         indices.push(index);
//     //         result.push(characters[index]);
//     //         count++;
//     //     }
//     // } 
//     // console.log(result)
//     // return result;

{/* <div key={currentCharacter.slug} className="card h-fit inset-0 object-cover w-full self-center bg-base-100 shadow-xl">
                            <div className="group/item hover:image-full">
                                <figure>
                                    <img src={currentCharacter.images.md} alt={currentCharacter.name} />
                                </figure>
                            </div>

                            <div className="card-body group/edit invisible group-hover/item:visible transition delay-150 duration-300 ease-in-out">
                                <h2 className="card-title">{currentCharacter.name}</h2>
                                <div className='flex flex-col gap-1'>
                                    <p>Combat: {currentCharacter.powerstats.combat}</p>
                                    <p>Durability: {currentCharacter.powerstats.durability}</p>
                                    <p>Intelligence: {currentCharacter.powerstats.intelligence}</p>
                                    <p>Power: {currentCharacter.powerstats.power}</p>
                                    <p>Speed: {currentCharacter.powerstats.speed}</p>
                                    <p>Strength: {currentCharacter.powerstats.strength}</p>
                                </div>
                                <br />
                                <br />
                                <div className="card-actions justify-end">
                                    <div className='flex w-full justify-between'>
                                        <img className='h-8 w-15 self-center' src={publisherIMG(currentCharacter.biography.publisher)} alt="" />
                                        <button className="btn btn-primary">More...</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}