import { InputRow } from "./InputRow"
import {FC} from 'react'


interface inputBoxType {
    
    inputId: string;
    focus: boolean;
    letter: string;
    letterCorrect: boolean;
    letterCorrectPosition: boolean;
    
}
interface inputProps {
    row1: inputBoxType[],
    row2: inputBoxType[],
    row3: inputBoxType[],
    row4: inputBoxType[],
    row5: inputBoxType[],
    row6: inputBoxType[]
    }

export const InputBoard: FC<inputProps> = ({row1, row2, row3, row4, row5, row6}) => {


    return (
        <div className="user-input-sec">
            {/* <!-- ROW 1 --> */}
            <InputRow inputsData={row1} />
            {/* <!-- ROW 2 --> */}
            <InputRow inputsData={row2} />
            {/* <!-- ROW 3 --> */}
            <InputRow inputsData={row3} />
            {/* <!-- ROW 4 --> */}
            <InputRow inputsData={row4} />
            {/* <!-- ROW 5 --> */}
            <InputRow inputsData={row5} />
            {/* <!-- ROW 6 --> */}
            <InputRow inputsData={row6} />
        </div>
    )
}