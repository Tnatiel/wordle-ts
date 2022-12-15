import { InputRow } from "./InputRow"

export function InputBoard() {

    function createInputs(ids: string[]) {
        return ids.map( id => id === '0' ? 
        ({inputId: id, focus: true, letter: '', letterCorrect: false, letterCorrectPosition: false}): 
        ({inputId: id, focus: false, letter: '', letterCorrect: false, letterCorrectPosition: false}))
    }

    const rowOneInputs = createInputs(['0', '1', '2', '3', '4']) 
    const rowTwoInputs = createInputs(['5', '6', '7', '8', '9']) 
    const rowThreeInputs = createInputs(['10', '11', '12', '13', '14'])
    const rowFourInputs = createInputs(['15', '16', '17', '18', '19']) 
    const rowFiveInputs = createInputs(['20', '21', '22', '23', '24'])
    const rowSixInputs = createInputs(['25', '26', '27', '28', '29']) 


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