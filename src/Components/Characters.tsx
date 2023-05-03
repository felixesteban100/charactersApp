import { useState } from 'react'

//https://heroes-backend.onrender.com/

type CharactersProps = {
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

function Characters({ charactersFiltered }: CharactersProps) {

    const [selectedCharacter, setSelectedCharacter] = useState<Character>({
        powerstats: {
            intelligence: 0,
            strength: 0,
            speed: 0,
            durability: 0,
            power: 0,
            combat: 0,
        },
        appearance: {
            gender: "",
            race: "",
            height: ["", ""],
            weight: ["", "",],
            eyeColor: "",
            hairColor: "",
        },
        biography: {
            fullName: "",
            alterEgos: "",
            aliases: [],
            placeOfBirth: "",
            firstAppearance: "",
            publisher: "",
            alignment: "",
        },
        work: {
            occupation: "",
            base: "",
        },
        connections: {
            groupAffiliation: "",
            relatives: "",
        },
        images: {
            xs: "",
            sm: "",
            md: "",
            lg: "",
        },
        _id: "",
        id: 0,
        name: "",
        slug: "",
        comics: [""]
    })

    function publisherIMG(publisher: string) {
        switch (publisher) {
            case "Marvel Comics":
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"

            case "DC Comics":
                return "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"

            case "Shueisha":
                return "https://p1.hiclipart.com/preview/659/548/877/anime-logo-white-and-black-kanji-script-texts.jpg"

            default:
                return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU"
        }
    }

    function getAligmentIMG(alignment: string) {
        switch (alignment) {
            case "good":
                return <svg className="fill-current hover:text-success h-10 w-10" /* width="50" height="50" */ viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8.03001 15.2425C7.87428 14.6196 8.36619 14.0002 9.00016 13.9998H15.0002C15.6333 14.0002 16.126 14.6172 15.9703 15.24C15.4525 16.9881 13.7854 18 12.0002 18C10.2834 18 8.46902 16.9986 8.03001 15.2425ZM16.5 10C16.5 10.8284 15.8284 11.5 15 11.5C14.1716 11.5 13.5 10.8284 13.5 10C13.5 9.17157 14.1716 8.5 15 8.5C15.8284 8.5 16.5 9.17157 16.5 10ZM9 11.5C9.82843 11.5 10.5 10.8284 10.5 10C10.5 9.17157 9.82843 8.5 9 8.5C8.17157 8.5 7.5 9.17157 7.5 10C7.5 10.8284 8.17157 11.5 9 11.5Z" /></svg>;

            case "bad":
                return (<svg className="fill-current hover:text-error h-10 w-10" /* width="40" height="40"  */ version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.059 106.059"><g><path d="M15.515,15.512C-5.173,36.198-5.171,69.858,15.517,90.547c20.682,20.684,54.341,20.684,75.027-0.004 c20.687-20.685,20.685-54.342,0.002-75.024C69.858-5.172,36.198-5.172,15.515,15.512z M84.757,84.758 c-17.494,17.494-45.961,17.496-63.455,0.002c-17.498-17.497-17.496-45.966,0-63.46C38.795,3.806,67.261,3.804,84.759,21.301 C102.253,38.795,102.251,67.265,84.757,84.758z M75.639,71.029c0,1.921-1.558,3.479-3.479,3.479H33.902 c-1.921,0-3.479-1.558-3.479-3.479s1.558-3.478,3.479-3.478h38.259C74.081,67.552,75.639,69.108,75.639,71.029z M77.673,31.718 c1.229,1.229,1.229,3.222-0.001,4.451l-9.455,9.456c-1.229,1.229-3.223,1.229-4.451,0s-1.229-3.222,0-4.451l9.456-9.455 C74.451,30.489,76.444,30.489,77.673,31.718z M77.878,47.999c0,2.254-1.827,4.081-4.079,4.081s-4.079-1.827-4.079-4.081 c0-2.252,1.827-4.08,4.079-4.08C76.05,43.919,77.878,45.746,77.878,47.999z M28.385,36.169c-1.229-1.229-1.229-3.222-0.001-4.451 c1.229-1.229,3.222-1.229,4.451,0l9.456,9.455c1.229,1.229,1.229,3.222,0,4.451c-1.229,1.229-3.223,1.229-4.451,0L28.385,36.169z  M32.258,52.08c-2.251,0-4.079-1.827-4.079-4.081c0-2.252,1.827-4.08,4.079-4.08s4.079,1.827,4.079,4.08 C36.337,50.253,34.51,52.08,32.258,52.08z" /></g></svg>);

            case "neutral":
                return <svg className="fill-current hover:text-warning h-10 w-10" /* width="40" height="40"  */ viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.316c-5.901 0-10.684 4.783-10.684 10.684s4.783 10.684 10.684 10.684 10.684-4.783 10.684-10.684c-.012-5.896-4.788-10.672-10.683-10.684h-.001zm0 22.297c-6.414 0-11.613-5.199-11.613-11.613s5.199-11.613 11.613-11.613 11.613 5.199 11.613 11.613v.015c0 6.405-5.192 11.597-11.597 11.597-.005 0-.011 0-.016 0h.001z" /><path d="m12 24c-6.614-.034-11.966-5.386-12-11.997v-.003c0-6.627 5.373-12 12-12s12 5.373 12 12c-.034 6.614-5.386 11.966-11.997 12zm0-23.226c-6.2 0-11.226 5.026-11.226 11.226s5.026 11.226 11.226 11.226 11.226-5.026 11.226-11.226c-.004-6.198-5.028-11.221-11.225-11.226zm0 22.297c-6.114 0-11.071-4.957-11.071-11.071s4.957-11.071 11.071-11.071c6.114 0 11.071 4.957 11.071 11.071s-4.957 11.071-11.071 11.071zm0-21.368c-5.687 0-10.297 4.61-10.297 10.297s4.61 10.297 10.297 10.297 10.297-4.61 10.297-10.297c0-.001 0-.003 0-.005 0-5.684-4.608-10.292-10.292-10.292-.002 0-.003 0-.005 0z" /><path d="m9.677 9.91v.009c0 1.15-.932 2.082-2.082 2.082-.003 0-.006 0-.009 0-1.154 0-2.09-.936-2.09-2.09s.936-2.09 2.09-2.09h.009c1.15 0 2.082.932 2.082 2.082v.009z" /><path d="m18.581 9.91c0 1.154-.936 2.09-2.09 2.09s-2.09-.936-2.09-2.09c0-.003 0-.006 0-.009 0-1.15.932-2.082 2.082-2.082h.009c1.145.023 2.067.945 2.09 2.088v.002z" /><path d="m16.413 17.187h-8.903c-.257 0-.465-.208-.465-.465s.208-.465.465-.465h8.903c.249.017.447.215.464.463v.002.019c0 .246-.2.446-.446.446-.007 0-.013 0-.02 0h.001z" /><path d="m16.413 17.574h-8.903c-.47 0-.852-.381-.852-.852s.381-.852.852-.852h8.903c.47 0 .852.381.852.852s-.381.852-.852.852zm-8.826-.929c-.077 0-.077.077 0 0-.02.02-.033.047-.033.077s.013.058.033.077h8.903c.043 0 .077-.035.077-.077 0-.077 0-.077-.077-.077z" /></svg>
        }
    }

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] gap-10 mx-auto pt-[2rem] ">
                {
                    charactersFiltered.map((currentCharacter) => {
                        return (
                            <label onClick={() => setSelectedCharacter(currentCharacter)} className="cursor-pointer" key={currentCharacter.slug} htmlFor="my-modal-specificCharacter">
                                <div className="card image-full hover:opacity-1 inset-0 object-cover w-full h-[20rem] md:h-[25rem] lg:h-[35rem] bg-base-100 shadow-xl hover:scale-110 group/item">
                                    <figure>
                                        <img className="w-full h-full" src={currentCharacter.images.md} alt={currentCharacter.name} />
                                    </figure>

                                    <div className="card-body group/edit invisible group-hover/item:visible transition delay-150 duration-300 ease-in-out flex flex-col justify-between">
                                        <div>
                                            <h2 className="card-title text-xl md:text-2xl lg:text-3xl">{currentCharacter.name}</h2>
                                            {/* <div className='flex flex-col gap-1 text-[10px] md:text-2xl lg:text-2xl'>
                                        <p>Combat: {currentCharacter.powerstats.combat}</p>
                                        <p>Durability: {currentCharacter.powerstats.durability}</p>
                                        <p>Intelligence: {currentCharacter.powerstats.intelligence}</p>
                                        <p>Power: {currentCharacter.powerstats.power}</p>
                                        <p>Speed: {currentCharacter.powerstats.speed}</p>
                                        <p>Strength: {currentCharacter.powerstats.strength}</p>
                                    </div> */}
                                        </div>

                                        <div className="card-actions justify-end">
                                            <div className='flex w-full justify-between'>
                                                {/* lg:h-[7vw] lg:w-[15vw] */}
                                                <img /* className='h-10 w-15 self-center' */ className='h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem] self-center' src={publisherIMG(currentCharacter.biography.publisher)} alt="" />
                                                {/* <button className="btn btn-primary">More...</button> */}
                                                <div className="tooltip" data-tip={currentCharacter.biography.alignment === "good" ? "Hero" : currentCharacter.biography.alignment === "bad" ? "Villain" : "Anti-hero"}>
                                                    {getAligmentIMG(currentCharacter.biography.alignment)}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </label>
                        )
                    })
                }
            </div>
            <ModalSpecificCharacter
                selectedCharacter={selectedCharacter}
            />
        </div>
    )
}

type ModalSpecificCharacterProps = {
    selectedCharacter: Character
}

function ModalSpecificCharacter({ selectedCharacter }: ModalSpecificCharacterProps) {
    return (
        <div>
            <input type="checkbox" id="my-modal-specificCharacter" className="modal-toggle" />
            <label htmlFor="my-modal-specificCharacter" className="modal cursor-pointer">
                <label className="modal-box relative flex flex-col gap-5" htmlFor="">
                    <label htmlFor="my-modal-specificCharacter" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex flex-col gap-5'>
                        <div className="hero py-5 bg-base-200">
                            {/* <div className="hero-content flex-col lg:flex-row"> */}
                            <div className="hero-content flex-col">
                                <img src={selectedCharacter.images.md} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">{selectedCharacter.name}</h1>
                                    <p className="py-2">{selectedCharacter.biography.fullName}</p>
                                    {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                                    {/* <button className="btn btn-primary">Get Started</button> */}
                                </div>
                            </div>
                        </div>

                        <div className="stats stats-vertical shadow">
                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <p className='text-5xl'>👊</p>
                                </div>
                                <div className="stat-title">Combat</div>
                                <div className="stat-value">{selectedCharacter.powerstats.combat}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <p className='text-5xl'>❤</p>
                                </div>
                                <div className="stat-title">Durability</div>
                                <div className="stat-value">{selectedCharacter.powerstats.durability}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <p className='text-5xl'>🧠</p>
                                </div>
                                <div className="stat-title">Intelligence</div>
                                <div className="stat-value">{selectedCharacter.powerstats.intelligence}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <p className='text-5xl'>🔆</p>
                                </div>
                                <div className="stat-title">Power</div>
                                <div className="stat-value">{selectedCharacter.powerstats.power}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <p className='text-5xl'>⚡</p>
                                </div>
                                <div className="stat-title">Speed</div>
                                <div className="stat-value">{selectedCharacter.powerstats.speed}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <p className='text-5xl'>💪</p>
                                </div>
                                <div className="stat-title">Strength</div>
                                <div className="stat-value">{selectedCharacter.powerstats.strength}</div>
                            </div>
                        </div>
                    </div>
                </label>
            </label>
        </div>
    )
}

export default Characters





