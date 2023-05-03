import { useState, useEffect } from 'react'

type SuccessChangedpProps = {
    heroSection: {imgs: string[], title: string, description: string}
}

function SuccessChanged({ heroSection }: SuccessChangedpProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 2000);
    }, [heroSection]);

    return (
        <div className='sticky bottom-14 z-40'>
            {
                show === true ?
                <div className="alert alert-success shadow-lg bottom-10 w-[50%] mx-auto animate-bounce">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Characters obtained</span>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default SuccessChanged