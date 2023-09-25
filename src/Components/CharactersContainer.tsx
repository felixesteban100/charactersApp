import useWindowWidth from "../hooks/useWindowWidth"
import { Character } from "../types"

type CharactersContainerProps = {
    children: JSX.Element
    visibleResults: Character[]
}
function CharactersContainer({ children, visibleResults }: CharactersContainerProps) {
    const windowWidth = useWindowWidth()

    return (
        <div
            // data-test="charactersVisible"
            /* 
            ${(visibleResults.length < 3 || visibleResults.length === 3) ? "mb-[22.5rem] md:mb-[24rem] lg:mb-[24.5rem]"
                    : (visibleResults.length < 5 && windowWidth < 800) ? "mb-0 md:mb-[20rem] lg:mb-[20rem]"
                        : ""
                } */
                //  
            className={
                `m-0 lg:mt-7
                min-h-[82vh] lg:min-h-[85vh]
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 
                w-[90%] sm:w-[90%] md:w-[90%] lg:w-[70%] 
                gap-10 mx-auto 
                pt-[5rem] md:pt-[2rem] 
                `
            }
        >
            {children}
        </div>
    )
}

export default CharactersContainer