type StatStringProps = {
    statName: string
    statValue: string
    icon: string
    dataToolTip?: string
}

export default function StatString({ statName, statValue, icon, dataToolTip }: StatStringProps) {
    return (
        <div className="stat">
            <div className="stat-figure text-2xl md:text-5xl lg:text-5xl">
                <p>{icon}</p>
            </div>
            <div className="stat-title">{statName}</div>
            <div className='flex tooltip' data-tip={dataToolTip}>
                <span className="stat-value whitespace-pre text-sm md:text-xl lg:text-xl">{dataToolTip ? `${statValue.slice(0, 10)}...` : `${statValue}`}</span>
            </div>
        </div>
    )
}