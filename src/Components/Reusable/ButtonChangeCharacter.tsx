type ButtonChangeCharacterProps = {
    // htmlFor: string;
    classNameSended: string;
    functionSended: () => void;
    forWhat: string;
    dataTest: string;
    loadingOrFetching?: boolean
}

export default function ButtonChangeCharacter({ classNameSended, functionSended, forWhat, dataTest, loadingOrFetching }: ButtonChangeCharacterProps) {
    return (
        <div /* label */
            key={forWhat}
            // htmlFor={htmlFor}
            className={`uppercase btn ${classNameSended} ${loadingOrFetching ? "btn-disabled" : ''}`}
            onClick={functionSended}
            data-test={dataTest}
        >
            {loadingOrFetching ? <div className="flex justify-center items-center gap-2"><span className="loading loading-spinner loading-md"></span></div> : forWhat}
        </div> /* </label> */
    )
}