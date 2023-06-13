import React, { useState } from 'react'
import LoadingCard from '../Components/LoadingCard';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

//https://heroes-backend.onrender.com/

type CharactersProps = {
    charactersFiltered: Character[]
    manageFavorite: (action: string, characterSelected: Character) => void
    favorites: Character[]
    isLoading: boolean
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

/* const characterEmpty: Character = {
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
} */

function Characters({ charactersFiltered, manageFavorite, favorites, isLoading }: CharactersProps) {

    function publisherIMG(publisher: string) {
        switch (publisher) {
            case "Marvel Comics":
                return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"

            case "DC Comics":
                return "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"

            case "Shueisha":
                return "https://www.shueisha.co.jp/wp-content/themes/shueisha/image/en/mv/mv_subtitle_01.png"

            case "George Lucas":
                return "https://media.comicbook.com/wp-content/uploads/2012/06/120411064621_lucasfilm-logo-640x360-16x9.jpg"

            case "Warner Bros":
                return "https://variety.com/wp-content/uploads/2022/04/IMG_3724.jpg"

            case "Dark Horse Comics":
                return "https://i0.wp.com/www.comicsbeat.com/wp-content/uploads/2020/03/dark-horse-logo-banner.png?fit=1200%2C500&ssl=1"

            default:
                return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykZHBER1nS5QMUGvv0qJCJFuqtf5wPrliiiE_1hMMbCwvONjVOaYloiVHMeCyH710z7g&usqp=CAU"
        }
    }

    function getAligmentIMG(alignment: string) {
        switch (alignment) {
            case "good":
                return <svg className="fill-current hover:text-success h-10 w-10" /* width="50" height="50" */ viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8.03001 15.2425C7.87428 14.6196 8.36619 14.0002 9.00016 13.9998H15.0002C15.6333 14.0002 16.126 14.6172 15.9703 15.24C15.4525 16.9881 13.7854 18 12.0002 18C10.2834 18 8.46902 16.9986 8.03001 15.2425ZM16.5 10C16.5 10.8284 15.8284 11.5 15 11.5C14.1716 11.5 13.5 10.8284 13.5 10C13.5 9.17157 14.1716 8.5 15 8.5C15.8284 8.5 16.5 9.17157 16.5 10ZM9 11.5C9.82843 11.5 10.5 10.8284 10.5 10C10.5 9.17157 9.82843 8.5 9 8.5C8.17157 8.5 7.5 9.17157 7.5 10C7.5 10.8284 8.17157 11.5 9 11.5Z" /></svg>;

            case "bad":
                return (<svg className="fill-current hover:text-error h-10 w-10" /* width="40" height="40"  */ version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.059 106.059"><g><path d="M15.515,15.512C-5.173,36.198-5.171,69.858,15.517,90.547c20.682,20.684,54.341,20.684,75.027-0.004 c20.687-20.685,20.685-54.342,0.002-75.024C69.858-5.172,36.198-5.172,15.515,15.512z M84.757,84.758 c-17.494,17.494-45.961,17.496-63.455,0.002c-17.498-17.497-17.496-45.966,0-63.46C38.795,3.806,67.261,3.804,84.759,21.301 C102.253,38.795,102.251,67.265,84.757,84.758z M75.639,71.029c0,1.921-1.558,3.479-3.479,3.479H33.902 c-1.921,0-3.479-1.558-3.479-3.479s1.558-3.478,3.479-3.478h38.259C74.081,67.552,75.639,69.108,75.639,71.029z M77.673,31.718 c1.229,1.229,1.229,3.222-0.001,4.451l-9.455,9.456c-1.229,1.229-3.223,1.229-4.451,0s-1.229-3.222,0-4.451l9.456-9.455 C74.451,30.489,76.444,30.489,77.673,31.718z M77.878,47.999c0,2.254-1.827,4.081-4.079,4.081s-4.079-1.827-4.079-4.081 c0-2.252,1.827-4.08,4.079-4.08C76.05,43.919,77.878,45.746,77.878,47.999z M28.385,36.169c-1.229-1.229-1.229-3.222-0.001-4.451 c1.229-1.229,3.222-1.229,4.451,0l9.456,9.455c1.229,1.229,1.229,3.222,0,4.451c-1.229,1.229-3.223,1.229-4.451,0L28.385,36.169z  M32.258,52.08c-2.251,0-4.079-1.827-4.079-4.081c0-2.252,1.827-4.08,4.079-4.08s4.079,1.827,4.079,4.08 C36.337,50.253,34.51,52.08,32.258,52.08z" /></g></svg>);

            case "neutral":
                return <svg className="fill-current hover:text-warning h-10 w-10" /* width="40" height="40"  */ viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.316c-5.901 0-10.684 4.783-10.684 10.684s4.783 10.684 10.684 10.684 10.684-4.783 10.684-10.684c-.012-5.896-4.788-10.672-10.683-10.684h-.001zm0 22.297c-6.414 0-11.613-5.199-11.613-11.613s5.199-11.613 11.613-11.613 11.613 5.199 11.613 11.613v.015c0 6.405-5.192 11.597-11.597 11.597-.005 0-.011 0-.016 0h.001z" /><path d="m12 24c-6.614-.034-11.966-5.386-12-11.997v-.003c0-6.627 5.373-12 12-12s12 5.373 12 12c-.034 6.614-5.386 11.966-11.997 12zm0-23.226c-6.2 0-11.226 5.026-11.226 11.226s5.026 11.226 11.226 11.226 11.226-5.026 11.226-11.226c-.004-6.198-5.028-11.221-11.225-11.226zm0 22.297c-6.114 0-11.071-4.957-11.071-11.071s4.957-11.071 11.071-11.071c6.114 0 11.071 4.957 11.071 11.071s-4.957 11.071-11.071 11.071zm0-21.368c-5.687 0-10.297 4.61-10.297 10.297s4.61 10.297 10.297 10.297 10.297-4.61 10.297-10.297c0-.001 0-.003 0-.005 0-5.684-4.608-10.292-10.292-10.292-.002 0-.003 0-.005 0z" /><path d="m9.677 9.91v.009c0 1.15-.932 2.082-2.082 2.082-.003 0-.006 0-.009 0-1.154 0-2.09-.936-2.09-2.09s.936-2.09 2.09-2.09h.009c1.15 0 2.082.932 2.082 2.082v.009z" /><path d="m18.581 9.91c0 1.154-.936 2.09-2.09 2.09s-2.09-.936-2.09-2.09c0-.003 0-.006 0-.009 0-1.15.932-2.082 2.082-2.082h.009c1.145.023 2.067.945 2.09 2.088v.002z" /><path d="m16.413 17.187h-8.903c-.257 0-.465-.208-.465-.465s.208-.465.465-.465h8.903c.249.017.447.215.464.463v.002.019c0 .246-.2.446-.446.446-.007 0-.013 0-.02 0h.001z" /><path d="m16.413 17.574h-8.903c-.47 0-.852-.381-.852-.852s.381-.852.852-.852h8.903c.47 0 .852.381.852.852s-.381.852-.852.852zm-8.826-.929c-.077 0-.077.077 0 0-.02.02-.033.047-.033.077s.013.058.033.077h8.903c.043 0 .077-.035.077-.077 0-.077 0-.077-.077-.077z" /></svg>
        }
    }

    const randomImagesArray = [
        // 'https://static.wikia.nocookie.net/marveldatabase/images/9/98/Hulk_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20190428013057',
        // 'https://static.wikia.nocookie.net/marvel_dc/images/3/34/Teen_Titans_Vol_6_20_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20180726070928',
        // 'https://static.wikia.nocookie.net/marveldatabase/images/9/90/Warlock_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20230516103920',
        // 'https://static.wikia.nocookie.net/marveldatabase/images/d/d8/Wolverine_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20230516113350',
        // 'https://static.wikia.nocookie.net/marveldatabase/images/b/b9/Spider-Man_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20180216053121',
        // 'https://static.wikia.nocookie.net/marveldatabase/images/1/13/Avengers_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20180530082529',
        // 'https://static.wikia.nocookie.net/marveldatabase/images/9/9a/Fantastic_Four_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20130101030841',
        // 'https://static.wikia.nocookie.net/marveldatabase/images/0/06/Guardians_of_the_Galaxy_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20140529215102',
        // 'https://static.wikia.nocookie.net/marveldatabase/images/4/40/X-Men_Main_Page_Icon.jpg/revision/latest/scale-to-width-down/90?cb=20130101030859',
        // 'https://static.wikia.nocookie.net/marvel_dc/images/3/34/Teen_Titans_Vol_6_20_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20180726070928',
        // 'https://static.wikia.nocookie.net/marvel_dc/images/2/21/Action_Comics_Vol_1_977_Textless.jpg/revision/latest/scale-to-width-down/150?cb=20170413041035',
        // 'https://static.wikia.nocookie.net/marvel_dc/images/5/57/Justice_Society_of_America_Prime_Earth_0003.jpg/revision/latest/scale-to-width-down/150?cb=20190907203102',
        // 'https://static.wikia.nocookie.net/marvel_dc/images/b/b3/Justice_League_Vol_4_40_Textless_Variant.jpg/revision/latest/scale-to-width-down/150?cb=20200421212518',
        // 'https://static.wikia.nocookie.net/marvel_dc/images/d/d5/Suicide_Squad_Vol_6_9_Textless_Variant.jpg/revision/latest/scale-to-width-down/150?cb=20200922043238',

        "https://i.pinimg.com/222x/89/e6/bd/89e6bdf2b46971a60b20cfd714364273.jpg",
        "https://i.pinimg.com/564x/ab/7e/05/ab7e05dbab4bd3198ebd033d931ca712.jpg",
        "https://i.pinimg.com/564x/76/8d/d9/768dd930831c7898f0377d3c493b1a57.jpg",
        "https://i.pinimg.com/564x/82/b0/de/82b0de3dd7bac14970397e8f09e27f83.jpg",
        "https://i.pinimg.com/564x/fb/be/d7/fbbed74e1fb034b647aea0a319701e49.jpg",
        "https://i.pinimg.com/564x/78/32/83/7832839ad65916993e1519ce9211495b.jpg",
        "https://i.pinimg.com/564x/7b/36/fa/7b36fac139e067c3ad9c80769be1fe3e.jpg",
        "https://i.pinimg.com/564x/f3/c9/d1/f3c9d1ef8d3e0fb800e868bd78e77b8f.jpg",
        "https://i.pinimg.com/564x/6f/da/4e/6fda4e7db350b2177c5f30fa456c36aa.jpg",
        "https://i.pinimg.com/564x/fa/03/de/fa03de3f6c00ad4ac796958651bfc1a1.jpg",
        "https://i.pinimg.com/750x/7c/a9/51/7ca951ff8b9c82ec809d490165a51c7b.jpg",
    ]

    function getRandomImage(images: string[]) {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    //https://www.npmjs.com/package/react-lazy-load-image-component
    //https://www.youtube.com/watch?v=QAR9VIqx1qQ&ab_channel=MichaelBreitung
    //https://www.youtube.com/watch?v=2U7yZ3wvFBM&ab_channel=SonnySangha
    //https://www.youtube.com/watch?v=4nYsbm8N4EQ&ab_channel=CyberPotato

    function transitionImageCard() {
        const imageElements = document.querySelectorAll('.imageCard')

        imageElements.forEach((image) => {
            setTimeout(() => {
                image.classList.replace('opacity-0', 'opacity-100')
            }, 3000)
        })
    }


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] gap-10 mx-auto pt-[2rem] ">
            {
                charactersFiltered.map((currentCharacter) => {
                    if (isLoading) {
                        return (
                            <div key={currentCharacter._id}>
                                <LoadingCard />
                            </div>
                        )
                    }
                    return (
                        <div key={currentCharacter._id}>
                            <label className="cursor-pointer" htmlFor={`my-modal-${currentCharacter.slug}`}>
                                <div>
                                    <div
                                        //bg-base-100
                                        // bg-cover bg-[url('${currentCharacter.images.xs !== '' ? currentCharacter.images.xs : getRandomImage(randomImagesArray)}')] 
                                        className={`
                                            card image-full hover:opacity-1 inset-0 object-cover w-full h-[20rem] md:h-[25rem] lg:h-[35rem] shadow-xl hover:scale-110 group/item
                                        `}
                                    >
                                        <figure className='relative rounded-md'>
                                            <img
                                                className="w-full h-full animate-pulse blur-lg rounded-md"
                                                src={(currentCharacter.images.xs !== '' && currentCharacter.images.xs !== '-')
                                                    ? currentCharacter.images.xs
                                                    : getRandomImage(randomImagesArray)}
                                                alt={currentCharacter.name}
                                                loading="lazy"
                                            />

                                            <img
                                                className={`imageCard absolute w-full h-full transition-opacity duration-200 ease-in-out rounded-md opacity-0 `}
                                                src={currentCharacter.images.md}
                                                alt={currentCharacter.name}
                                                loading='lazy'
                                                onLoadCapture={transitionImageCard}
                                            />
                                        </figure>

                                        <div className="card-body group/edit invisible group-hover/item:visible transition delay-150 duration-300 ease-in-out flex flex-col justify-between">
                                            <div>
                                                <h2 className="card-title text-xl md:text-2xl lg:text-3xl">{currentCharacter.name}</h2>
                                            </div>

                                            <div className="card-actions justify-end">
                                                <div className='flex w-full justify-between'>
                                                    <img className='h-[7vw] w-[15vw] sm:h-[7vw] sm:w-[15vw] md:h-[3rem] md:w-[7rem] lg:h-[3rem] lg:w-[7rem] self-center' src={publisherIMG(currentCharacter.biography.publisher)} alt="" loading="lazy" />
                                                    <div className="tooltip" data-tip={currentCharacter.biography.alignment === "good" ? "Hero" : currentCharacter.biography.alignment === "bad" ? "Villain" : "Anti-hero"}>
                                                        {getAligmentIMG(currentCharacter.biography.alignment)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    )
                })
            }
            <ModalCharacter
                charactersFiltered={charactersFiltered}
                manageFavorite={manageFavorite}
                favorites={favorites}
            />
        </div>
    )
}

type ModalCharacterProps = {
    manageFavorite: (action: string, characterSelected: Character) => void
    favorites: Character[]
    charactersFiltered: Character[]
}

function ModalCharacter({ manageFavorite, favorites, charactersFiltered }: ModalCharacterProps) {
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
            {charactersFiltered.map((selectedCharacter, index) => {
                return (
                    <div key={`${selectedCharacter._id}-${index}`}>
                        <input type="checkbox" id={`my-modal-${selectedCharacter.slug}`} className="modal-toggle" value="" />
                        <label htmlFor={`my-modal-${selectedCharacter.slug}`} className="modal">
                            <label className="" htmlFor="">
                                <div className="rounded-md bg-base-100 h-[95vh] w-[80vw] max-w-[80rem] overflow-y-auto overflow-x-hidden">
                                    <div className='flex flex-col justify-center mt-5'>
                                        <div className='flex justify-between mb-5 mx-5'>
                                            <label htmlFor={`my-modal-${selectedCharacter.slug}`} className="btn btn-sm btn-circle right-2 top-2">✕</label>
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
                                                        <div className="relative w-64 md:w-72 lg:w-96 h-[25rem] md:h-[25rem] lg:h-[35rem] bg-base-100 shadow-xl">
                                                            <figure>
                                                                <img className="absolute w-full h-full object-cover rounded-md" src={selectedCharacter.images.md} alt={selectedCharacter.name} loading="lazy" />
                                                            </figure>
                                                        </div>

                                                        <div className='self-center'>
                                                            <h1 className={`text-5xl font-bold`} >{selectedCharacter.name}</h1>
                                                            <p className={`py-2`} >{selectedCharacter.biography.fullName}</p>
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
                                                                                        {selectedCharacter.biography.aliases.map((currentAlias => {
                                                                                            return (
                                                                                                <p key={currentAlias} >{currentAlias}</p>
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
                                                                    <label key={`${selectedCharacter._id}-${index}`} className="carousel-item lg:py-2" htmlFor={`my-modal-comic-${selectedCharacter.name}-${index}`}>
                                                                        <img className="rounded-box h-full w-full" src={comic} loading="lazy" />
                                                                    </label>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>

                                                    {organizedComicsProperty(selectedCharacter.comics, selectedCharacter.biography.publisher).map((comic, index) => {
                                                        return (
                                                            <div key={`comic-${selectedCharacter.name}-${index}`} className=''>
                                                                <ComicZoom
                                                                    comic={comic}
                                                                    character={selectedCharacter.name}
                                                                    index={index}
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
                    </div>
                )
            })}
        </div>
    )
}

type comicZoomProps = {
    comic: string,
    character: string,
    index: number
}

function ComicZoom({ comic, character, index }: comicZoomProps) {
    return (
        <div className='w-full h-auto'>
            <input type="checkbox" id={`my-modal-comic-${character}-${index}`} className="modal-toggle"  />
            <label htmlFor={`my-modal-comic-${character}-${index}`} className="modal">
                <label className="" htmlFor="">
                    <div className="rounded-md bg-base-100 w-[90vw] max-w-[40rem] overflow-y-auto overflow-x-hidden flex justify-center p-5">
                        <TransformWrapper
                            /* initialScale={1}
                            initialPositionX={100}
                            initialPositionY={100} */
                        >
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                <React.Fragment >
                                    <div className="tools absolute z-10 bottom-10 ">
                                        <button className='btn btn-circle hover:bg-primary' onClick={() => zoomIn()}>+</button>
                                        <button className='btn btn-circle hover:bg-primary' onClick={() => zoomOut()}>-</button>
                                        <button className='btn btn-circle hover:bg-primary' onClick={() => resetTransform()}>x</button>
                                    </div>
                                    <TransformComponent>
                                        <img /* className="w-full h-full object-cover rounded-md" */ src={comic} alt={`Comic of ${character}`} loading="lazy" />
                                        {/* <div>Comic of {character}</div> */}
                                    </TransformComponent>
                                </React.Fragment>
                            )}
                        </TransformWrapper>
                    </div>
                </label>
            </label>

        </div>
    )
}

export default Characters