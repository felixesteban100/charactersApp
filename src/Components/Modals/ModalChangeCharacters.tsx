import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "../../constants";
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
    includeNameOrExactName,
    setIncludeNameOrExactName,
    characterOrFullName,
    setCharacterOrFullName,

    setViewFavorites,
    filterCharacters,
    resetCharactersSelection
}: ModalChangeCharactersProps) {
    const teamByUniverse: { name: string, value: string }[] = getTeamByUniverse(universe)

    return (
        <div>
            {/* <input type="checkbox" id="my-modal-change" className="modal-toggle" /> */}

            {/* <label htmlFor="my-modal-change" className="modal cursor-pointer">
                <label className="modal-box relative flex flex-col gap-5" htmlFor="">
                    <label htmlFor="my-modal-change" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}

            <p className="text-lg font-bold">Select characters features</p>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Type the name or names</span>
                </label>
                <div className="input-group w-full">
                    <input
                        data-test="input-Name"
                        value={characterName === null ? "" : characterName}
                        onChange={(event) => setCharacterName(event.target.value)}
                        type="text"
                        placeholder={characterOrFullName === false ? "Batman / Batman, Ironman..." : "Bruce Wayne, Tony Stark..."}
                        className="input input-bordered w-full"
                    />
                    <label className="swap swap-flip text-4xl">
                        <input
                            data-test="includeOrExactName"
                            type="checkbox"
                            onChange={() => setIncludeNameOrExactName(prev => !prev)}
                            checked={includeNameOrExactName}
                        />

                        <div className="swap-on tooltip" data-tip="includes name">🔄</div>
                        <div className="swap-off tooltip" data-tip="exact name">🎯</div>
                    </label>

                    <label className="swap swap-flip text-4xl">
                        <input
                            data-test="fullOrCharacterName"
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
                <input
                    data-test="input-HowMany"
                    value={howMany ?? ""}
                    onChange={(event) => setHowMany(parseInt(event.target.value))}
                    type="number"
                    placeholder="Type how many characters to show"
                    className="input input-bordered w-full"
                    min={1}
                />
            </div>


            <SelectInput
                dataTest={'select-Gender'}
                value={gender}
                options={ALLGENDERS}
                onChangeFunction={(event) => setGender(event.target.value)}
                forWhat={'gender'}
            />

            <SelectInput
                dataTest={'select-Race'}
                value={race}
                options={ALLRACES}
                onChangeFunction={(event) => setRace(event.target.value)}
                forWhat={'characters race'}
            />

            <SelectInput
                dataTest={'select-Aligment'}
                value={side}
                options={ALLALIGMENTS}
                onChangeFunction={(event) => setSide(event.target.value)}
                forWhat={'character alignment'}
            />

            <SelectInput
                dataTest={'select-Universe'}
                value={universe}
                options={ALLUNIVERSE}
                onChangeFunction={(event) => {
                    setUniverse(event.target.value)
                    setTeam("All")
                }}
                forWhat={'characters universe'}
            />

            <SelectInput
                dataTest={'select-Team'}
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

            {/* <div className="flex flex-col md:flex-row gap-5 justify-around"> */}
            <div className="flex flex-col gap-5 justify-around mt-5">
                <ButtonChangeCharacter
                    dataTest="btn-FindFilters"
                    // htmlFor={"my-modal-change"}
                    classNameSended="btn-primary"
                    functionSended={() => {
                        filterCharacters();
                        setViewFavorites(false)
                    }}
                    forWhat="Find by filters"
                />

                <ButtonChangeCharacter
                    dataTest="btn-Favorites"
                    // htmlFor={"my-modal-change"}
                    classNameSended="btn-warning"
                    functionSended={() => {
                        setViewFavorites(true)
                    }}
                    forWhat="Favorites"
                />

                <ButtonChangeCharacter
                    dataTest="btn-Reset"
                    // htmlFor={"my-modal-change"}
                    classNameSended="btn-danger"
                    functionSended={() => {
                        resetCharactersSelection()
                        setViewFavorites(false)
                    }}
                    forWhat="Reset filters"
                />
            </div>

            {/* </label>
            </label> */}
        </div>
    )
}



function SelectInput({ value, options, onChangeFunction, forWhat, dataTest }: SelectInputProps) {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Pick the {forWhat}</span>
            </label>
            <select
                value={value}
                onChange={onChangeFunction}
                className="select select-bordered"
                data-test={dataTest}
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


function ButtonChangeCharacter({ /* htmlFor,  */classNameSended, functionSended, forWhat, dataTest }: ButtonChangeCharacterProps) {
    return (
        <div /* label */
            key={forWhat}
            // htmlFor={htmlFor}
            className={`btn ${classNameSended}`}
            onClick={functionSended}
            data-test={dataTest}
        >
            {forWhat}
        </div> /* </label> */ 
    )
}

export default ModalChangeCharacters