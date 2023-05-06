import { useState, useEffect } from 'react'

type SuccessChangedpProps = {
    heroSection: { imgs: string[], title: string, description: string }
    charactersFiltered: Character[]
}

type Character = {
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
    };
    appearance: {
        gender: string;
        race: string | null;
        height: [string, string];
        weight: [string, string];
        eyeColor: string;
        hairColor: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: string;
        relatives: string;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    _id: string;
    id: number;
    name: string;
    slug: string;
    comics?: string[];
}

function SuccessChanged({ heroSection, charactersFiltered}: SuccessChangedpProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 4000);
    }, [heroSection]);

    return (
        <div className='sticky bottom-14 z-40'>
            {
                show === true && charactersFiltered.length > 1 ?
                    <div className="alert alert-success shadow-lg bottom-10 w-[50%] mx-auto animate-bounce">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Characters obtained</span>
                        </div>
                    </div>
                    :
                    show === true && charactersFiltered.length < 1  ?
                        <div className="alert alert-warning shadow-lg bottom-10 w-[50%] mx-auto animate-bounce">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>There is no Characters with those features, try again with different ones.</span>
                            </div>
                        </div>
                        :
                        null
            }
        </div>
    )
}

export default SuccessChanged