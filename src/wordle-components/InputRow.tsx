// import { UserInputStyled } from '../../src/styled-components/userInputStyled';
import { InputBox } from './InputBox';

interface inputBox {
    inputId: string, 
    focused: boolean, 
    letter: string,
    letterCorrect: boolean,
    letterCorrectPosition: boolean,
}

export function InputRow({inputsData}: {inputsData: inputBox[]}) {


    return (
        <div className="input-row">
            
            {inputsData.map( inputData =>
            
            (
                <InputBox
                    boxId={inputData.inputId}
                    key={inputData.inputId}
                    focused={inputData.focused}
                    letter={inputData.letter}
                    correctPosition={false}
                    correct={false}
                />
            ))}
                
            

        </div>
    )
}

