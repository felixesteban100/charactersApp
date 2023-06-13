
type ModalChangeCharactersProps = {
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
    viewFavorites: () => void
    includeNameOrExactName: boolean;
    setIncludeNameOrExactName: React.Dispatch<React.SetStateAction<boolean>>
    characterOrFullName: boolean,
    setCharacterOrFullName: React.Dispatch<React.SetStateAction<boolean>>,

    filterCharacters: () => void
    resetCharactersSelection: () => void
}

function ModalChangeCharacters({
    characterName,
    setCharacterName,
    howMany,
    setHowMany,
    gender,
    setGender,
    side,
    setSide,
    universe,
    setUniverse,
    team,
    setTeam,
    race,
    setRace,
    viewFavorites,
    includeNameOrExactName,
    setIncludeNameOrExactName,
    characterOrFullName,
    setCharacterOrFullName,

    filterCharacters,
    resetCharactersSelection
}: ModalChangeCharactersProps) {
    let teamByUniverse: { name: string, value: string }[] = []

    switch (universe) {
        case "Marvel Comics":
            teamByUniverse = [
                {
                    name: "Asgardians",
                    value: "Asgardians"
                },
                {
                    name: "Avengers",
                    value: "Avengers"
                },
                {
                    name: "Avengers (Original)",
                    value: "Avengers (Original)"
                },
                {
                    name: "Black Order",
                    value: "Black Order"
                },
                {
                    name: "Brotherhood of Evil Mutants",
                    value: "Brotherhood of Evil Mutants"
                },
                {
                    name: "Dark avengers",
                    value: "Dark avengers"
                },
                {
                    name: "Defenders",
                    value: "Defenders"
                },
                {
                    name: "Fantastic Four",
                    value: "Fantastic Four"
                },
                {
                    name: "Fantastic Four(Original)",
                    value: "Fantastic Four(Original)"
                },
                {
                    name: "Future Foundation",
                    value: "Future Foundation"
                },
                {
                    name: "Guardians of the Galaxy",
                    value: "Guardians of the Galaxy"
                },
                {
                    name: "Heroes For Hire",
                    value: "Heroes For Hire"
                },
                {
                    name: "Hulk Family",
                    value: "Hulk Family"
                },
                {
                    name: "Hydra",
                    value: "Hydra"
                },
                {
                    name: "Illuminati",
                    value: "Illuminati"
                },
                {
                    name: "Inhumans",
                    value: "Inhumans"
                },
                {
                    name: "Asgardians",
                    value: "Asgardians"
                },
                {
                    name: "Legion of Monsters",
                    value: "Legion of Monsters"
                },
                {
                    name: "Marvel Knights",
                    value: "Marvel Knights"
                },
                {
                    name: "Midnight Sons",
                    value: "Midnight Sons"
                },
                {
                    name: "New Mutans",
                    value: "New Mutans"
                },
                {
                    name: "New Warriors",
                    value: "New Warriors"
                },
                {
                    name: "Secret Avengers",
                    value: "Secret Avengers"
                },
                {
                    name: "Sinister Six",
                    value: "Sinister Six"
                },
                {
                    name: "Spider-Army",
                    value: "Spider-Army"
                },
                {
                    name: "Symbiotes",
                    value: "Symbiotes"
                },
                {
                    name: "Thunderbolts",
                    value: "Thunderbolts"
                },
                {
                    name: "Ultimates",
                    value: "Ultimates"
                },
                {
                    name: "Weapon X",
                    value: "Weapon X"
                },
                {
                    name: "X-Force",
                    value: "X-Force"
                },
                {
                    name: "X-Men",
                    value: "X-Men"
                },
                {
                    name: "X-Men (Original)",
                    value: "X-Men (Original)"
                },
                {
                    name: "Young avengers",
                    value: "Young avengers"
                },
            ]
            break;

        case "DC Comics":
            teamByUniverse = [
                {
                    name: "Aquaman Family",
                    value: "Aquaman Family"
                },
                {
                    name: 'Assorted Batman rogues',
                    value: 'Assorted Batman rogues',
                },
                {
                    name: "Batman Family",
                    value: "Batman Family",
                },
                {
                    name: "Crimebusters / Watchmen",
                    value: "Crimebusters",
                },
                {
                    name: "Crime Syndicate",
                    value: "Crime Syndicate",
                },
                {
                    name: "Flash Family / Speedsters",
                    value: "Flash Family",
                },
                {
                    name: "Green Lantern Corps",
                    value: "Green Lantern Corps",
                },
                {
                    name: "Injustice League",
                    value: "Injustice League",
                },
                {
                    name: "Justice League",
                    value: "Justice League",
                },
                {
                    name: "Justice League (Original)",
                    value: "Justice League (Original)",
                },
                {
                    name: "Justice League Dark",
                    value: "Justice League Dark",
                },
                {
                    name: "Justice Society of America",
                    value: "Justice Society of America",
                },
                {
                    name: "Lanterns Corps (All)",
                    value: "Lantern Corps",
                },
                {
                    name: "The Terrifics",
                    value: "The Terrifics",
                },
                {
                    name: "Legion of Super-Heroes",
                    value: "Legion of Super-Heroes",
                },
                {
                    name: "Marvel Family",
                    value: "Marvel Family",
                },
                {
                    name: "New Guardians Corps",
                    value: "New Guardians",
                },
                {
                    name: "Outsiders",
                    value: "Outsiders",
                },
                {
                    name: "Secret Society of Super Villains",
                    value: "Secret Society of Super Villains",
                },
                {
                    name: "Suicide Squad",
                    value: "Suicide Squad",
                },
                {
                    name: "Superman Family / Kriptonian",
                    value: "Superman Family",
                },
                {
                    name: "Teen Titans",
                    value: "Teen Titans",
                }
            ]
            break;

        case "Dark Horse Comics":
            teamByUniverse = [
                {
                    name: "Incredible Family",
                    value: "Incredible Family"
                },
            ]
            break;

        case "IDW Publishing":
            teamByUniverse = [
                {
                    name: "Teenage Mutant Ninja Turtles",
                    value: "Teenage Mutant Ninja Turtles"
                },
            ]
            break;

        case "Shueisha":
            teamByUniverse = [
                {
                    name: "One Piece",
                    value: "One Piece"
                },
                {
                    name: "Black Clover",
                    value: "Black Clover"
                },
                {
                    name: "Dragon Ball",
                    value: "Dragon Ball"
                },
                {
                    name: "Demon Slayer",
                    value: "Demon Slayer"
                },
                {
                    name: "Jujutsu Kaisen",
                    value: "Jujutsu Kaisen"
                },
                {
                    name: "Bleach",
                    value: "Bleach"
                },
                {
                    name: "Attack on Titan",
                    value: "Attack on Titan"
                },
                {
                    name: "Naruto Shippuden",
                    value: "Naruto Shippuden"
                },
                {
                    name: "One Punch Man",
                    value: "One Punch Man"
                },
                {
                    name: "Chainsaw Man",
                    value: "Chainsaw Man"
                },
                {
                    name: "Metal Alchemist",
                    value: "Metal Alchemist"
                },
            ]
            break;

        case "Warner Bros":
            teamByUniverse = [
                {
                    name: "Ben 10",
                    value: "Ben 10"
                }
            ]
            break;
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-change" className="modal-toggle" />

            <label htmlFor="my-modal-change" className="modal cursor-pointer">
                <label className="modal-box relative flex flex-col gap-5" htmlFor="">
                    <label htmlFor="my-modal-change" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className="text-lg font-bold">Select characters features</p>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Type the name or names</span>
                        </label>
                        <div className="input-group w-full">
                            <input
                                value={characterName === null ? "" : characterName}
                                onChange={(event) => setCharacterName(event.target.value)}
                                type="text"
                                placeholder={characterOrFullName === false ? "Batman / Batman, Ironman..." : "Bruce Wayne, Tony Stark..."}
                                className="input input-bordered w-full"
                            />
                            <label className="swap swap-flip text-4xl">
                                <input
                                    type="checkbox"
                                    onChange={() => setIncludeNameOrExactName(prev => !prev)}
                                    checked={includeNameOrExactName}
                                />

                                <div className="swap-on tooltip" data-tip="includes name">🔄</div>
                                <div className="swap-off tooltip" data-tip="exact name">🎯</div>
                            </label>

                            <label className="swap swap-flip text-4xl">
                                <input
                                    type="checkbox"
                                    onChange={() => setCharacterOrFullName(prev => !prev)}
                                    checked={characterOrFullName}
                                />

                                <div className="swap-on tooltip" data-tip="person name">😀</div>
                                <div className="swap-off tooltip" data-tip="character name">🦸‍♂️</div>
                            </label>
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Select how many characters | [0 means All]</span>
                        </label>
                        <input value={howMany ?? ""} onChange={(event) => setHowMany(parseInt(event.target.value))} type="number" placeholder="Type how many characters to show" className="input input-bordered w-full" min={1} />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick the gender</span>
                        </label>
                        <select value={gender} onChange={(event) => setGender(event.target.value)} className="select select-bordered">
                            <option value={"All"}>Both genders</option>
                            <option value={"Female"}>Female</option>
                            <option value={"Male"}>Male</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick the characters race</span>
                        </label>
                        <select value={race} onChange={(event) => setRace(event.target.value)} className="select select-bordered">
                            <option value="All">All races</option>
                            <option value="Human">Human</option>
                            <option value="Metahuman">Metahuman</option>
                            <option value="Alien">Alien</option>
                            <option value="Kryptonian">Kryptonian</option>
                            <option value="Symbiote">Symbiote</option>
                            <option value="Mutant">Mutant</option>
                            <option value="Atlantean">Atlantean</option>
                            <option value="Demon">Demon</option>
                            <option value="Android">Android</option>
                            <option value="Cyborg">Cyborg</option>
                            <option value="Animal">Animal</option>
                            <option value="Zombie">Zombie</option>
                            <option value="Amazon">Amazon</option>
                            <option value="Eternal">Eternal</option>
                            <option value="Inhuman">Inhuman</option>
                            <option value="Asgardian">Asgardian </option>
                            <option value="Cosmic Entity">Cosmic Entity</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick the character alignment</span>
                        </label>
                        <select value={side} onChange={(event) => setSide(event.target.value)} className="select select-bordered">
                            <option value="All">All aligments</option>
                            <option value="good">Hero</option>
                            <option value="bad">Villain</option>
                            <option value="neutral">Anti-hero</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick the characters universe</span>
                        </label>
                        <select value={universe} onChange={(event) => {
                            setUniverse(event.target.value)
                            setTeam("All")
                        }} className="select select-bordered">
                            <option value="All">All universes</option>
                            <option value="Marvel Comics">Marvel</option>
                            <option value="DC Comics">DC</option>
                            <option value="Shueisha">Shueisha</option>
                            <option value="Dark Horse Comics">Dark Horse Comics</option>
                            <option value="George Lucas">George Lucas</option>
                            <option value="IDW Publishing">IDW Publishing</option>
                            <option value="Image Comics">Image Comics</option>
                            <option value="Warner Bros">Warner Bros</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Pick the team</span>
                        </label>
                        <select value={team} onChange={(event) => setTeam(event.target.value)} className="select select-bordered">
                            <option>All teams</option>
                            {
                                teamByUniverse.map((current, index) => (
                                    <option key={index} value={current.value}>{current.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 justify-around">
                        <label
                            htmlFor="my-modal-change"
                            className="btn btn-primary"
                            onClick={() => filterCharacters()}
                        >
                            Find by filters
                        </label>
                        <label
                            htmlFor="my-modal-change"
                            className="btn btn-warning"
                            onClick={() => viewFavorites()}
                        >
                            Favorites
                        </label>
                        <label
                            htmlFor="my-modal-change"
                            className="btn btn-danger"
                            onClick={() => resetCharactersSelection()}
                        >
                            Reset filters
                        </label>
                    </div>

                </label>
            </label>
        </div>
    )
}

export default ModalChangeCharacters