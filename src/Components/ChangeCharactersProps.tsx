import { SetURLSearchParams } from "react-router-dom";
import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "../constants";
import { resetCharactersSelection } from "../functions";
import { Character } from "../types";
import ButtonChangeCharacter from "./Reusable/ButtonChangeCharacter";
import SelectInput from "./Reusable/SelectInput";

type ChangeCharactersProps = {
    characterName: string;
    // setCharacterName: React.Dispatch<React.SetStateAction<string>>
    howMany: string | number
    // setHowMany: React.Dispatch<React.SetStateAction<number>>
    asHowManyAsPossible: boolean
    // setAsHowManyAsPossible: React.Dispatch<React.SetStateAction<boolean>>
    side: string
    // setSide: React.Dispatch<React.SetStateAction<string>>
    universe: string;
    // setUniverse: React.Dispatch<React.SetStateAction<string>>
    team: string;
    // setTeam: React.Dispatch<React.SetStateAction<string>>
    gender: string;
    // setGender: React.Dispatch<React.SetStateAction<string>>
    race: string;
    // setRace: React.Dispatch<React.SetStateAction<string>>
    includeNameOrExactName: boolean;
    // setIncludeNameOrExactName: React.Dispatch<React.SetStateAction<boolean>>
    characterOrFullName: boolean,
    // setCharacterOrFullName: React.Dispatch<React.SetStateAction<boolean>>,

    viewFavorites: boolean
    // setViewFavorites :React.Dispatch<React.SetStateAction<boolean>>
    // setViewFavorites: (f: boolean) => void
    refetchCharacters: () => void
    setHeroSection: React.Dispatch<React.SetStateAction<{
        imgs: string[];
        title: string;
        description: string;
    }>>
    setTeamMembers: React.Dispatch<React.SetStateAction<Character[]>>

    // setCharacterName: (name: string) => void,
    // setHowMany: (num: number) => void,
    // setAsHowManyAsPossible: (howManyAsP?: boolean) => void,
    // setSide: (sideS: string) => void,
    // setUniverse: (universeS: string) => void,
    // setTeam: (teamS: string) => void,
    // setGender: (genderS: string) => void,
    // setRace: (raceS: string) => void,
    // setHeroSection: (heroSec: {
    //     imgs: string[];
    //     title: string;
    //     description: string;
    // }) => void,
    // setTeamMembers: (teamMembersS: Character[]) => void,
    // setIncludeNameOrExactName: (/* includeOrExact?: boolean */) => void,
    // setCharacterOrFullName: (/* characOrFullName?: boolean */) => void

    isLoading: boolean;
    isFetching: boolean;
    setSearchDifferentCharacters: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchParams: SetURLSearchParams
}

function ModalChangeCharacters({
    characterName,
    // setCharacterName,
    howMany,
    // setHowMany,
    asHowManyAsPossible,
    // setAsHowManyAsPossible,
    gender,
    // setGender,
    side,
    // setSide,
    universe,
    // setUniverse,
    team,
    // setTeam,
    race,
    // setRace,
    includeNameOrExactName,
    // setIncludeNameOrExactName,
    characterOrFullName,
    // setCharacterOrFullName,

    // setViewFavorites,
    viewFavorites,
    refetchCharacters,

    setHeroSection,
    setTeamMembers,

    isLoading,
    isFetching,
    setSearchDifferentCharacters,
    setSearchParams
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
                            // onChange={(event) => setCharacterName(event.target.value)}
                            onChange={(event) => setSearchParams((prev) => {
                                prev.set('characterName', event.target.value)
                                return prev
                            }, { replace: true })}
                            type="text"
                            placeholder={characterOrFullName === false ? "Batman / Batman, Iron man..." : "Bruce Wayne, Tony Stark..."}
                            className="input input-bordered w-full"
                        />
                        {/* <div className="btn" onClick={() => setCharacterName("")}>x</div> */}
                        <div className="btn" onClick={() => setSearchParams((prev) => {
                            prev.set('characterName', "")
                            return prev
                        }, { replace: true })}>x</div>
                    </div>
                    <div className="flex justify-center items-center m-2">
                        <label className="swap swap-flip text-4xl">
                            <input
                                data-test="includeOrExactName"
                                type="checkbox"
                                onChange={() => setSearchParams((prev) => {
                                    prev.set('includeNameOrExactName', (!includeNameOrExactName).toString())
                                    return prev
                                }, { replace: true }) /* setIncludeNameOrExactName(prev => !prev) */}
                                checked={includeNameOrExactName}
                            />

                            <div className="swap-on tooltip" data-tip="includes name">🔄</div>
                            <div className="swap-off tooltip" data-tip="exact name">🎯</div>
                        </label>
                        <label className="swap swap-flip text-4xl">
                            <input
                                data-test="fullOrCharacterName"
                                type="checkbox"
                                onChange={() => setSearchParams((prev) => {
                                    prev.set('characterOrFullName', (!characterOrFullName).toString())
                                    return prev
                                }, { replace: true }) /* setCharacterOrFullName(prev => !prev) */}
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
                        onChange={(event) => setSearchParams((prev) => {
                            prev.set('howMany', event.target.value.toString())
                            return prev
                        }, { replace: true })}
                        disabled={asHowManyAsPossible}
                    />
                </div>
                <div className="w-full text-center">
                    <p>{asHowManyAsPossible ? 'All' : howMany}</p>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer flex justify-center items-center gap-5">
                        <span className="label-text">All characters in these categories</span>
                        <input data-test="ashowmanyaspossible" onChange={() => setSearchParams((prev) => {
                            prev.set('asHowManyAsPossible', (!asHowManyAsPossible).toString())
                            return prev
                        }, { replace: true }) /* setAsHowManyAsPossible(prev => !prev) */} type="checkbox" checked={asHowManyAsPossible} className="checkbox" />
                    </label>
                </div>
            </div>


            <SelectInput
                dataTest={'select-Gender'}
                value={gender}
                options={ALLGENDERS}
                onChangeFunction={(event) => setSearchParams((prev) => {
                    prev.set('gender', event.target.value)
                    return prev
                }, { replace: true })}
                forWhat={'gender'}
            />

            <SelectInput
                dataTest={'select-Race'}
                value={race}
                options={ALLRACES}
                onChangeFunction={(event) => setSearchParams((prev) => {
                    prev.set('race', event.target.value)
                    return prev
                }, { replace: true })}
                forWhat={'characters race'}
            />

            <SelectInput
                dataTest={'select-Aligment'}
                value={side}
                options={ALLALIGMENTS}
                onChangeFunction={(event) => setSearchParams((prev) => {
                    prev.set('side', event.target.value)
                    return prev
                }, { replace: true })}
                forWhat={'character alignment'}
            />

            <SelectInput
                dataTest={'select-Universe'}
                value={universe}
                options={ALLUNIVERSE}
                onChangeFunction={(event) => {
                    setSearchParams((prev) => {
                        prev.set('universe', event.target.value)
                        prev.set('team', 'All')
                        return prev
                    }, { replace: true })
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
                        onChangeFunction={(event) => setSearchParams((prev) => {
                            prev.set('team', event.target.value)
                            return prev
                        }, { replace: true })}
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
                        setSearchDifferentCharacters(true)
                        setTimeout(() => refetchCharacters())
                        setSearchParams((prev) => {
                            prev.set('viewFavorites', (false).toString())
                            return prev
                        }, { replace: true })
                    }}
                    forWhat="Find by filters"
                    loadingOrFetching={isLoading || isFetching}
                />

                <ButtonChangeCharacter
                    dataTest="btn-Favorites"
                    classNameSended="btn-warning"
                    functionSended={() => {
                        setSearchParams((prev) => {
                            prev.set('viewFavorites', (true).toString())
                            return prev
                        }, { replace: true })
                    }}
                    forWhat="Favorites"
                />

                <ButtonChangeCharacter
                    dataTest="btn-Reset"
                    classNameSended="btn-danger"
                    functionSended={() => {
                        resetCharactersSelection(setSearchParams, /* setCharacterName, setHowMany, setAsHowManyAsPossible, setSide, setUniverse, setTeam, setGender, setRace, */ setHeroSection, setTeamMembers, /* setIncludeNameOrExactName, setCharacterOrFullName */)
                        setSearchParams((prev) => {
                            prev.set('viewFavorites', (false).toString())
                            return prev
                        }, { replace: true })
                        setSearchDifferentCharacters(true)
                        setTimeout(() => refetchCharacters())
                    }}
                    forWhat="Reset filters"
                />
            </div>
        </div>
    )
}





export default ModalChangeCharacters