import { Character, CharactersProps } from '../types';
import ModalCharacter from './Modals/ModalCharacter';
import { useEffect, useState } from 'react'
import { usePagination } from "@mantine/hooks";

import CharacterComponent from './CharacterComponent';
import CharactersContainer from './CharactersContainer';
import useWindowWidth from '../hooks/useWindowWidth';
import SectionCharacters from './SectionCharacters';


function Characters({ charactersFiltered, favorites, setFavorites, viewFavorites, selectedCharacter, setSelectedCharacter }: CharactersProps) {
    const windowWidth = useWindowWidth()
    const [charactersPerPage, setCharactersPerPage] = useState(8)
    const [visibleResults, setVisibleResults] = useState<Character[]>(charactersFiltered.slice(0, charactersPerPage))

    useEffect(() => { setVisibleResults(charactersFiltered.slice(0, charactersPerPage)) }, [charactersFiltered, charactersPerPage])

    useEffect(() => { pagination.setPage(1) }, [charactersFiltered])

    useEffect(() => {
        switch (true) {
            case windowWidth > 782 && windowWidth < 1285: setCharactersPerPage(6); break;
            case windowWidth < 782: setCharactersPerPage(4); break;
            default:setCharactersPerPage(8); break;
        }
    }, [windowWidth])

    const pagination = usePagination({
        total: Math.ceil(charactersFiltered.length / charactersPerPage),
        initialPage: 1,
        onChange(page: number) {
            const start = (page - 1) * charactersPerPage
            const end = start + charactersPerPage
            setVisibleResults(charactersFiltered.slice(start, end))
        },
        boundaries: 1,
        siblings: 1
    })

    return (
        <SectionCharacters>
            {
                visibleResults.length > 0 ?
                    <CharactersContainer
                        visibleResults={visibleResults}
                    >
                        <>
                            {
                                visibleResults.map((currentCharacter, index) => {
                                    return (
                                        <div key={currentCharacter._id}>
                                            <CharacterComponent
                                                indexForTest={index}
                                                setSelectedCharacter={setSelectedCharacter}
                                                currentCharacter={currentCharacter}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </>
                    </CharactersContainer>
                    :
                    <div>
                        <p className='text-primary text-4xl text-center'>
                            {
                                viewFavorites ?
                                    "No favorites"
                                    :
                                    "No characters found"
                            }
                        </p>
                    </div>
            }

            {
                pagination.range.length > 1 ?
                    <div data-test="paginationHandler" className="join w-full flex justify-center">
                        <button data-test="paginationBtn-prev" onClick={() => pagination.setPage(pagination.active - 1)} className={`join-item btn btn-primary text-xl -pt-2 ${1 === pagination.active ? "btn-disabled" : ""}`}>«</button>
                        {pagination.range.map((currentPage, index) => {
                            return (
                                <button
                                    data-test={currentPage === 'dots' ? "paginationBtnDisabled" : `paginationBtn-${index}`}
                                    key={`${currentPage}-${index}`}
                                    onClick={() => pagination.setPage(currentPage !== 'dots' ? currentPage : 1)}
                                    className={`join-item btn btn-primary ${pagination.active === currentPage ? "btn-active" : ""} ${currentPage === 'dots' ? "btn-disabled" : ""}`}>
                                    {currentPage === "dots" ? <p className="text-primary">...</p> : currentPage}
                                </button>
                            )
                        })}
                        <button data-test="paginationBtn-next" onClick={() => pagination.setPage(pagination.active + 1)} className={`join-item btn btn-primary text-xl -pt-2 ${pagination.range.length === pagination.active ? "btn-disabled" : ""}`}>»</button>
                    </div>
                    :
                    <></>
            }

            <ModalCharacter
                setFavorites={setFavorites}
                favorites={favorites}
                selectedCharacter={selectedCharacter}
            />
        </SectionCharacters>
    )
}


export default Characters