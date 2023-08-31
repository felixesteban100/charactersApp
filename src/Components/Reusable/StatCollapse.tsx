type StatCollapseProps = {
    icon: string
    content: JSX.Element | JSX.Element[]
    title: string
}

export default function StatCollapse({ icon, title, content }: StatCollapseProps) {
    return (
        <div className="flex flex-row-reverse justify-center items-center p-5 gap-1">
            <div className="stat-figure">
                <p className='text-2xl md:text-5xl lg:text-2xl'>{icon}</p>
            </div>

            <div
                tabIndex={0}
                // className=" collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                className=" collapse collapse-arrow bg-base-100 rounded-box"
            >
                <div className="collapse-title text-xl font-medium">
                    {title}...
                </div>
                <div className="collapse-content">
                    {content}
                </div>
            </div>
        </div>
    )
}