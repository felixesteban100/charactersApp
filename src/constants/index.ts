import { Character } from "../types"


export const characterEmpty: Character = {
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
        alignment: "good",
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
}

/* teams */
export const listOfTeamsWithImgInTheHeroSection = [
    "Avengers",
    "Justice League",
    "Fantastic Four(Original)",
    "X-Men",
    "Illuminati",
    "Batman Family",
    "Teenage Mutant Ninja Turtles",
    "Guardians of the Galaxy",
    "Fantastic Four",
    "Justice League (Original)",
    "Teen Titans",
    "Future Foundation",
    "Symbiotes",
    "Flash Family",
    "Suicide Squad",
    "Demon Slayer",
    "Ben 10",
    "New Guardians",
    "Lantern Corps",
    "Hulk Family"
]
export function teamIMG(teamName: string) {
    // change these for comics images like the guardians of the galaxy one (for a more responsive design)
    switch (teamName) {
        case "Avengers":
            return ["https://comicvine.gamespot.com/a/uploads/scale_small/10/103530/6410591-qwadf.jpg", "https://images.comicbooktreasury.com/wp-content/uploads/2022/04/The-Avengers-100-Avengers-Reading-Order-705x470.jpg"]

        case "Justice League":
            return ["https://i.pinimg.com/564x/5a/75/4b/5a754b3b2eba4bb6784f682003958383.jpg", "https://images.comicbooktreasury.com/wp-content/uploads/2021/09/DC-Comics-Omnibus.jpg"]

        case "Justice League (Original)":
            return ["https://i.pinimg.com/564x/5a/75/4b/5a754b3b2eba4bb6784f682003958383.jpg"]

        case "Fantastic Four(Original)":
            return ["https://www.writeups.org/wp-content/uploads/Ultimate-Fantastic-Four-Marvel-Comics-a.jpg", "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8113336-fantastic_four_vol_6_1_dell%27otto_exclusive_variant_textless.jpg", "https://i.pinimg.com/736x/88/73/ab/8873ab9f66f9283d1c5cf08a708818c1--marvel-dc-comics-marvel-art.jpg", "https://comicartcommunity.com/gallery/data/media/248/ULTIMATE_FANTASTIC_FOUR_06_Dale_Keown.jpg"]

        case "Fantastic Four":
            return ["https://preview.redd.it/amtkskhm6jp71.jpg?width=640&crop=smart&auto=webp&s=5210447223f321889ad6f663e6bf856629c6df0a"]

        case "X-Men":
            return ["https://kevinreviewsuncannyxmen.files.wordpress.com/2014/06/all-new-x-men-covers.jpg"]

        case "Illuminati":
            return ["https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/05/Illuminati.jpg"]

        case "Batman Family":
            return ["https://i.pinimg.com/736x/93/a9/8b/93a98b6a447c4a394c1d2e670996daf5.jpg"]

        case "Teenage Mutant Ninja Turtles":
            return ["https://www.entertainmentearth.com/news/wp-content/uploads/2015/03/teenage-mutant-ninja-turtles-660x400.jpg"]

        case "Guardians of the Galaxy":
            return ["https://cdn.marvel.com/u/prod/marvel/i/mg/6/e0/5c3f94442d3e9/clean.jpg", "https://images5.alphacoders.com/872/872052.jpg"]

        case "Teen Titans":
            return ["https://13thdimension.com/wp-content/uploads/2016/09/640z.jpg"]

        case "Future Foundation":
            return ["https://media.wired.com/photos/5932b9ebd80dd005b42b03b1/master/w_2560%2Cc_limit/FF_1_Cover-660.jpg", "https://staticg.sportskeeda.com/editor/2022/07/3d896-16591198229869-1920.jpg", "https://comicaption.files.wordpress.com/2011/11/fantasticfour600a1.jpg"]

        case "Symbiotes":
            return ["https://celebrity.fm/wp-content/uploads/2022/05/Who-is-the-God-of-symbiote-celebrityfm.jpg", "https://i.pinimg.com/originals/a7/d8/4b/a7d84bf9fe6b44529f3b17555ab07a5d.jpg"]

        case "Flash Family":
            return ["https://w0.peakpx.com/wallpaper/618/788/HD-wallpaper-flash-family-dceu-arrowverse-dc-dc-comics.jpg", "https://i0.wp.com/www.comicsbeat.com/wp-content/uploads/2020/05/EX_IIaHUYAAE6Aa.jpg?ssl=1"]

        case "Suicide Squad":
            return ["https://m.media-amazon.com/images/I/A1nLFV0is9L._AC_UF1000,1000_QL80_.jpg", "https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/09/suicide_squad_detail_-_publicity_-_embed_-_2019.jpg"]

        case "Demon Slayer":
            return ["https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg", "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg", "https://www.nme.com/wp-content/uploads/2023/01/demon-slayer-season-3-swordsmith-village-arc-key-art@2000x1270.jpg", "https://m.media-amazon.com/images/M/MV5BZGVlNzJkN2QtYmQ2YS00MmUzLTk0MjYtOWQ2YmVhZjMyNGZjXkEyXkFqcGdeQXVyOTA2OTk0MDg@._V1_.jpg"]

        case "Ben 10":
            return ["https://i.pinimg.com/originals/56/81/f2/5681f244b6d26283fa5e535e176613e9.jpg"]

        case "New Guardians":
            return ["https://digitalspyuk.cdnds.net/12/40/comics_new_guardians_2.jpg", "https://e1.pxfuel.com/desktop-wallpaper/769/825/desktop-wallpaper-i-redesigned-kyle-s-white-lantern-suit-original-art-by-tyler-kirkham-from-green-lantern-new-guardians-%E2%80%A6-lantern-corps-suits.jpg"]

        case "Lantern Corps":
            return ["https://qph.cf2.quoracdn.net/main-qimg-2673d6d36ab6b962fecea97a8dc6f231-lq"]

        case "Hulk Family":
            return ["https://i.pinimg.com/originals/c4/6b/4c/c46b4cad4416a382de72896f9e0d5b9f.jpg", "https://comicvine.gamespot.com/a/uploads/original/11134/111347244/7079315-4150626068-96446.jpg", "https://i.pinimg.com/736x/4e/e0/1f/4ee01f483be7ac031996b51e30e8e8e1--hulk-hulk-walter-obrien.jpg"]

        default:
            return ["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"]
    }
}

export function getTeamByUniverse(universe: string){
    switch (universe) {
        case "Marvel Comics":
            return [
                {
                    name: "Asgardians",
                    value: "Asgardians"
                },
                {
                    name: "Avengers",
                    value: "Avengers"
                },
                {
                    name: "Avengers (Original)",
                    value: "Avengers (Original)"
                },
                {
                    name: "Black Order",
                    value: "Black Order"
                },
                {
                    name: "Brotherhood of Evil Mutants",
                    value: "Brotherhood of Evil Mutants"
                },
                {
                    name: "Dark avengers",
                    value: "Dark avengers"
                },
                {
                    name: "Defenders",
                    value: "Defenders"
                },
                {
                    name: "Fantastic Four",
                    value: "Fantastic Four"
                },
                {
                    name: "Fantastic Four(Original)",
                    value: "Fantastic Four(Original)"
                },
                {
                    name: "Future Foundation",
                    value: "Future Foundation"
                },
                {
                    name: "Guardians of the Galaxy",
                    value: "Guardians of the Galaxy"
                },
                {
                    name: "Heroes For Hire",
                    value: "Heroes For Hire"
                },
                {
                    name: "Hulk Family",
                    value: "Hulk Family"
                },
                {
                    name: "Hydra",
                    value: "Hydra"
                },
                {
                    name: "Illuminati",
                    value: "Illuminati"
                },
                {
                    name: "Inhumans",
                    value: "Inhumans"
                },
                {
                    name: "Asgardians",
                    value: "Asgardians"
                },
                {
                    name: "Legion of Monsters",
                    value: "Legion of Monsters"
                },
                {
                    name: "Marvel Knights",
                    value: "Marvel Knights"
                },
                {
                    name: "Midnight Sons",
                    value: "Midnight Sons"
                },
                {
                    name: "New Mutans",
                    value: "New Mutans"
                },
                {
                    name: "New Warriors",
                    value: "New Warriors"
                },
                {
                    name: "Secret Avengers",
                    value: "Secret Avengers"
                },
                {
                    name: "Sinister Six",
                    value: "Sinister Six"
                },
                {
                    name: "Spider-Army",
                    value: "Spider-Army"
                },
                {
                    name: "Symbiotes",
                    value: "Symbiotes"
                },
                {
                    name: "Thunderbolts",
                    value: "Thunderbolts"
                },
                {
                    name: "Ultimates",
                    value: "Ultimates"
                },
                {
                    name: "Weapon X",
                    value: "Weapon X"
                },
                {
                    name: "X-Force",
                    value: "X-Force"
                },
                {
                    name: "X-Men",
                    value: "X-Men"
                },
                {
                    name: "X-Men (Original)",
                    value: "X-Men (Original)"
                },
                {
                    name: "Young avengers",
                    value: "Young avengers"
                },
            ]

        case "DC Comics":
            return [
                {
                    name: "Aquaman Family",
                    value: "Aquaman Family"
                },
                {
                    name: 'Assorted Batman rogues',
                    value: 'Assorted Batman rogues',
                },
                {
                    name: "Batman Family",
                    value: "Batman Family",
                },
                {
                    name: "Crimebusters / Watchmen",
                    value: "Crimebusters",
                },
                {
                    name: "Crime Syndicate",
                    value: "Crime Syndicate",
                },
                {
                    name: "Flash Family / Speedsters",
                    value: "Flash Family",
                },
                {
                    name: "Green Lantern Corps",
                    value: "Green Lantern Corps",
                },
                {
                    name: "Injustice League",
                    value: "Injustice League",
                },
                {
                    name: "Justice League",
                    value: "Justice League",
                },
                {
                    name: "Justice League (Original)",
                    value: "Justice League (Original)",
                },
                {
                    name: "Justice League Dark",
                    value: "Justice League Dark",
                },
                {
                    name: "Justice Society of America",
                    value: "Justice Society of America",
                },
                {
                    name: "Lanterns Corps (All)",
                    value: "Lantern Corps",
                },
                {
                    name: "The Terrifics",
                    value: "The Terrifics",
                },
                {
                    name: "Legion of Super-Heroes",
                    value: "Legion of Super-Heroes",
                },
                {
                    name: "Marvel Family",
                    value: "Marvel Family",
                },
                {
                    name: "New Guardians Corps",
                    value: "New Guardians",
                },
                {
                    name: "Outsiders",
                    value: "Outsiders",
                },
                {
                    name: "Secret Society of Super Villains",
                    value: "Secret Society of Super Villains",
                },
                {
                    name: "Suicide Squad",
                    value: "Suicide Squad",
                },
                {
                    name: "Superman Family / Kriptonian",
                    value: "Superman Family",
                },
                {
                    name: "Teen Titans",
                    value: "Teen Titans",
                }
            ]

        case "Dark Horse Comics":
            return [
                {
                    name: "Incredible Family",
                    value: "Incredible Family"
                },
            ]

        case "IDW Publishing":
            return [
                {
                    name: "Teenage Mutant Ninja Turtles",
                    value: "Teenage Mutant Ninja Turtles"
                },
            ]

        case "Shueisha":
            return [
                {
                    name: "One Piece",
                    value: "One Piece"
                },
                {
                    name: "Black Clover",
                    value: "Black Clover"
                },
                {
                    name: "Dragon Ball",
                    value: "Dragon Ball"
                },
                {
                    name: "Demon Slayer",
                    value: "Demon Slayer"
                },
                {
                    name: "Jujutsu Kaisen",
                    value: "Jujutsu Kaisen"
                },
                {
                    name: "Bleach",
                    value: "Bleach"
                },
                {
                    name: "Attack on Titan",
                    value: "Attack on Titan"
                },
                {
                    name: "Naruto Shippuden",
                    value: "Naruto Shippuden"
                },
                {
                    name: "One Punch Man",
                    value: "One Punch Man"
                },
                {
                    name: "Chainsaw Man",
                    value: "Chainsaw Man"
                },
                {
                    name: "Metal Alchemist",
                    value: "Metal Alchemist"
                },
            ]

        case "Warner Bros":
            return [
                {
                    name: "Ben 10",
                    value: "Ben 10"
                }
            ]

        default:
            return []
    }
}

export function organizedComicsProperty(comics: string[] | null | undefined, publisher: string): string[] {
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
                    "https://static.dc.com/dc/files/default_images/BMTMNT_tp_58cb173a8b8fd6.32122101.jpg",
                    "https://m.media-amazon.com/images/I/61O+P3mEyZL.jpg"
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
/* teams */

export const ALLRACES = [
    { value: "All", name: "All races" },
    { value: "Human", name: "Human" },
    { value: "Metahuman", name: "Metahuman" },
    { value: "Alien", name: "Alien" },
    { value: "Kryptonian", name: "Kryptonian" },
    { value: "Symbiote", name: "Symbiote" },
    { value: "Mutant", name: "Mutant" },
    { value: "Atlantean", name: "Atlantean" },
    { value: "Demon", name: "Demon" },
    { value: "Android", name: "Android" },
    { value: "Cyborg", name: "Cyborg" },
    { value: "Animal", name: "Animal" },
    { value: "Zombie", name: "Zombie" },
    { value: "Amazon", name: "Amazon" },
    { value: "Eternal", name: "Eternal" },
    { value: "Inhuman", name: "Inhuman" },
    { value: "Asgardian", name: "Asgardian" },
    { value: "Cosmic Entity", name: "Cosmic Entity" },
] 

export const ALLALIGMENTS = [
    {
        value: "All",
        name: "All aligments"
    },
    {
        value: "good",
        name: "Hero"
    },
    {
        value: "bad",
        name: "Villain"
    },
    {
        value: "neutral",
        name: "Anti-hero"
    },
]

export const ALLGENDERS = [
    {
        value: "All",
        name: "Both genders"
    },
    {
        value: "Female",
        name: "Female"
    },
    {
        value: "Male",
        name: "Male"
    },
]

export const ALLUNIVERSE = [
    { value: "All", name: "All universes" },
    { value: "Marvel Comics", name: "Marvel" },
    { value: "DC Comics", name: "DC" },
    { value: "Shueisha", name: "Shueisha" },
    { value: "Dark Horse Comics", name: "Dark Horse Comics" },
    { value: "George Lucas", name: "George Lucas" },
    { value: "IDW Publishing", name: "IDW Publishing" },
    { value: "Image Comics", name: "Image Comics" },
    { value: "Warner Bros", name: "Warner Bros" },
    // { value: "Angel", name: "Angel" },
    { value: "NBC - Heroes", name: "NBC - Heroes" },
    { value: "Tempest", name: "Tempest" },
    { value: "SyFy", name: "SyFy" },
    { value: "ABC Studios", name: "ABC Studios" },
    { value: "Icon Comics", name: "Icon Comics" },
    { value: "Universal Studios", name: "Universal Studios" },
    { value: "Gemini V", name: "Gemini V" },
    { value: "Star Trek", name: "Star Trek" },
    // { value: "Goliath", name: "Goliath" },
    // { value: "Deadpool", name: "Deadpool" },
    { value: "Wildstorm", name: "Wildstorm" },
    { value: "South Park", name: "South Park" },
    { value: "Sony Pictures", name: "Sony Pictures" },
    { value: "Vindicator II", name: "Vindicator II" },
    { value: "Image Comics", name: "Image Comics" },
    { value: "Titan Books", name: "Titan Books" },
    { value: "J. K. Rowling", name: "J. K. Rowling" },
    { value: "Microsoft", name: "Microsoft" },
    // { value: "She-Thing", name: "She-Thing" },
    { value: "Rebellion", name: "Rebellion" },
    { value: "J. R. R. Tolkien", name: "J. R. R. Tolkien" },
    { value: 'Carolco Pictures', name: 'Carolco Pictures'},
    { value: 'ARK corporation', name: 'ARK corporation'},
    { value: 'Paramount Pictures', name: 'Paramount Pictures'},
    { value: "-", name: "-" },
    // { value: null, name: "null" },
    { value: 'Real people', name: "Real people" },

    // 
]

export const randomImagesArray = [
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