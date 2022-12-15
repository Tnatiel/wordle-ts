import { useContext } from "react"
import { WordleContext } from "../providers/wordle-context"
import { InputRow } from "./InputRow"


export function InputBoard() {

    const inputBoardData = useContext(WordleContext)
    
    document.addEventListener('keypress',inputBoardData.handleKeyPress)

    return (
        <div className="user-input-sec">
            {/* <!-- ROW 1 --> */}
            <InputRow inputsData={inputBoardData.rowOneInputs} />
            {/* <!-- ROW 2 --> */}
            <InputRow inputsData={inputBoardData.rowTwoInputs} />
            {/* <!-- ROW 3 --> */}
            <InputRow inputsData={inputBoardData.rowThreeInputs} />
            {/* <!-- ROW 4 --> */}
            <InputRow inputsData={inputBoardData.rowFourInputs} />
            {/* <!-- ROW 5 --> */}
            <InputRow inputsData={inputBoardData.rowFiveInputs} />
            {/* <!-- ROW 6 --> */}
            <InputRow inputsData={inputBoardData.rowSixInputs} />
        </div>
    )
}