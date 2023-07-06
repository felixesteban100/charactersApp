import React from 'react'

function LoadingCard() {
    return (
        <div>
            {/* <div className="w-full h-[20rem] md:h-[25rem] lg:h-[35rem] bg-base-100"> */}
            {/* <div className="w-full h-[20rem] md:h-[25rem] bg-base-100"> */}
            <div className='w-full h-[20rem] md:h-[20rem] xl:h-[22rem] bg-base-100 shadow-current shadow-2xl hover:scale-110 group/item'>
                <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 mx-5 my-5">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded mx-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingCard