import { HeroSelectorProps, heroSelectorLookUp } from '../types';
import Hero from './Hero';

const heroSelectorLookUp: heroSelectorLookUp = {
    "Marvel Comics WithOutImage": <Hero
        imgs={["https://i.chzbgr.com/full/8448259840/h26325623/superheroes-the-avengers-marvel-spider-man-8-bit-gif-art"]}
        title="MARVEL COMICS"
        description="Look for all the characters possible ever creaded"
    />,

    "DC Comics WithOutImage": <Hero
        imgs={["https://i.gifer.com/XtUG.gif"]}
        title="DC COMICS"
        description="Look for all the characters possible ever creaded"
    />,

    "George Lucas WithOutImage": <Hero
        imgs={["https://mir-s3-cdn-cf.behance.net/project_modules/max_632/10c76f30299121.561ce8fba1cb0.gif"]}
        title="GEORGE LUCAS"
        description="Look for all the characters possible ever creaded"
    />,

    "Shueisha WithOutImage": <Hero
        imgs={["https://wallpapercave.com/wp/wp5104275.jpg", "https://i.pinimg.com/736x/f7/23/10/f72310b21418359a9c7e3922fbafb4a5.jpg", "https://e1.pxfuel.com/desktop-wallpaper/479/745/desktop-wallpaper-manga-iphone-posted-by-ethan-sellers-shonen-jump-iphone.jpg", "https://e1.pxfuel.com/desktop-wallpaper/872/47/desktop-wallpaper-shonen-jump-vs-anime-all-stars-by-supersaiyancrash-manga-anime-digital-4961x3508-for-your-mobile-tablet-shonen-jump-iphone.jpg"]}
        title="ANIME - MANGA - SHUEISHA"
        description="Look for all the anime | manga characters possible ever creaded"
    />,

    "All ": < Hero
        imgs={["https://media.tenor.com/TY1HfJK5qQYAAAAC/galaxy-pixel-art.gif"]}
        title="Characters App"
        description="Look for all the characters possible ever creaded"
    />
}

function HeroSelector({ selectedOne, heroSection }: HeroSelectorProps) {
    const selectedHero = heroSelectorLookUp[selectedOne]

    if (selectedHero) {
        return (
            <div>
                {selectedHero}
            </div>
        )
    }

    return (
        <Hero
            imgs={heroSection.imgs}
            title={heroSection.title}
            description={heroSection.description}
        />
    )
}

export default HeroSelector