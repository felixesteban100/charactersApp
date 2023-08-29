import { ButtonChangeCharacterProps } from "../../types";

export default function ButtonChangeCharacter({ classNameSended, functionSended, forWhat, dataTest }: ButtonChangeCharacterProps) {
    return (
        <div /* label */
            key={forWhat}
            // htmlFor={htmlFor}
            className={`btn ${classNameSended}`}
            onClick={functionSended}
            data-test={dataTest}
        >
            {forWhat}
        </div> /* </label> */
    )
}