
export default function StatContainer({ children }: { children: JSX.Element[] | JSX.Element }) {
    return (
        <div className="xl:h-[75vh] xl:overflow-y-scroll stats stats-vertical shadow self-center w-full h-full">
            {children}
        </div>
    )
}
