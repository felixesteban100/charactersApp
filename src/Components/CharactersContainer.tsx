import { Character } from "../types"

type CharactersContainerProps = {
    children: JSX.Element
    visibleResults: Character[]
}
function CharactersContainer({ children, visibleResults }: CharactersContainerProps) {
    return (
        <div
            data-test="characters-visible"
            className={
                `mt-5 
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 
                w-[90%] sm:w-[90%] md:w-[90%] lg:w-[70%] 
                gap-10 mx-auto 
                pt-[5rem] md:pt-[2rem] 
                ${visibleResults.length < 3 ? "mb-[22.5rem] md:mb-[24rem] lg:mb-[24.5rem]"
                        : visibleResults.length < 5 ? "mb-0 md:mb-[20rem] lg:mb-[20rem]"
                            : ""
                }`
            }
        >
            {children}
        </div>
    )
}

export default CharactersContainer