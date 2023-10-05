import { Character } from "../types"
import { useState, useEffect } from 'react';
import StatContainer from "./Reusable/StatContainer";
import StatNumber from "./Reusable/StatNumber";
import StatString from "./Reusable/StatString";
import StatCollapse from "./Reusable/StatCollapse";
import useWindowWidth from "./../hooks/useWindowWidth";
import { getTeamsImagesByCharacter } from "./../functions";
import { organizedComicsProperty } from "./../constants";

type CharacterFeaturesProps = {
    selectedCharacter: Character;
    setSelectedImageZoomModal: React.Dispatch<React.SetStateAction<string>>
}

function CharacterFeatures({ selectedCharacter, setSelectedImageZoomModal }: CharacterFeaturesProps) {
    const [selectedOption, setSelectedOption] = useState<"Stats" | "Appereance" | "Biography" | "Teams" | "Comics">("Stats")
    const windowWidth = useWindowWidth()

    useEffect(() => {
        if(getTeamsImagesByCharacter(selectedCharacter).length === 0){
            setSelectedOption("Stats")
        }
    }, [selectedCharacter])

    return (
        <div className='mx-auto flex flex-col justify-center gap-3 items-center w-[100%] md:w-[100%] lg:w-[100%]'>
            <div className="w-[95%] grid grid-flow-col grid-col-3">
                <div /* data-test="btn-inModal-stat" */ onClick={() => setSelectedOption("Stats")} className={`pb-10 lg:pb-10 text-xl md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Stats" ? "tab-active" : ""}`}>{windowWidth > 770 ? 'Stats' : '📊'}</div>
                <div /* data-test="btn-inModal-appereance" */ onClick={() => setSelectedOption("Appereance")} className={`pb-10 lg:pb-10 text-xl md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Appereance" ? "tab-active" : ""}`}>{windowWidth > 770 ? 'Appereance' : '👀'}</div>
                <div /* data-test="btn-inModal-biography" */ onClick={() => setSelectedOption("Biography")} className={`pb-10 lg:pb-10 text-xl md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Biography" ? "tab-active" : ""}`}>{windowWidth > 770 ? 'Biography' : '📜'}</div>
                {
                    getTeamsImagesByCharacter(selectedCharacter).length > 0 ?
                        <div /* data-test="btn-inModal-biography" */ onClick={() => setSelectedOption("Teams")} className={`pb-10 lg:pb-10 text-xl md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Teams" ? "tab-active" : ""}`}>{windowWidth > 770 ? 'Teams' : '👪'}</div>
                        :
                        null
                }
                <div /* data-test="btn-inModal-biography" */ onClick={() => setSelectedOption("Comics")} className={`pb-10 lg:pb-10 text-xl md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Comics" ? "tab-active" : ""}`}>{windowWidth > 770 ? 'Comics' : '📕'}</div>
            </div>

            {
                selectedOption === "Stats" ?
                    <StatContainer>
                        <StatNumber
                            statName="Combat"
                            statValue={selectedCharacter.powerstats.combat}
                            icon="👊"
                        />

                        <StatNumber
                            statName="Durability"
                            statValue={selectedCharacter.powerstats.durability}
                            icon="❤"
                        />

                        <StatNumber
                            statName="Intelligence"
                            statValue={selectedCharacter.powerstats.intelligence}
                            icon="🧠"
                        />

                        <StatNumber
                            statName="Power"
                            statValue={selectedCharacter.powerstats.power}
                            icon="🔆"
                        />

                        <StatNumber
                            statName="Speed"
                            statValue={selectedCharacter.powerstats.speed}
                            icon="⚡"
                        />

                        <StatNumber
                            statName="Strength"
                            statValue={selectedCharacter.powerstats.strength}
                            icon="💪"
                        />
                    </StatContainer>
                    :
                    selectedOption === "Appereance" ?
                        <StatContainer>
                            <StatString
                                statName="EyeColor"
                                statValue={selectedCharacter.appearance.eyeColor}
                                icon="👁"
                            />
                            <StatString
                                statName="Gender"
                                statValue={selectedCharacter.appearance.gender}
                                icon={
                                    selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                        "🚹"
                                        :
                                        selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                            "🚺"
                                            :
                                            ""
                                }
                                dataTest="gender-stat"
                            />
                            <StatString
                                statName="Hair color"
                                statValue={selectedCharacter.appearance.hairColor}
                                icon={
                                    selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                        "👱‍♂️"
                                        :
                                        selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                            "👱‍♀️"
                                            :
                                            ""
                                }
                            />
                            <StatString
                                statName="Height"
                                statValue={`${selectedCharacter.appearance.height[0]} | ${selectedCharacter.appearance.height[1]}`}
                                icon="📏"
                            />
                            <StatString
                                statName="Race"
                                statValue={selectedCharacter.appearance.race ?? "Unknown"}
                                icon={
                                    selectedCharacter.appearance.race?.toLowerCase().includes("meta") ?
                                        "🧬"
                                        :
                                        selectedCharacter.appearance.race?.toLowerCase() === "human" ?
                                            "🌎"
                                            :
                                            selectedCharacter.appearance.race?.toLowerCase() === "mutant" ?
                                                "🧬"
                                                :
                                                selectedCharacter.appearance.race?.toLowerCase() === "android" || selectedCharacter.appearance.race?.toLowerCase() === "cyborg" && (selectedCharacter.appearance.race !== null) ?
                                                    "🤖"
                                                    :
                                                    selectedCharacter.appearance.race?.toLowerCase() === "alien" || selectedCharacter.appearance.race?.toLowerCase() === "eternal" || selectedCharacter.appearance.race?.toLowerCase() === "asgardian" || selectedCharacter.appearance.race?.toLowerCase() === "kryptonian" && (selectedCharacter.appearance.race !== null) ?
                                                        "👽"
                                                        :
                                                        "🌎"
                                }
                                dataTest="race-stat"
                            />
                            <StatString
                                statName="Weigth"
                                statValue={`${selectedCharacter.appearance.weight[0]} | ${selectedCharacter.appearance.weight[1]}`}
                                icon="⚖"
                            />
                        </StatContainer>
                        :
                        selectedOption === "Biography" ?
                            <StatContainer>
                                <StatString
                                    statName="Alignment"
                                    statValue={selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}
                                    icon={
                                        selectedCharacter.biography.alignment === "good" ?
                                            "😃"
                                            :
                                            selectedCharacter.biography.alignment === "bad" ?
                                                "😡"
                                                :
                                                selectedCharacter.biography.alignment === "neutral" ?
                                                    "😐"
                                                    :
                                                    ""
                                    }
                                    dataTest="aligment-stat"
                                />

                                <StatString
                                    statName="First Appearance"
                                    statValue={selectedCharacter.biography.firstAppearance}
                                    icon="📅"
                                    dataToolTip={selectedCharacter.biography.firstAppearance}
                                />

                                <StatString
                                    statName="Place Of Birth"
                                    statValue={selectedCharacter.biography.placeOfBirth}
                                    icon="🗺"
                                    dataToolTip={selectedCharacter.biography.placeOfBirth}
                                />

                                <StatString
                                    statName="Publisher"
                                    statValue={selectedCharacter.biography.publisher}
                                    icon="📚"
                                    dataTest="publisher-stat"
                                />

                                <StatCollapse
                                    icon="🔠"
                                    title="Aliases"
                                    content={selectedCharacter.biography.aliases.map(((currentAlias, index) => {
                                        return (
                                            <p key={`${currentAlias}-${index}`} >{currentAlias}</p>
                                        )
                                    }))}

                                />
                                <StatCollapse
                                    icon="🆎"
                                    title="Alter egos"
                                    content={<p>{selectedCharacter.biography.alterEgos}</p>}
                                />
                                <StatCollapse
                                    icon="👪"
                                    title="Teams"
                                    content={<p>{selectedCharacter.connections.groupAffiliation}</p>}
                                    dataTest="teams-collapse"
                                />
                                <StatCollapse
                                    icon="🧾"
                                    title="Occupation"
                                    content={<p>{selectedCharacter.work.occupation}</p>}

                                />
                            </StatContainer>
                            :
                            selectedOption === "Teams" ?
                                <StatContainer>
                                    {
                                        getTeamsImagesByCharacter(selectedCharacter).length > 0 ?
                                            <div>
                                                {/* <div className='flex flex-col items-center justify-center my-5'>
                                                    <p className='text-4xl font-bold'>Teams</p>
                                                </div> */}
                                                <div className="w-full flex flex-col flex-wrap justify-center items-center gap-5 my-5">
                                                    {

                                                        getTeamsImagesByCharacter(selectedCharacter).map((teamFound) => {
                                                            return (
                                                                <div key={teamFound?.name} className="tooltip mt-5 mx-auto w-[70%]" data-tip={teamFound?.name}>
                                                                    <img className="" src={teamFound?.img} alt={teamFound?.name} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            :
                                            <div></div>
                                    }
                                </StatContainer>
                                :
                                selectedOption === "Comics" ?
                                    <StatContainer>
                                        <div /* className='mt-5 mb-5' */>
                                            {/* <div className='flex flex-col items-center justify-center gap-2'>
                                                <p className='text-4xl font-bold'>Comics</p>
                                                <p className='text-2xl font-bold mb-2'>💥💨💢💫💠💭💬</p>
                                            </div> */}
                                            <div className='h-[35vh] md:h-[50vh] lg:h-[80vh] flex justify-center'>
                                                <div className="carousel lg:carousel-vertical carousel-center h-full max-w-md lg:max-w-md p-4 space-x-4 bg-base-100 rounded-box">
                                                    {organizedComicsProperty(selectedCharacter.comics, selectedCharacter.biography.publisher).map((comic, index) => {
                                                        return (
                                                            <label onClick={() => setSelectedImageZoomModal(comic)} key={`${selectedCharacter._id}-${index}`} className="carousel-item lg:py-2" htmlFor={`my-modal-imageZoom`}>
                                                                <img className="rounded-box h-full w-full" src={comic} loading="lazy" />
                                                            </label>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </StatContainer>
                                    :
                                    null
            }
        </div>
    )
}

export default CharacterFeatures