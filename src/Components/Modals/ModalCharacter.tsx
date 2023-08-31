import { ModalCharacterProps } from "../../types"
import { useState } from 'react';
import ImageZoom from "../ImageZoom";
import { organizedComicsProperty } from "../../constants";
import { getTeamsImagesByCharacter } from "../../functions";
import Modal from "./Modal";


import CharacterFeatures from "../CharacterFeatures";
import FavoriteCharacterButton from "../FavoriteCharacterButton";

export default function ModalCharacter({
    favorites,
    selectedCharacter,
    setFavorites
}: ModalCharacterProps) {
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
                    <FavoriteCharacterButton
                        favorites={favorites}
                        setFavorites={setFavorites}
                        selectedCharacter={selectedCharacter}
                    />
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

                            <CharacterFeatures
                                selectedCharacter={selectedCharacter}
                            />

                        </div>

                        {
                            getTeamsImagesByCharacter(selectedCharacter).length > 0 ?
                                <div>
                                    <div className='flex flex-col items-center justify-center mt-32'>
                                        <p className='text-4xl font-bold'>Teams</p>
                                    </div>
                                    <div className="w-full flex flex-row flex-wrap justify-center items-center gap-5 mt-5">
                                        {

                                            getTeamsImagesByCharacter(selectedCharacter).map((teamFound) => {
                                                return (
                                                    <div key={teamFound?.name} className="tooltip" data-tip={teamFound?.name}>
                                                        <img className="h-20 lg:h-64" src={teamFound?.img} alt={teamFound?.name} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                :
                                null
                        }

                        <div className='mt-32 mb-5'>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <p className='text-4xl font-bold'>Comics</p>
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