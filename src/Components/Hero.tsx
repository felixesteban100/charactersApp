import { useState, useEffect } from 'react';
import { motion } from "framer-motion"

type HeroProps = {
    imgs: string[];
    title: string;
    description: string;
}


function Hero({ imgs, title, description }: HeroProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        if(imgs.length > 1){
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

export default Hero