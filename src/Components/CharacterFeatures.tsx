import { Character } from "../types"
import { useState } from 'react';
import StatContainer from "./Reusable/StatContainer";
import StatNumber from "./Reusable/StatNumber";
import StatString from "./Reusable/StatString";
import StatCollapse from "./Reusable/StatCollapse";
import useWindowWidth from "./../hooks/useWindowWidth";

type CharacterFeaturesProps = {
    selectedCharacter: Character
}

function CharacterFeatures({selectedCharacter}: CharacterFeaturesProps) {
    const [selectedOption, setSelectedOption] = useState<"Stats" | "Appereance" | "Biography">("Stats")
    const windowWidth = useWindowWidth()

    return (
        <div className='mx-auto flex flex-col justify-center gap-3 items-center w-[90%] md:w-[50%] lg:w-[50%]'>
            <div className="w-[90%] grid grid-flow-col grid-col-3">
                <div data-test="btn-inModal-stat" onClick={() => setSelectedOption("Stats")} className={`pb-10 lg:pb-10 text-xl md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Stats" ? "tab-active" : ""}`}>{windowWidth > 570 ? 'Stats' : '📊'}</div>
                <div data-test="btn-inModal-appereance" onClick={() => setSelectedOption("Appereance")} className={`pb-10 lg:pb-10 text-xl md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Appereance" ? "tab-active" : ""}`}>{windowWidth > 570 ? 'Appereance' : '👀'}</div>
                <div data-test="btn-inModal-biography" onClick={() => setSelectedOption("Biography")} className={`pb-10 lg:pb-10 text-xl md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Biography" ? "tab-active" : ""}`}>{windowWidth > 570 ? 'Biography' : '📜'}</div>
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
                            null
            }
        </div>
    )
}

export default CharacterFeatures