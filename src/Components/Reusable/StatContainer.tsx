
export default function StatContainer({ children }: { children: JSX.Element[] }) {
    return (
        <div className="stats stats-vertical shadow self-center w-full h-full">
            {children}
        </div>
    )
}
