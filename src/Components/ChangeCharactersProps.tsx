import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "../constants";
import { resetCharactersSelection } from "../functions";
import { ChangeCharactersProps } from "../types";
import ButtonChangeCharacter from "./Reusable/ButtonChangeCharacter";
import SelectInput from "./Reusable/SelectInput";

function ModalChangeCharacters({
    characterName,
    setCharacterName,
    howMany,
    setHowMany,
    asHowManyAsPossible,
    setAsHowManyAsPossible,
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
    refetchCharacters,

    setHeroSection,
    setTeamMembers,

    isLoading,
    isFetching,
}: ChangeCharactersProps) {
    const teamByUniverse: { name: string, value: string }[] = getTeamByUniverse(universe)

    return (
        <div >
            <p className="text-lg font-bold">Select characters features</p>

            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Type the name or names</span>
                </label>
                <div className="flex flex-col">
                    <div className="input-group w-full ">
                        <input
                            data-test="input-Name"
                            value={characterName === null ? "" : characterName}
                            onChange={(event) => setCharacterName(event.target.value)}
                            type="text"
                            placeholder={characterOrFullName === false ? "Batman / Batman, Ironman..." : "Bruce Wayne, Tony Stark..."}
                            className="input input-bordered w-full"
                        />
                        <div className="btn" onClick={() => setCharacterName("")}>x</div>
                    </div>
                    <div className="flex justify-center items-center m-2">
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
            </div>

            <div className="form-control w-full">
                <label className="label">
                    {/* <span className="label-text">Select how many characters | [0 means All]</span> */}
                    <span className="label-text">Select how many characters</span>
                </label>
                {/* <input
                    data-test="input-HowMany"
                    value={howMany ?? ""}
                    onChange={(event) => setHowMany(parseInt(event.target.value))}
                    type="number"
                    placeholder="Type how many characters to show"
                    className="input input-bordered w-full"
                    min={1}
                /> */}
                <div className="w-full flex flex-col justify-center items-center ">
                    <input
                        data-test="range-HowMany"
                        value={asHowManyAsPossible ? 691 : howMany ?? ""}
                        type="range"
                        min={1}
                        max={691}
                        className="range"
                        onChange={(event) => setHowMany(parseInt(event.target.value))}
                        disabled={asHowManyAsPossible}
                    />
                </div>
                <div className="w-full text-center">
                    <p>{asHowManyAsPossible ? 'All' : howMany}</p>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer flex justify-center items-center gap-5">
                        <span className="label-text">All characters in these categories</span>
                        <input data-test="ashowmanyaspossible" onChange={() => setAsHowManyAsPossible(prev => !prev)} type="checkbox" checked={asHowManyAsPossible} className="checkbox" />
                    </label>
                </div>
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

            {
                universe !== 'All' ?
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
                    :
                    null
            }


            <div className="flex flex-col gap-5 justify-around mt-5">
                <ButtonChangeCharacter
                    dataTest="btn-FindFilters"
                    classNameSended="btn-success"
                    functionSended={() => {
                        refetchCharacters()
                        setViewFavorites(false)
                    }}
                    forWhat="Find by filters"
                    loadingOrFetching={isLoading || isFetching}
                />

                <ButtonChangeCharacter
                    dataTest="btn-Favorites"
                    classNameSended="btn-warning"
                    functionSended={() => {
                        setViewFavorites(true)
                    }}
                    forWhat="Favorites"
                />

                <ButtonChangeCharacter
                    dataTest="btn-Reset"
                    classNameSended="btn-danger"
                    functionSended={() => {
                        resetCharactersSelection(setCharacterName, setHowMany, setAsHowManyAsPossible, setSide, setUniverse, setTeam, setGender, setHeroSection, setTeamMembers)
                        setViewFavorites(false)
                        refetchCharacters()
                    }}
                    forWhat="Reset filters"
                />
            </div>
        </div>
    )
}





export default ModalChangeCharacters