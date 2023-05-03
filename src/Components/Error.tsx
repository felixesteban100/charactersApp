
function Error() {
    return (
        <div className='w-[70%] mx-auto'>
            <div className="alert alert-error shadow-lg absolute bottom-10 w-[70%] mx-auto animate-bounce">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Opps.... something happend please try again.</span>
                </div>
            </div>
        </div>
    )
}

export default Error