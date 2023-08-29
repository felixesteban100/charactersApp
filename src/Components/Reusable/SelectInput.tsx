import { SelectInputProps } from "../../types";

export default function SelectInput({ value, options, onChangeFunction, forWhat, dataTest }: SelectInputProps) {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Pick the {forWhat}</span>
            </label>
            <select
                value={value}
                onChange={onChangeFunction}
                className="select select-bordered"
                data-test={dataTest}
            >
                {
                    options.map((current, index) => (
                        <option key={index} value={typeof current.value === "string" ? current.value : "null"}>{current.name}</option>
                    ))
                }
            </select>
        </div>
    )
}