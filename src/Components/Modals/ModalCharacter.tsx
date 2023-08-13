import { ModalCharacterProps } from "../../types"
import { useState } from 'react';
import ImageZoom from "../ImageZoom";

export default function ModalCharacter({
    manageFavorite,
    favorites,
    selectedCharacter
}: ModalCharacterProps) {
    const [selectedOption, setSelectedOption] = useState<"Stats" | "Appereance" | "Biography">("Stats")

    function organizedComicsProperty(comics: string[] | null | undefined, publisher: string): string[] {
        if (comics === undefined || comics === null) {
            switch (publisher) {
                case "Marvel Comics":
                    return [
                        "https://i.annihil.us/u/prod/marvel/i/mg/5/04/5d5d4cbf869ff/clean.jpg",
                        "https://upload.wikimedia.org/wikipedia/en/1/19/Marvel_Universe_%28Civil_War%29.jpg",
                        "https://cdn.marvel.com/u/prod/marvel/i/mg/f/70/5d5aaf2e85d4d/clean.jpg",
                        "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                        "https://images.saymedia-content.com/.image/t_share/MTc0MzA1MTk3OTc4Mjk4MjM2/getting-into-comics-a-general-guide.jpg",

                        "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                        "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                        "https://i5.walmartimages.com/asr/4bb4cfc9-ce7f-4d44-821d-dff6eae1f38b.fbf723c17381a38682b8660aaed481d9.jpeg",
                    ]

                case "DC Comics":
                    return [
                        "http://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/Justice_League_of_America_poster_Issue_1.jpg",

                        "https://cdn.europosters.eu/image/1300/julisteet/dc-comics-collage-i15088.jpg",
                        "https://d.newsweek.com/en/full/975273/heroes-crisis-tom-king-clay-mann-dc-comics.jpg",
                        "https://i.pinimg.com/originals/02/fb/e3/02fbe3db4a82b9b15c9afefe2b9799a9.png",
                        "https://i0.wp.com/batman-news.com/wp-content/uploads/2018/05/9781608878321.jpg?fit=696%2C862&quality=80&strip=info&ssl=1",
                        "https://www.previewsworld.com/news_images/177217_889486_3.jpg",
                    ]

                case "Shueisha":
                    return [
                        "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg",
                        "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg",
                        "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg",
                        "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max1000x1500/cms/interest/134237/jump_1833_fixw_640_hq.jpg"
                    ]

                case "IDW Publishing":
                    return [
                        "https://images.squarespace-cdn.com/content/v1/593f201de3df288fc6465e6f/1643902801105-VUT092WGQWT7VUD66Y8M/Teenage+Mutant+Ninja+Turtles+Reborn+Vol.+1.jpg?format=1000w",
                        "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2066186.jpg",
                        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81j8N4V4pIL.jpg",
                        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91L4+Vf8YWL._AC_UF1000,1000_QL80_.jpg"
                    ]

                case "George Lucas":
                    return [
                        "https://cdn.marvel.com/u/prod/marvel/i/mg/c/00/5ff32d6aad522/clean.jpg",
                        "https://tools.toywiz.com/_images/_webp/_products/lg/apr221023.webp",
                        "https://i0.wp.com/MynockManor.com/wp-content/uploads/2020/11/Star-Wars-11-Full-Cover-Vol-2.jpeg?ssl=1",
                        "https://storage.googleapis.com/hipcomic/p/007ce152f644d7971541cb74253b82cf.jpg"
                    ]

                default:
                    return [
                        "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                        "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                        "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000",
                        "https://img.freepik.com/free-vector/comics-poster-template_225004-800.jpg?w=2000"
                    ]

            }
        }

        return comics
    }

    return (
        <div>
            <input type="checkbox" id={`my-modal-selectedCharacter`} className="modal-toggle" value="" />
            <label htmlFor={`my-modal-selectedCharacter`} className="modal">
                <label className="" htmlFor="">
                    <div className="rounded-md bg-base-100 h-[95vh] w-[80vw] max-w-[80rem] overflow-y-auto overflow-x-hidden">
                        <div className='flex flex-col justify-center mt-5'>
                            <div className='flex justify-between mb-5 mx-5'>
                                <label htmlFor={`my-modal-selectedCharacter`} className="btn btn-sm btn-circle right-2 top-2">✕</label>
                                <label className="swap swap-flip text-2xl">
                                    <input
                                        onChange={() => {
                                            if (favorites.includes(selectedCharacter)) {
                                                manageFavorite("remove", selectedCharacter)
                                            } else {
                                                manageFavorite("add", selectedCharacter)
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
                            </div>

                            <div className='flex flex-col gap-5'>
                                <div className="w-full bg-base-200 p-5">
                                    <div className="flex flex-col md:flex-row lg:flex-row justify-center">

                                        <div className='flex flex-col items-center align-middle gap-3 mx-auto max-w-screen-lg'>
                                            {/* IMAGE CHARACTER */}
                                            <div className="relative w-64 md:w-72 lg:w-96 h-[25rem] md:h-[25rem] lg:h-[34rem] bg-base-100 shadow-xl">
                                                {/* <label className='group cursor-pointer w-full h-full' htmlFor={`my-modal-comic-${selectedCharacter.name}-${index}+${selectedCharacter.slug}`}> */}
                                                <label className='group cursor-pointer w-full h-full' htmlFor={`my-modal-comic`}>
                                                    <img className="absolute w-full h-full object-cover blur-sm animate-pulse md:animate-none lg:animate-none group-hover:animate-pulse " src={selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                                                    <img className="absolute w-[90%] h-[90%] object-cover rounded-md ml-5 mt-5" src={selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                                                </label>
                                            </div>
                                            {/* IMAGE CHARACTER */}

                                            <div className='self-center mt-5'>
                                                <h1 className={`text-5xl font-bold text-center`} >{selectedCharacter.name}</h1>
                                                <p className={`py-2 text-center`} >{selectedCharacter.biography.fullName}</p>
                                            </div>
                                        </div>

                                        <div className='mx-auto flex flex-col justify-center gap-3 items-center w-[90%] md:w-[50%] lg:w-[50%]'>
                                            <div className="w-full grid grid-flow-col grid-col-3">
                                                <div onClick={() => setSelectedOption("Stats")} className={`text-md md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Stats" ? "tab-active" : ""}`}>Stats</div>
                                                <div onClick={() => setSelectedOption("Appereance")} className={`text-md md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Appereance" ? "tab-active" : ""}`}>Appereance</div>
                                                <div onClick={() => setSelectedOption("Biography")} className={`text-md md:text-lg lg:text-xl tab tab-bordered ${selectedOption === "Biography" ? "tab-active" : ""}`}>Biography</div>
                                            </div>

                                            {
                                                selectedOption === "Stats" ?
                                                    <div className="stats stats-vertical shadow self-center w-full h-full">
                                                        <div className="stat">
                                                            <div className="stat-figure text-primary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>👊</p>
                                                            </div>
                                                            <div className="stat-title">Combat</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.combat}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-figure text-primary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>❤</p>
                                                            </div>
                                                            <div className="stat-title">Durability</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.durability}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-figure text-primary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>🧠</p>
                                                            </div>
                                                            <div className="stat-title">Intelligence</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.intelligence}</div>
                                                        </div>

                                                        <div className="stat">
                                                            <div className="stat-figure text-secondary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>🔆</p>
                                                            </div>
                                                            <div className="stat-title">Power</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.power}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-figure text-secondary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>⚡</p>
                                                            </div>
                                                            <div className="stat-title">Speed</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.speed}</div>
                                                        </div>
                                                        <div className="stat">
                                                            <div className="stat-figure text-secondary">
                                                                <p className='text-2xl md:text-5xl lg:text-5xl'>💪</p>
                                                            </div>
                                                            <div className="stat-title">Strength</div>
                                                            <div className="stat-value">{selectedCharacter.powerstats.strength}</div>
                                                        </div>
                                                    </div>
                                                    :
                                                    selectedOption === "Appereance" ?
                                                        <div className="stats stats-vertical shadow self-center w-full h-full">
                                                            <div className="stat">
                                                                <div className="stat-figure text-primary">
                                                                    <p className='text-2xl md:text-5xl lg:text-5xl'>👁</p>
                                                                </div>
                                                                <div className="stat-title">EyeColor</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.eyeColor}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-primary text-2xl md:text-5xl lg:text-5xl">
                                                                    {
                                                                        selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                                                            <p>🚹</p>
                                                                            :
                                                                            selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                                                                <p>🚺</p>
                                                                                :
                                                                                null
                                                                    }
                                                                </div>
                                                                <div className="stat-title">Gender</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.gender}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-primary text-2xl md:text-5xl lg:text-5xl">
                                                                    {
                                                                        selectedCharacter.appearance.gender?.toLowerCase() === "male" ?
                                                                            <p>👱‍♂️</p>
                                                                            :
                                                                            selectedCharacter.appearance.gender?.toLowerCase() === "female" ?
                                                                                <p>👱‍♀️</p>
                                                                                :
                                                                                null
                                                                    }

                                                                </div>
                                                                <div className="stat-title">Hair color</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.hairColor}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-secondary">
                                                                    <p className='text-2xl md:text-5xl lg:text-5xl'>📏</p>
                                                                </div>
                                                                <div className="stat-title">Height</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.height[0]} | {selectedCharacter.appearance.height[1]}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-secondary text-2xl md:text-5xl lg:text-5xl">
                                                                    {
                                                                        selectedCharacter.appearance.race?.toLowerCase().includes("meta") ?
                                                                            <p>🧬</p>
                                                                            :
                                                                            selectedCharacter.appearance.race?.toLowerCase() === "human" ?
                                                                                <p>🌎</p>
                                                                                :
                                                                                selectedCharacter.appearance.race?.toLowerCase() === "mutant" ?
                                                                                    <p>🧬</p>
                                                                                    :
                                                                                    selectedCharacter.appearance.race?.toLowerCase() === "android" || selectedCharacter.appearance.race?.toLowerCase() === "cyborg" && (selectedCharacter.appearance.race !== null) ?
                                                                                        <p>🤖</p>
                                                                                        :
                                                                                        selectedCharacter.appearance.race?.toLowerCase() === "alien" || selectedCharacter.appearance.race?.toLowerCase() === "eternal" || selectedCharacter.appearance.race?.toLowerCase() === "asgardian" || selectedCharacter.appearance.race?.toLowerCase() === "kryptonian" && (selectedCharacter.appearance.race !== null) ?
                                                                                            <p>👽</p>
                                                                                            :
                                                                                            <p>🌎</p>
                                                                    }
                                                                </div>
                                                                <div className="stat-title">Race</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.race}</div>
                                                            </div>
                                                            <div className="stat">
                                                                <div className="stat-figure text-secondary">
                                                                    <p className='text-2xl md:text-5xl lg:text-5xl'>⚖</p>
                                                                </div>
                                                                <div className="stat-title">Weigth</div>
                                                                <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.appearance.weight[0]} | {selectedCharacter.appearance.weight[1]}</div>
                                                            </div>
                                                        </div>
                                                        :
                                                        selectedOption === "Biography" ?
                                                            <div className="stats stats-vertical shadow self-center w-full h-full">
                                                                <div className="stat">
                                                                    <div className="stat-figure text-primary text-2xl md:text-5xl lg:text-5xl">
                                                                        {
                                                                            selectedCharacter.biography.alignment === "good" ?
                                                                                <p>😃</p>
                                                                                :
                                                                                selectedCharacter.biography.alignment === "bad" ?
                                                                                    <p>😡</p>
                                                                                    :
                                                                                    selectedCharacter.biography.alignment === "neutral" ?
                                                                                        <p>😐</p>
                                                                                        :
                                                                                        null
                                                                        }
                                                                    </div>
                                                                    <div className="stat-title">Alignment</div>
                                                                    <div className="stat-value text-sm md:text-xl lg:text-xl">
                                                                        {selectedCharacter.biography.alignment === "good" ? "Hero" : selectedCharacter.biography.alignment === "bad" ? "Villain" : "Anti-Hero"}
                                                                    </div>
                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-primary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>📅</p>
                                                                    </div>
                                                                    <div className="stat-title">First Appearance</div>
                                                                    <div className='flex tooltip' data-tip={selectedCharacter.biography.firstAppearance}>
                                                                        <span className="stat-value whitespace-pre text-sm md:text-xl lg:text-xl">{selectedCharacter.biography.firstAppearance.slice(0, 10)}...</span>
                                                                    </div>
                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-primary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🗺</p>
                                                                    </div>
                                                                    <div className="stat-title">Place Of Birth</div>
                                                                    <p className="stat-value text-sm md:text-xl lg:text-xl tooltip flex" data-tip={selectedCharacter.biography.placeOfBirth}>{selectedCharacter.biography.placeOfBirth.slice(0, 10)}...</p>
                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>📚</p>
                                                                    </div>
                                                                    <div className="stat-title">Publisher</div>
                                                                    <div className="stat-value text-sm md:text-xl lg:text-xl">{selectedCharacter.biography.publisher}</div>
                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🔠</p>
                                                                    </div>
                                                                    <div className="stat-title">Aliases</div>

                                                                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                                                        <div className="collapse-title text-xl font-medium">
                                                                            Aliases...
                                                                        </div>
                                                                        <div className="collapse-content">
                                                                            {selectedCharacter.biography.aliases.map(((currentAlias, index) => {
                                                                                return (
                                                                                    <p key={`${currentAlias}-${index}`} >{currentAlias}</p>
                                                                                )
                                                                            }))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🆎</p>
                                                                    </div>
                                                                    <div className="stat-title">Alter Egos</div>
                                                                    {
                                                                        selectedCharacter.biography.alterEgos ?
                                                                            <div className="stat-value text-sm md:text-xl lg:text-xl tooltip flex" data-tip={selectedCharacter.biography.alterEgos}>{selectedCharacter.biography.alterEgos === "No alter egos found." ? "Unknown" : selectedCharacter.biography.alterEgos.slice(0, 15)}</div>
                                                                            : null
                                                                    }

                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>👪</p>
                                                                    </div>
                                                                    <div className="stat-title">Group Affiliation</div>

                                                                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                                                        <div className="collapse-title text-xl font-medium">
                                                                            Teams...
                                                                        </div>
                                                                        <div className="collapse-content">
                                                                            <p>{selectedCharacter.connections.groupAffiliation}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="stat">
                                                                    <div className="stat-figure text-secondary">
                                                                        <p className='text-2xl md:text-5xl lg:text-5xl'>🧾</p>
                                                                    </div>
                                                                    <div className="stat-title">Occupation</div>
                                                                    <div className="stat-value flex text-sm md:text-xl lg:text-xl tooltip" data-tip={selectedCharacter.work.occupation.split(",")[0]}>{selectedCharacter.work.occupation.slice(0, 15)}...</div>
                                                                </div>
                                                            </div>
                                                            :
                                                            null
                                            }
                                        </div>

                                    </div>
                                    <div className='flex flex-col justify-center items-center my-10'>
                                        <br />
                                        <div className='w-48 md:w-60 lg:w-96 h-[5px] bg-current rounded-md' />
                                        <br />
                                    </div>

                                    <div className='my-5'>
                                        <div className='flex flex-col items-center justify-center'>
                                            <p className='text-2xl font-bold'>Comics</p>
                                            <p className='text-2xl font-bold mb-2'>💥💨💢💫💠💭💬</p>
                                        </div>
                                        <div className='h-[35vh] md:h-[50vh] lg:h-[80vh] flex justify-center'>
                                            <div className="carousel lg:carousel-vertical carousel-center h-full max-w-md lg:max-w-md p-4 space-x-4 bg-base-100 rounded-box">
                                                {organizedComicsProperty(selectedCharacter.comics, selectedCharacter.biography.publisher).map((comic, index) => {
                                                    return (
                                                        <label key={`${selectedCharacter._id}-${index}`} className="carousel-item lg:py-2" htmlFor={`my-modal-comic`}>
                                                            <img className="rounded-box h-full w-full" src={comic} loading="lazy" />
                                                        </label>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        {organizedComicsProperty(selectedCharacter.comics, selectedCharacter.biography.publisher).map((comic, index) => {
                                            return (
                                                <div key={`comic-${selectedCharacter.name}-${index}`} className=''>
                                                    <ImageZoom
                                                        image={comic}
                                                        character={selectedCharacter.name}
                                                    />
                                                </div>
                                            )
                                        })}



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </label>

            <ImageZoom
                image={selectedCharacter.images.md}
                character={selectedCharacter.name}
            />
        </div>
    )
}