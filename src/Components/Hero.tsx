import { useState, useEffect } from 'react';
import { motion } from "framer-motion"

type HeroProps = {
    imgs: string[];
    title: string;
    description: string;
}

type HeroSelectorProps = {
    selectedOne: string
    heroSection: {
        imgs: string[];
        title: string;
        description: string;
    }
}

type heroSelectorLookUp = {
    [key: string]: JSX.Element
}

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
    // console.log(selectedOne)

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

function Hero({ imgs, title, description }: HeroProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        if (imgs.length > 1) {
            const interval = setInterval(() => {
                setIsAnimating(false);
                setTimeout(() => {
                    setIsAnimating(true);
                    setCurrentImageIndex((currentImageIndex + 1) % imgs.length);
                }, 1000);
            }, 7000);

            return () => clearInterval(interval);
        }
    }, [currentImageIndex, imgs.length]);

    return (
        <div>
            {/* ${isAnimating ? 'animate-ping' : ''} */} {/* bg-fixed bg-cover bg-no-repeat bg-center */}
            <motion.div
                animate={{ opacity: isAnimating ? 1 : 0 }}
                className={`
                    hero min-h-screen transition-opacity duration-500 ease-in-out
                    parent group relative 
                `}
                style={{ backgroundAttachment: "fixed", backgroundImage: `url("${imgs[currentImageIndex]}")` }}
            >
                <div
                    className={`
                        hero-overlay bg-opacity-80
                        child-1 opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 z-10
                    `}>
                </div>

                <div
                    className={`
                        hero-content text-center text-neutral-content
                        child-2 opacity-0 group-hover:opacity-100 transition-opacity z-20
                    `}>
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        {description.toLowerCase() !== title.toLowerCase() && <p className="mb-5">{description}</p>}
                        <label htmlFor="my-modal-membersList" className="btn btn-primary">See members</label>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroSelector