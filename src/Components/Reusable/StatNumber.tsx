type StatNumberProps = {
    statName: string
    statValue: number
    icon: string

}

export default function StatNumber({ statName, statValue, icon }: StatNumberProps) {
    return (
        <div className="stat">
            <div className="stat-figure text-primary">
                <p className='text-2xl md:text-5xl lg:text-5xl'>{icon}</p>
            </div>
            <div className="stat-title">{statName}</div>
            <div className="stat-value text-2xl md:text-5xl lg:text-5xl">{statValue}</div>

        </div>
    )
}