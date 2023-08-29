import { ALLALIGMENTS, ALLGENDERS, ALLRACES, ALLUNIVERSE, getTeamByUniverse } from "../../constants";
import { resetCharactersSelection } from "../../functions";
import { ModalChangeCharactersProps } from "../../types";
import ButtonChangeCharacter from "../Reusable/ButtonChangeCharacter";
import SelectInput from "../Reusable/SelectInput";

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
    refetchCharacters,

    setHeroSection,
    setTeamMembers
}: ModalChangeCharactersProps) {
    const teamByUniverse: { name: string, value: string }[] = getTeamByUniverse(universe)

    return (
        <div>
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
                        data-test="input-HowMany"
                        value={howMany ?? ""}
                        type="range"
                        min={1}
                        max={691}
                        className="range"
                        onChange={(event) => setHowMany(parseInt(event.target.value))}
                    />
                </div>
                <div className="w-full text-center">
                    <p>{howMany}</p>
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


            <div className="flex flex-col gap-5 justify-around mt-5">
                <ButtonChangeCharacter
                    dataTest="btn-FindFilters"
                    classNameSended="btn-primary"
                    functionSended={() => {
                        refetchCharacters()
                        setViewFavorites(false)
                    }}
                    forWhat="Find by filters"
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
                        resetCharactersSelection(setCharacterName, setHowMany, setSide, setUniverse, setTeam, setGender, setHeroSection, setTeamMembers)
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