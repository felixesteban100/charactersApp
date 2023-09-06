import { getTeamByUniverse } from "../constants";
import { Character } from "../types";

export function resetCharactersSelection(
  setCharacterName: React.Dispatch<React.SetStateAction<string>>,
  setHowMany: React.Dispatch<React.SetStateAction<number>>,
  setAsHowManyAsPossible: React.Dispatch<React.SetStateAction<boolean>>,
  setSide: React.Dispatch<React.SetStateAction<string>>,
  setUniverse: React.Dispatch<React.SetStateAction<string>>,
  setTeam: React.Dispatch<React.SetStateAction<string>>,
  setGender: React.Dispatch<React.SetStateAction<string>>,
  setHeroSection: React.Dispatch<React.SetStateAction<{
    imgs: string[];
    title: string;
    description: string;
  }>>,
  setTeamMembers: React.Dispatch<React.SetStateAction<Character[]>>
) {
  localStorage.removeItem('CHARACTERS_APP_ALLCHARACTERS')
  localStorage.removeItem("CHARACTERS_APP_CHARACTERSFILTERED");
  localStorage.removeItem("CHARACTERS_APP_NAME");
  localStorage.removeItem("CHARACTERS_APP_HOWMANY");
  localStorage.removeItem("CHARACTERS_APP_ASHOWMANYASPOSSIBLE");
  localStorage.removeItem("CHARACTERS_APP_SIDE");
  localStorage.removeItem("CHARACTERS_APP_UNIVERSE");
  localStorage.removeItem("CHARACTERS_APP_TEAM");
  localStorage.removeItem("CHARACTERS_APP_GENDER");
  localStorage.removeItem("CHARACTERS_APP_RACE");
  localStorage.removeItem("CHARACTERS_APP_HEROSECTION");
  localStorage.removeItem("CHARACTERS_APP_TEAMMEMBERS");

  setCharacterName("")
  setHowMany(8)
  setAsHowManyAsPossible(false)
  setSide("All")
  setUniverse("All")
  setTeam("All")
  setGender("All")
  setHeroSection({ imgs: ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"], title: "", description: "" })
  setTeamMembers([])
}

export function manageFavorite(action: string, characterSelected: Character, setFavorites: React.Dispatch<React.SetStateAction<[] | Character[]>>) {
  switch (action) {
    case "add":
      setFavorites(prev => [...prev, characterSelected])
      break;

    case "remove":
      setFavorites(prev => prev.filter(current => current.slug !== characterSelected.slug))
      break;
  }
}




export function publisherIMG(publisher: string) {
  switch (publisher) {
    case "Marvel Comics":
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"

    case "DC Comics":
      // return "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1200px-DC_Comics_logo.svg.png"

    case "Shueisha":
      return "https://www.shueisha.co.jp/wp-content/themes/shueisha/image/en/mv/mv_subtitle_01.png"

    case "George Lucas":
      return "https://media.comicbook.com/wp-content/uploads/2012/06/120411064621_lucasfilm-logo-640x360-16x9.jpg"

    case "Warner Bros":
      // return "https://variety.com/wp-content/uploads/2022/04/IMG_3724.jpg"
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png"

    case "Dark Horse Comics":
      return "https://i0.wp.com/www.comicsbeat.com/wp-content/uploads/2020/03/dark-horse-logo-banner.png?fit=1200%2C500&ssl=1"

    /**
     * "Angel"
     * "NBC - Heroes"
     * Tempest
     * SyFy
     * ABC Studios
     * Icon Comics
     * Universal Studios
     * Gemini V
     * null
     * Star Trek
     * Goliath
     * Deadpool
     * Wildstorm
     * South Park
     * Sony Pictures
     * Vindicator II
     * Image Comics
     * Titan Books
     * J. K. Rowling
     * Microsoft
     * She-Thing
     * Rebellion
     * 
     */

    default:
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU"

  }
}


export function getRandomImage(images: string[]) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export function transitionImageCard() {
  //https://www.npmjs.com/package/react-lazy-load-image-component
  //https://www.youtube.com/watch?v=QAR9VIqx1qQ&ab_channel=MichaelBreitung
  //https://www.youtube.com/watch?v=2U7yZ3wvFBM&ab_channel=SonnySangha
  //https://www.youtube.com/watch?v=4nYsbm8N4EQ&ab_channel=CyberPotato
  const imageElements = document.querySelectorAll('.imageCard')

  imageElements.forEach((image) => {
    setTimeout(() => {
      image.classList.replace('opacity-0', 'opacity-100')
    }, 3000)
  })
}

export function getLoadingCards(windowWidth: number, howMany: number) {
  switch (true) {
    case (windowWidth > 782 && windowWidth < 1110) && howMany > 6:
      return 6

    case (windowWidth < 782) && howMany > 4:
      return 4

    case howMany > 8:
      return 8

    default:
      return howMany
  }
}

export function getTeamsImagesByCharacter(selectedCharacter: Character) {
  const imagesget = getTeamByUniverse(selectedCharacter.biography.publisher).reduce((acc, teamToFind) => {
    const teamsByCharacter = selectedCharacter.connections.groupAffiliation.split(/,|;/)
    let imageTeam

    function findWordBetweenSpaces(inputString: string, targetWord: string): boolean {
      const regex = new RegExp(`\\b${targetWord}\\b`);
      return regex.test(inputString);
    }

    teamsByCharacter.forEach((team) => {
      // if (team.trim().toLowerCase().includes(teamToFind.value.toLowerCase()) && teamToFind.img) {
      if (findWordBetweenSpaces(team.trim().toLowerCase(), teamToFind.value.toLowerCase().trim())
        /* (team.trim().toLowerCase() === teamToFind.value.toLowerCase() ||
          (
            (
              team.trim().toLowerCase().includes(` ${teamToFind.value.toLowerCase()} `)
              ||
              team.trim().toLowerCase().includes(` ${teamToFind.value.toLowerCase()},`)
              &&
              team.trim().toLowerCase().includes(`${teamToFind.value.toLowerCase()}`)
            )
          )
        )
        && teamToFind.img */
      ) {
        imageTeam = teamToFind
      }
    });
    if (imageTeam) acc.push(imageTeam)
    return acc

  }, new Array())

  const uniqueIds = new Set();
  const filteredArray = imagesget.filter(obj => {
    const value = obj.value;
    if (value !== undefined && !uniqueIds.has(value)) {
      uniqueIds.add(value);
      return true;
    }
    return false;
  });
  // console.log(filteredArray)

  return filteredArray
}