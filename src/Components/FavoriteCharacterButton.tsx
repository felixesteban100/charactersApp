import React from 'react'
import { manageFavorite } from '../functions'
import { Character } from '../types'

type FavoriteCharacterButtonProps = {
    favorites: Character[]
    // setFavorites: React.Dispatch<React.SetStateAction<[] | Character[]>>
    setFavorites: (favoritesS: Character[]) => void
    selectedCharacter: Character
}

function FavoriteCharacterButton({ favorites, setFavorites, selectedCharacter }: FavoriteCharacterButtonProps) {
    return (
        <label className="swap swap-flip text-2xl">
            <input
                onChange={() => {
                    // if (favorites.includes(selectedCharacter)) {
                    if (favorites.find(c => c._id === selectedCharacter._id)) {
                        manageFavorite("remove", selectedCharacter, favorites, setFavorites)
                    } else {
                        manageFavorite("add", selectedCharacter, favorites, setFavorites)
                    }
                }}
                type="checkbox"
                // checked={favorites.includes(selectedCharacter) ? true : false}
                checked={favorites.find(c => c._id === selectedCharacter._id) ? true : false}
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