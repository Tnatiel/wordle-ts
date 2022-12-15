import { useWordle } from "../hooks/useWordle"
import { InputRow } from "./InputRow"


export function InputBoard() {

    const {rowOneInputs, rowTwoInputs, rowThreeInputs, rowFourInputs, rowFiveInputs,  rowSixInputs, totalInputs, id, inputs, setId, addLetter, removeLetter, handleKeyPress} = useWordle()

    document.addEventListener('keypress', handleKeyPress)

    return (
        <div className="user-input-sec">
            {/* <!-- ROW 1 --> */}
            <InputRow inputsData={rowOneInputs} />
            {/* <!-- ROW 2 --> */}
            <InputRow inputsData={rowTwoInputs} />
            {/* <!-- ROW 3 --> */}
            <InputRow inputsData={rowThreeInputs} />
            {/* <!-- ROW 4 --> */}
            <InputRow inputsData={rowFourInputs} />
            {/* <!-- ROW 5 --> */}
            <InputRow inputsData={rowFiveInputs} />
            {/* <!-- ROW 6 --> */}
            <InputRow inputsData={rowSixInputs} />
        </div>
    )
}