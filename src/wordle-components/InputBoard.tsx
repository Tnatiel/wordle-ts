import { InputRow } from "./InputRow"
import {FC} from 'react'


interface inputBoxType {
    
    inputId: string;
    focused: boolean;
    
}
interface inputProps {
    row1: inputBoxType[],
    row2: inputBoxType[],
    row3: inputBoxType[],
    row4: inputBoxType[],
    row5: inputBoxType[],
    row6: inputBoxType[]
    }

export const InputBoard = () => {

    
    function createInputs(ids: string[]) {
        return ids.map( id => id === '0-0' ? ({inputId: id, focused: true}): ({inputId: id, focused: false}))
    }
    
    const rowOneInputs = createInputs(['0-0', '0-1', '0-2', '0-3', '0-4']) 
    const rowTwoInputs = createInputs(['1-0', '1-1', '1-2', '1-3', '1-4']) 
    const rowThreeInputs = createInputs(['2-0', '2-1', '2-2', '2-3', '2-4'])
    const rowFourInputs = createInputs(['3-0', '3-1', '3-2', '3-3', '3-4']) 
    const rowFiveInputs = createInputs(['4-0', '4-1', '4-2', '4-3', '4-4'])
    const rowSixInputs = createInputs(['5-0', '5-1', '5-2', '5-3', '5-4']) 

    

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