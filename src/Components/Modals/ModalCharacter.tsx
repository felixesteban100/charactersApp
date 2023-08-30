import { ModalCharacterProps } from "../../types"
import { useState } from 'react';
import ImageZoom from "../ImageZoom";
import { organizedComicsProperty } from "../../constants";
import { manageFavorite } from "../../functions";
import Modal from "./Modal";
import StatContainer from "../Reusable/StatContainer";
import StatNumber from "../Reusable/StatNumber";
import StatString from "../Reusable/StatString";
import StatCollapse from "../Reusable/StatCollapse";

export default function ModalCharacter({
    favorites,
    selectedCharacter,
    setFavorites
}: ModalCharacterProps) {
    const [selectedOption, setSelectedOption] = useState<"Stats" | "Appereance" | "Biography">("Stats")
    const [selectedImageZoomModal, setSelectedImageZoomModal] = useState<string>('')

    return (
        <div>
            <Modal
                id={`my-modal-selectedCharacter`}
                size="h-[95vh] w-[80vw] max-w-[80rem]"
                dataTestInside="modalCharacter"
                dataTestOutside="modalCharacterOutside"
            >
                <div className='flex justify-between mb-5 mx-5'>
                    <label htmlFor={`my-modal-selectedCharacter`} className="btn btn-sm btn-circle right-2 top-2">✕</label>
                    <label className="swap swap-flip text-2xl">
                        <input
                            onChange={() => {
                                if (favorites.includes(selectedCharacter)) {
                                    manageFavorite("remove", selectedCharacter, setFavorites)
                                } else {
                                    manageFavorite("add", selectedCharacter, setFavorites)
                                }
                            }}
                            type="checkbox"
                            checked={favorites.includes(selectedCharacter) ? true : false}
                        />
                        <div
                            className="swap-on tooltip tooltip-left"
                            data-tip="favorite"
                        >
                            🌟
                        </div>
                        <div
                            className="swap-off tooltip tooltip-left"
                            data-tip="not favorite"
                        >
                            ⭐
                        </div>
                    </label>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className="w-full bg-base-200 p-5">
                        <div className="flex flex-col md:flex-row lg:flex-row justify-center">

                            <div className='flex flex-col items-center align-middle gap-3 mx-auto max-w-screen-lg'>

                                <div className="relative w-64 md:w-72 lg:w-96 h-[25rem] md:h-[25rem] lg:h-[34rem] bg-base-100 shadow-xl ">
                                    <label onClick={() => setSelectedImageZoomModal(selectedCharacter.images.md)} className='group cursor-pointer w-full h-full' htmlFor={`my-modal-imageZoom`}>
                                        <img className="absolute w-full h-full object-cover blur-sm animate-pulse md:animate-none lg:animate-none group-hover:animate-pulse " src={selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                                        <img className="absolute w-[90%] h-[90%] object-cover rounded-md ml-3 md:ml-5 mt-5" src={selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                                    </label>
                                </div>

                                <div className='self-center mt-5'>
                                    <h1 className={`text-5xl font-bold text-center`} >{selectedCharacter.name}</h1>
                                    <p className={`py-2 text-center`} >{selectedCharacter.biography.fullName}</p>
                                </div>
                            </div>

                            <div className='mx-auto flex flex-col justify-center gap-3 items-center w-[90%] md:w-[50%] lg:w-[50%]'>
                                <div className="w-full grid grid-flow-col grid-col-3">
                                    <div onClick={() => setSelectedOption("Stats")} className={`pb-5 lg:pb-10 text-md md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Stats" ? "tab-active" : ""}`}>Stats</div>
                                    <div onClick={() => setSelectedOption("Appereance")} className={`pb-5 lg:pb-10 text-md md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Appereance" ? "tab-active" : ""}`}>Appereance</div>
                                    <div onClick={() => setSelectedOption("Biography")} className={`pb-5 lg:pb-10 text-md md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Biography" ? "tab-active" : ""}`}>Biography</div>
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
                                                    statName="EyeColor"
                                                    statValue={selectedCharacter.appearance.eyeColor}
                                                    icon={
                                                        selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                                            "🚹"
                                                            :
                                                            selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                                                "🚺"
                                                                :
                                                                ""
                                                    }
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

                        </div>

                        <div className='flex flex-col justify-center items-center my-10'>
                            <br />
                            <div className='w-48 md:w-60 lg:w-96 h-[5px] bg-current rounded-md' />
                            <br />
                        </div>

                        <div className='my-5'>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-2xl font-bold'>Comics</p>
                                <p className='text-2xl font-bold mb-2'>💥💨💢💫💠💭💬</p>
                            </div>
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
                    </div>
                </div>
            </Modal>

            <ImageZoom
                image={selectedImageZoomModal}
                character={selectedCharacter.name}
            />
        </div>
    )
}