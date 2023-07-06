import { ButtonChangeCharacterProps, ModalChangeCharactersProps, SelectInputProps } from "../../types";



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


                    <SelectInput
                        value={gender}
                        options={[
                            {
                                value: "All",
                                name: "Both genders"
                            },
                            {
                                value: "Female",
                                name: "Female"
                            },
                            {
                                value: "Male",
                                name: "Male"
                            },
                        ]}
                        onChangeFunction={(event) => setGender(event.target.value)}
                        forWhat={'gender'}
                    />

                    <SelectInput
                        value={race}
                        options={[
                            { value: "All", name: "All races" },
                            { value: "Human", name: "Human" },
                            { value: "Metahuman", name: "Metahuman" },
                            { value: "Alien", name: "Alien" },
                            { value: "Kryptonian", name: "Kryptonian" },
                            { value: "Symbiote", name: "Symbiote" },
                            { value: "Mutant", name: "Mutant" },
                            { value: "Atlantean", name: "Atlantean" },
                            { value: "Demon", name: "Demon" },
                            { value: "Android", name: "Android" },
                            { value: "Cyborg", name: "Cyborg" },
                            { value: "Animal", name: "Animal" },
                            { value: "Zombie", name: "Zombie" },
                            { value: "Amazon", name: "Amazon" },
                            { value: "Eternal", name: "Eternal" },
                            { value: "Inhuman", name: "Inhuman" },
                            { value: "Asgardian", name: "Asgardian" },
                            { value: "Cosmic Entity", name: "Cosmic Entity" },
                        ]}
                        onChangeFunction={(event) => setRace(event.target.value)}
                        forWhat={'characters race'}
                    />

                    <SelectInput
                        value={side}
                        options={[
                            {
                                value: "All",
                                name: "All aligments"
                            },
                            {
                                value: "good",
                                name: "Hero"
                            },
                            {
                                value: "bad",
                                name: "Villain"
                            },
                            {
                                value: "neutral",
                                name: "Anti-hero"
                            },
                        ]}
                        onChangeFunction={(event) => setSide(event.target.value)}
                        forWhat={'character alignment'}
                    />

                    <SelectInput
                        value={universe}
                        options={[
                            { value: "All", name: "All universes" },
                            { value: "Marvel Comics", name: "Marvel" },
                            { value: "DC Comics", name: "DC" },
                            { value: "Shueisha", name: "Shueisha" },
                            { value: "Dark Horse Comics", name: "Dark Horse Comics" },
                            { value: "George Lucas", name: "George Lucas" },
                            { value: "IDW Publishing", name: "IDW Publishing" },
                            { value: "Image Comics", name: "Image Comics" },
                            { value: "Warner Bros", name: "Warner Bros" },
                            { value: "Angel", name: "Angel" },
                            { value: "NBC - Heroes", name: "NBC - Heroes" },
                            { value: "Tempest", name: "Tempest" },
                            { value: "SyFy", name: "SyFy" },
                            { value: "ABC Studios", name: "ABC Studios" },
                            { value: "Icon Comics", name: "Icon Comics" },
                            { value: "Universal Studios", name: "Universal Studios" },
                            { value: "Gemini V", name: "Gemini V" },
                            { value: "Star Trek", name: "Star Trek" },
                            { value: "Goliath", name: "Goliath" },
                            { value: "Deadpool", name: "Deadpool" },
                            { value: "Wildstorm", name: "Wildstorm" },
                            { value: "South Park", name: "South Park" },
                            { value: "Sony Pictures", name: "Sony Pictures" },
                            { value: "Vindicator II", name: "Vindicator II" },
                            { value: "Image Comics", name: "Image Comics" },
                            { value: "Titan Books", name: "Titan Books" },
                            { value: "J. K. Rowling", name: "J. K. Rowling" },
                            { value: "Microsoft", name: "Microsoft" },
                            { value: "She-Thing", name: "She-Thing" },
                            { value: "Rebellion", name: "Rebellion" },
                            { value: "J. R. R. Tolkien", name: "J. R. R. Tolkien" },
                            { value: "-", name: "-" },
                            // { value: null, name: "null" },
                            
                        ]}
                        onChangeFunction={(event) => {
                            setUniverse(event.target.value)
                            setTeam("All")
                        }}
                        forWhat={'characters universe'}
                    />

                    <SelectInput
                        value={team}
                        options={[
                            { value: "All", name: "All teams" },
                            ...teamByUniverse.map((current) => {
                                return {
                                    value: current.value,
                                    name: current.name,
                                }
                            })
                        ]}
                        onChangeFunction={(event) => setTeam(event.target.value)}
                        forWhat={'the team'}
                    />

                    <div className="flex flex-col md:flex-row gap-5 justify-around">
                        <ButtonChangeCharacter
                            htmlFor={"my-modal-change"}
                            classNameSended="btn-primary"
                            functionSended={() => { filterCharacters() }}
                            forWhat="Find by filters"
                        />

                        <ButtonChangeCharacter
                            htmlFor={"my-modal-change"}
                            classNameSended="btn-warning"
                            functionSended={() => { viewFavorites() }}
                            forWhat="Favorites"
                        />

                        <ButtonChangeCharacter
                            htmlFor={"my-modal-change"}
                            classNameSended="btn-danger"
                            functionSended={() => { resetCharactersSelection() }}
                            forWhat="Reset filters"
                        />
                    </div>
                </label>
            </label>
        </div>
    )
}



function SelectInput({ value, options, onChangeFunction, forWhat }: SelectInputProps) {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Pick the {forWhat}</span>
            </label>
            <select
                value={value}
                onChange={onChangeFunction}
                className="select select-bordered"
            >
                {
                    options.map((current, index) => (
                        <option key={index} value={typeof current.value === "string" ? current.value : "null"}>{current.name}</option>
                    ))
                }
            </select>
        </div>
    )
}


function ButtonChangeCharacter({ htmlFor, classNameSended, functionSended, forWhat }: ButtonChangeCharacterProps) {
    return (
        <>
            <label
                htmlFor={htmlFor}
                className={`btn ${classNameSended}`}
                onClick={functionSended}
            >
                {forWhat}
            </label>
        </>
    )
}

export default ModalChangeCharacters