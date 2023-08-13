/* filtering characters */
import { Character } from "../../types";

/* see if I can use the Array.prototype.reduce() method instead of this function, an modify the functions below to adapt them to the reduce pattern, i mean to use them in this function as a comparison statement */

/* export function filterCharacters(
    allCharactersSAVED: Character[],
    characterName: string,
    includeNameOrExactName: boolean,
    characterOrFullName: boolean,
    team: string,
    side: string,
    universe: string,
    gender: string,
    race: string,
    howMany: number,
    setCharactersFiltered: React.Dispatch<React.SetStateAction<Character[] | []>>,
    setHeroSection: React.Dispatch<React.SetStateAction<{
        imgs: string[];
        title: string;
        description: string;
    }>>,
    setTeamMembers: React.Dispatch<React.SetStateAction<Character[] | [] | undefined>>
) {
    if (allCharactersSAVED !== undefined) {
        let result: Character[] = []
        let firstFilter: Character[] = []
        const randomizedArray = allCharactersSAVED.sort(() => Math.random() - 0.5);

        // filter name
        if (characterName === "") {
            firstFilter = randomizedArray
        }

        if (characterName !== "") {
            let resultArr: Character[] = []
            let name = [characterName]


            if (characterName.includes(",")) name = characterName.split(",").map(current => current.trim())

            name.forEach((currentName) => {
                randomizedArray.forEach(charac => {
                    let comparison

                    if (includeNameOrExactName === true) {
                        comparison = characterOrFullName === false
                            ? charac.name.toLowerCase().includes(currentName.toLowerCase())
                            : charac.biography.fullName.toLowerCase().includes(currentName.toLowerCase())
                    } else {
                        comparison = characterOrFullName === false
                            ? charac.name.toLowerCase() === currentName.toLowerCase()
                            : charac.biography.fullName.toLowerCase() === currentName.toLowerCase()
                    }


                    if (comparison === true) {
                        resultArr.push(charac)
                    }
                })
            })
            firstFilter = resultArr
        }


        // filter attributes
        if (team === "All") {
            result = getCharactersByTeamNotSended(firstFilter, side, universe, gender, race)

        }
        if (team !== "All") {
            result = getCharactersByTeamSended(firstFilter, team, side, universe, gender, race)
        }

        // filter how Many
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
} */

export function getCharactersByTeamNotSended(firstFilter: Character[], side: string, universe: string, gender: string, race: string) {
    let resultArr: Character[] = []
    firstFilter.forEach((current: Character) => {
        const currentReturned = confirmConditions(current, side, universe, gender, race)
        if (currentReturned !== undefined) resultArr.push(currentReturned)
    })
    return resultArr
}

export function getCharactersByTeamSended(firstFilter: Character[], team: string, side: string, universe: string, gender: string, race: string) {
    let resultArr: Character[] = []
    firstFilter.forEach((current: Character) => {
        if (current.connections.groupAffiliation.includes(team)) {
            let currentReturned = confirmConditions(current, side, universe, gender, race)
            if (currentReturned !== undefined) resultArr.push(currentReturned)
        }
    })
    return resultArr
}

export function confirmConditions(current: Character, side: string, universe: string, gender: string, race: string) {
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

export function filterAttributes(result: Character[], firstFilter: Character[], team: string, side: string, universe: string, gender: string, race: string) {
    if (team === "All") {
        result = getCharactersByTeamNotSended(firstFilter, side, universe, gender, race);

    }
    if (team !== "All") {
        result = getCharactersByTeamSended(firstFilter, team, side, universe, gender, race);
    }
    return result;
}

export function filterName(firstFilter: Character[], randomizedArray: Character[], characterName: string, includeNameOrExactName: boolean, characterOrFullName: boolean) {
    if (characterName === "") {
        firstFilter = randomizedArray;
    }

    if (characterName !== "") {
        let resultArr: Character[] = [];
        let name = [characterName];

        if (characterName.includes(",")) name = characterName.split(",").map(current => current.trim());

        name.forEach((currentName) => {
            randomizedArray.forEach(charac => {
                let comparison;

                if (includeNameOrExactName === true) {
                    comparison = characterOrFullName === false
                        ? charac.name.toLowerCase().includes(currentName.toLowerCase())
                        : charac.biography.fullName.toLowerCase().includes(currentName.toLowerCase());
                } else {
                    comparison = characterOrFullName === false
                        ? charac.name.toLowerCase() === currentName.toLowerCase()
                        : charac.biography.fullName.toLowerCase() === currentName.toLowerCase();
                }

                if (comparison === true) {
                    resultArr.push(charac);
                }
            });
        });
        firstFilter = resultArr;
    }
    return firstFilter;
}

/* filtering characters */

export function resetLocalStorage() {
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
}