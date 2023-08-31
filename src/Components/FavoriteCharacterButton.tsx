import React from 'react'
import { manageFavorite } from '../functions'
import { Character } from '../types'

type FavoriteCharacterButtonProps = {
    favorites: Character[]
    setFavorites: React.Dispatch<React.SetStateAction<[] | Character[]>>
    selectedCharacter: Character
}

function FavoriteCharacterButton({favorites, setFavorites, selectedCharacter }: FavoriteCharacterButtonProps) {
    return (
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
    )
}

export default FavoriteCharacterButton