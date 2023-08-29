import { ModalCharacterProps } from "../../types"
import { useState } from 'react';
import ImageZoom from "../ImageZoom";
import { organizedComicsProperty } from "../../constants";
import { manageFavorite } from "../../functions";

export default function ModalCharacter({
    // manageFavorite,
    favorites,
    selectedCharacter,
    setFavorites
}: ModalCharacterProps) {
    const [selectedOption, setSelectedOption] = useState<"Stats" | "Appereance" | "Biography">("Stats")
    const [selectedImageZoomModal, setSelectedImageZoomModal] = useState<string>('')

    return (
        <div>
            <input type="checkbox" id={`my-modal-selectedCharacter`} className="modal-toggle" value="" />
            <label className="w-full h-full modal" data-test="modalCharacterOutside" htmlFor={`my-modal-selectedCharacter`} >
                <label data-test="modalCharacter" htmlFor="">
                    <div className={`rounded-md bg-base-100 h-[95vh] w-[80vw] max-w-[80rem] overflow-y-auto overflow-x-hidden`}>
                        <div className='flex flex-col justify-center mt-5'>
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
                                                    <div className="stats stats-vertical shadow self-center w-full h-full">
                                                        <div className="stat">
                                                            <div className="stat-figure text-primary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>👊</p>
                                                            </div>
                                                            <div className="stat-title">Combat</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.combat}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-figure text-primary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>❤</p>
                                                            </div>
                                                            <div className="stat-title">Durability</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.durability}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-figure text-primary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>🧠</p>
                                                            </div>
                                                            <div className="stat-title">Intelligence</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.intelligence}</div>
                                                        </div>

                                                        <div className="stat">
                                                            <div className="stat-figure text-secondary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>🔆</p>
                                                            </div>
                                                            <div className="stat-title">Power</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.power}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-figure text-secondary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>⚡</p>
                                                            </div>
                                                            <div className="stat-title">Speed</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.speed}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-figure text-secondary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>💪</p>
                                                            </div>
                                                            <div className="stat-title">Strength</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.strength}</div>
                                                        </div>
                                                    </div>
                                                    :
                                                    selectedOption === "Appereance" ?
                                                        <div className="stats stats-vertical shadow self-center w-full h-full">
                                                            <div className="stat">
                                                                <div className="stat-figure text-primary">
                                                                    <p className='text-2xl md:text-5xl lg:text-5xl'>👁</p>
                                                                </div>
                                                                <div className="stat-title">EyeColor</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.eyeColor}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-primary text-2xl md:text-5xl lg:text-5xl">
                                                                    {
                                                                        selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                                                            <p>🚹</p>
                                                                            :
                                                                            selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                                                                <p>🚺</p>
                                                                                :
                                                                                null
                                                                    }
                                                                </div>
                                                                <div className="stat-title">Gender</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.gender}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-primary text-2xl md:text-5xl lg:text-5xl">
                                                                    {
                                                                        selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                                                            <p>👱‍♂️</p>
                                                                            :
                                                                            selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                                                                <p>👱‍♀️</p>
                                                                                :
                                                                                null
                                                                    }

                                                                </div>
                                                                <div className="stat-title">Hair color</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.hairColor}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-secondary">
                                                                    <p className='text-2xl md:text-5xl lg:text-5xl'>📏</p>
                                                                </div>
                                                                <div className="stat-title">Height</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.height[0]} | {selectedCharacter.appearance.height[1]}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-secondary text-2xl md:text-5xl lg:text-5xl">
                                                                    {
                                                                        selectedCharacter.appearance.race?.toLowerCase().includes("meta") ?
                                                                            <p>🧬</p>
                                                                            :
                                                                            selectedCharacter.appearance.race?.toLowerCase() === "human" ?
                                                                                <p>🌎</p>
                                                                                :
                                                                                selectedCharacter.appearance.race?.toLowerCase() === "mutant" ?
                                                                                    <p>🧬</p>
                                                                                    :
                                                                                    selectedCharacter.appearance.race?.toLowerCase() === "android" || selectedCharacter.appearance.race?.toLowerCase() === "cyborg" && (selectedCharacter.appearance.race !== null) ?
                                                                                        <p>🤖</p>
                                                                                        :
                                                                                        selectedCharacter.appearance.race?.toLowerCase() === "alien" || selectedCharacter.appearance.race?.toLowerCase() === "eternal" || selectedCharacter.appearance.race?.toLowerCase() === "asgardian" || selectedCharacter.appearance.race?.toLowerCase() === "kryptonian" && (selectedCharacter.appearance.race !== null) ?
                                                                                            <p>👽</p>
                                                                                            :
                                                                                            <p>🌎</p>
                                                                    }
                                                                </div>
                                                                <div className="stat-title">Race</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.race ?? "Unknown"}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-secondary">
                                                                    <p className='text-2xl md:text-5xl lg:text-5xl'>⚖</p>
                                                                </div>
                                                                <div className="stat-title">Weigth</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.weight[0]} | {selectedCharacter.appearance.weight[1]}</div>
                                                            </div>
                                                        </div>
                                                        :
                                                        selectedOption === "Biography" ?
                                                            <div className="stats stats-vertical shadow self-center w-full h-full">
                                                                <div className="stat">
                                                                    <div className="stat-figure text-primary text-2xl md:text-5xl lg:text-5xl">
                                                                        {
                                                                            selectedCharacter.biography.alignment === "good" ?
                                                                                <p>😃</p>
                                                                                :
                                                                                selectedCharacter.biography.alignment === "bad" ?
                                                                                    <p>😡</p>
                                                                                    :
                                                                                    selectedCharacter.biography.alignment === "neutral" ?
                                                                                        <p>😐</p>
                                                                                        :
                                                                                        null
                                                                        }
                                                                    </div>
                                                                    <div className="stat-title">Alignment</div>
                                                                    <div className="stat-value text-sm md:text-xl lg:text-xl">
                                                                        {selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}
                                                                    </div>
                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-primary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>📅</p>
                                                                    </div>
                                                                    <div className="stat-title">First Appearance</div>
                                                                    <div className='flex tooltip' data-tip={selectedCharacter.biography.firstAppearance}>
                                                                        <span className="stat-value whitespace-pre text-sm md:text-xl lg:text-xl">{selectedCharacter.biography.firstAppearance.slice(0, 10)}...</span>
                                                                    </div>
                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-primary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🗺</p>
                                                                    </div>
                                                                    <div className="stat-title">Place Of Birth</div>
                                                                    <p className="stat-value text-sm md:text-xl lg:text-xl tooltip flex" data-tip={selectedCharacter.biography.placeOfBirth}>{selectedCharacter.biography.placeOfBirth.slice(0, 10)}...</p>
                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>📚</p>
                                                                    </div>
                                                                    <div className="stat-title">Publisher</div>
                                                                    <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.biography.publisher}</div>
                                                                </div>
                                                                <div className="stat  ">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🔠</p>
                                                                    </div>
                                                                    {/* <div className="stat-title">Aliases</div> */}

                                                                    <div tabIndex={0} className=" collapse collapse-arrow border border-base-300 bg-base-100 rounded-box h-[4rem]">
                                                                        <div className="collapse-title text-xl font-medium">
                                                                            Aliases...
                                                                        </div>
                                                                        <div className="collapse-content">
                                                                            {selectedCharacter.biography.aliases.map(((currentAlias, index) => {
                                                                                return (
                                                                                    <p key={`${currentAlias}-${index}`} >{currentAlias}</p>
                                                                                )
                                                                            }))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🆎</p>
                                                                    </div>
                                                                    <div className="stat-title">Alter Egos</div>
                                                                    {
                                                                        selectedCharacter.biography.alterEgos ?
                                                                            <div className="stat-value text-sm md:text-xl lg:text-xl tooltip flex" data-tip={selectedCharacter.biography.alterEgos}>{selectedCharacter.biography.alterEgos === "No alter egos found." ? "Unknown" : selectedCharacter.biography.alterEgos.slice(0, 15)}</div>
                                                                            : null
                                                                    }
                                                                </div> */}
                                                                <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🆎</p>
                                                                    </div>
                                                                    {/* <div className="stat-title">Alter egos</div> */}

                                                                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box h-[4rem]">
                                                                        <div className="collapse-title text-xl font-medium">
                                                                            Alter egos...
                                                                        </div>
                                                                        <div className="collapse-content">
                                                                            <p>{selectedCharacter.biography.alterEgos}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="stat ">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>👪</p>
                                                                    </div>
                                                                    {/* <div className="stat-title">Group Affiliation</div> */}

                                                                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box h-[4rem]">
                                                                        <div className="collapse-title text-xl font-medium">
                                                                            Teams...
                                                                        </div>
                                                                        <div className="collapse-content">
                                                                            <p>{selectedCharacter.connections.groupAffiliation}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🧾</p>
                                                                    </div>
                                                                    <div className="stat-title">Occupation</div>
                                                                    <div className="stat-value flex text-sm md:text-xl lg:text-xl tooltip" data-tip={selectedCharacter.work.occupation.split(",")[0]}>{selectedCharacter.work.occupation.slice(0, 15)}...</div>
                                                                </div> */}
                                                                <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🧾</p>
                                                                    </div>
                                                                    {/* <div className="stat-title">Occupation</div> */}

                                                                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box h-[4rem]">
                                                                        <div className="collapse-title text-xl font-medium">
                                                                        Occupation...
                                                                        </div>
                                                                        <div className="collapse-content">
                                                                            <p>{selectedCharacter.work.occupation}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
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
                        </div>
                    </div>
                </label>
            </label>

            <ImageZoom
                image={selectedImageZoomModal}
                character={selectedCharacter.name}
            />
        </div>
    )
}