import { Character } from "../../types"
import { useEffect, useState } from 'react';
import ImageZoom from "../ImageZoom";

import Modal from "./Modal";

import CharacterFeatures from "../CharacterFeatures";
import FavoriteCharacterButton from "../FavoriteCharacterButton";
import { motion } from "framer-motion"

type ModalCharacterProps = {
    // manageFavorite: (action: string, characterSelected: Character) => void
    // manageFavorite: (action: string, characterSelected: Character, setFavorites: React.Dispatch<React.SetStateAction<[] | Character[]>>) => void
    favorites: Character[]
    selectedCharacter: Character
    // setFavorites: React.Dispatch<React.SetStateAction<[] | Character[]>>
    setFavorites: (favoritesS: Character[]) => void
}

export default function ModalCharacter({
    favorites,
    selectedCharacter,
    setFavorites
}: ModalCharacterProps) {
    const [selectedImageZoomModal, setSelectedImageZoomModal] = useState<string>('')
    const [isAnimating, setIsAnimating] = useState(true);
    const [currentImageToDisplay, setCurrentImageToDisplay] = useState<number>(0)
    const [lastCharacter, setLastCharacter] = useState("")

    const allImages: string[] = [
        selectedCharacter.images.md,
        ...Object.entries(selectedCharacter.images).filter(([key, value]) => key !== "md" && value !== "-" && value !== "" && !value.includes('/api/images/xs/')).map(c => c[1])
    ]

    useEffect(() => {
        if(lastCharacter !== selectedCharacter.name){
            setLastCharacter(selectedCharacter.name)
            setCurrentImageToDisplay(0)
        }
    }, [selectedCharacter.name])

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setIsAnimating(true);
                setCurrentImageToDisplay(prev => {
                    if (prev + 1 > allImages.length - 1) return 0
                    return prev + 1
                })
            }, 1000);
        }, 7000);
        return () => clearInterval(interval);
    }, [allImages])

    return (
        <div onClick={() => { }}>
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
                        <div className="flex flex-col xl:flex-row justify-center">

                            <div className='flex flex-col items-center align-middle gap-3 w-[90%] md:w-[50%] lg:w-[30%] h-[100%] my-auto mx-auto'>
                                <div className="relative w-64 md:w-72 lg:w-96 h-[25rem] md:h-[25rem] lg:h-[34rem] bg-base-100 shadow-xl ">
                                    <label onClick={() => setSelectedImageZoomModal(allImages[currentImageToDisplay])} className='group cursor-pointer w-[90%] h-[90%]' htmlFor={`my-modal-imageZoom`}>
                                        <motion.img animate={{ opacity: isAnimating ? 1 : 0 }} className="transition-all duration-300 absolute w-full h-full object-cover blur-sm group-focus-visible:animate-pulse group-hover:animate-pulse " src={allImages[currentImageToDisplay]} alt={selectedCharacter.name} loading="lazy" />
                                        <motion.img animate={{ opacity: isAnimating ? 1 : 0 }} className="transition-all duration-300 absolute w-[90%] h-[90%] object-cover rounded-md ml-3 md:ml-5 mt-5" src={allImages[currentImageToDisplay]} alt={selectedCharacter.name} loading="lazy" />
                                    </label>
                                </div>

                                <div className='self-center mt-5'>
                                    <h1 onClick={() => {
                                        setIsAnimating(false);
                                        setTimeout(() => {
                                            setIsAnimating(true);
                                            setCurrentImageToDisplay(prev => {
                                                if (prev + 1 > allImages.length - 1) return 0
                                                return prev + 1
                                            })
                                        }, 1000);
                                    }} className={`text-2xl lg:text-5xl font-bold text-center`} >{selectedCharacter.name}</h1>
                                    <p className={`py-2 text-center`} >{selectedCharacter.biography.fullName}</p>
                                </div>
                            </div>

                            <div className="flex flex-col xl:h-[82vh] w-[90%] xl:w-[60%] mx-auto">
                                <CharacterFeatures
                                    selectedCharacter={selectedCharacter}
                                    setSelectedImageZoomModal={setSelectedImageZoomModal}
                                />
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