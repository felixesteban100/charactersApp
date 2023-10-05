type StatCollapseProps = {
    icon: string
    content: JSX.Element | JSX.Element[]
    title: string
    dataTest?: string
}

export default function StatCollapse({ icon, title, content, dataTest }: StatCollapseProps) {
    return (
        <div className="flex flex-row-reverse justify-center items-center py-3 gap-1">
            <div className="stat-figure pr-5">
                <p className='text-2xl md:text-5xl lg:text-2xl'>{icon}</p>
            </div>

            <div
                tabIndex={0}
                // className=" collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
                className=" collapse collapse-open bg-base-100 rounded-box px-5"
                data-test={dataTest}
            >
                <div className="stat-title text-lg">
                    {title}
                </div>
                <div className="collapse-content font-bold text-2xl p-0 py-1">
                    {content}
                </div>
            </div>
        </div>
    )
}