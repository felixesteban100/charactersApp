
export type HeaderProps = {
}

export type CharactersProps = {
    charactersFiltered: Character[]
    manageFavorite: (action: string, characterSelected: Character) => void
    favorites: Character[]
    isLoading: boolean
    viewFavorites: boolean
    selectedCharacter: Character
    setSelectedCharacter:React.Dispatch<React.SetStateAction<Character>>
}

export type Character = {
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

export type ModalCharacterProps = {
    manageFavorite: (action: string, characterSelected: Character) => void
    favorites: Character[]
    selectedCharacter: Character
}

export type ImageZoomProps = {
    image: string,
    character: string,
}

export type ModalSettingsProps = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

export type ModalTeamMembersProps = {
    teamMembers: Character[] | undefined
    team: string;
    universe: string;
}

export type ModalChangeCharactersProps = {
    characterName: string;
    setCharacterName: React.Dispatch<React.SetStateAction<string>>
    howMany: string | number
    setHowMany: React.Dispatch<React.SetStateAction<number>>
    side: string
    setSide: React.Dispatch<React.SetStateAction<string>>
    universe: string;
    setUniverse: React.Dispatch<React.SetStateAction<string>>
    team: string;
    setTeam: React.Dispatch<React.SetStateAction<string>>
    gender: string;
    setGender: React.Dispatch<React.SetStateAction<string>>
    race: string;
    setRace: React.Dispatch<React.SetStateAction<string>>
    includeNameOrExactName: boolean;
    setIncludeNameOrExactName: React.Dispatch<React.SetStateAction<boolean>>
    characterOrFullName: boolean,
    setCharacterOrFullName: React.Dispatch<React.SetStateAction<boolean>>,

    setViewFavorites :React.Dispatch<React.SetStateAction<boolean>>
    filterCharacters: () => void
    resetCharactersSelection: () => void
}

export type ColorPalette = string[];


export type HeroProps = {
    imgs: string[];
    title: string;
    description: string;
}

export type HeroSelectorProps = {
    selectedOne: string;
    heroSection: {
        imgs: string[];
        title: string;
        description: string;
    }
}

export type heroSelectorLookUp = {
    [key: string]: JSX.Element
}

export type SuccessChangedProps = {
    heroSection: { imgs: string[], title: string, description: string }
    charactersFiltered: Character[]
}

export type SelectInputProps = {
    value: string | number
    options: {
        value: string;
        name: string;
    }[]
    onChangeFunction: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    forWhat: string;
    dataTest: string;
}

export type ButtonChangeCharacterProps = {
    // htmlFor: string;
    classNameSended: string;
    functionSended: () => void;
    forWhat: string;
    dataTest: string
}