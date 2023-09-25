import LoadingCard from "../Components/Reusable/LoadingCard";
import useWindowWidth from '../hooks/useWindowWidth';
import { getLoadingCards } from '../functions';
import SectionCharacters from '../Components/SectionCharacters';
import CharactersContainer from "../Components/CharactersContainer";
import { characterEmpty } from "../constants";

type LoadingCharactersProps = {
    howMany: number
}

function LoadingCharacters({ howMany }: LoadingCharactersProps) {
    const windowWidth = useWindowWidth()

    return (
        <SectionCharacters>
            <CharactersContainer
                visibleResults={Array(howMany).fill(characterEmpty)}
            >
                <>
                    {
                        Array(getLoadingCards(windowWidth, howMany)).fill(characterEmpty).map((_, index) => {
                            return (
                                <div key={index}>
                                    <LoadingCard />
                                </div>
                            )
                        })
                    }
                </>
            </CharactersContainer>
            <></>
        </SectionCharacters>
    )
}

export default LoadingCharacters