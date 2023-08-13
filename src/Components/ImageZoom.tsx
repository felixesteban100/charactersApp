import { ImageZoomProps } from "../types";


export default function ImageZoom({ image, character }: ImageZoomProps) {

    return (
        <div className='w-full h-auto'>
            <input type="checkbox" id={`my-modal-comic`} className="modal-toggle" />
            <label htmlFor={`my-modal-comic`} className="modal">
                <label className="relative" htmlFor="">
                    <div className="rounded-md bg-base-100 w-[80vw] max-w-[30rem] h-[60vh] md:h-[80vh] lg:h-[80vh] flex justify-center p-5">
                        <img
                            className="absolute blur-lg animate-pulse w-full h-full -mt-5"
                            src={image}
                            alt={`Comic of ${character}`}
                            loading="lazy"
                        />
                        <div className='relative overflow-visible'>
                            <img
                                className=" top-0 left-0 w-full h-full object-cover"
                                src={image}
                                alt={`Comic of ${character}`}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </label>
            </label>
        </div>
    )
}