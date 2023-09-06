type StatStringProps = {
    statName: string
    statValue: string
    icon: string
    dataToolTip?: string
    dataTest?: string
}

export default function StatString({ statName, statValue, icon, dataToolTip, dataTest }: StatStringProps) {
    return (
        <div className="stat">
            <div className="stat-figure text-2xl md:text-5xl lg:text-5xl">
                <p>{icon}</p>
            </div>
            <div className="stat-title">{statName}</div>
            <div className='flex tooltip' data-tip={dataToolTip}>
                <span data-test={dataTest} className="stat-value whitespace-pre text-xl md:text-2xl lg:text-2xl">{dataToolTip ? `${statValue.slice(0, 10)}...` : `${statValue.charAt(0).toUpperCase()}${statValue.slice(1, statValue.length)}`}</span>
            </div>
        </div>
    )
}