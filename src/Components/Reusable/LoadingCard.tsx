
function LoadingCard() {
    return (
        <div>
            {/* hover:shadow-current hover:shadow-lg hover:scale-110 */}
            <div className='w-full h-[20rem] md:h-[20rem] xl:h-[22rem] bg-base-100  group/item transition-all duration-700'>
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