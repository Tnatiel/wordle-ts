// import { UserInputStyled } from '../../src/styled-components/userInputStyled';
import { InputBox } from './InputBox';

interface inputBox {
    inputId: string, 
    focus: boolean, 
    letter: string,
    letterCorrect: boolean,
    letterCorrectPosition: boolean,
}

export function InputRow({inputsData}: {inputsData: inputBox[]}) {


    return (
        <div className="input-row">
            
            {inputsData.map( inputData => (
                <InputBox
                    boxId={inputData.inputId}
                    key={inputData.inputId}
                    focus={inputData.focus}
                    letter={inputData.letter}
                    correctPosition={false}
                    correct={false}
                />
            ))}
                
            
            {/* <UserInputStyled maxLength={'1'} id="0-0" className="ur-input"></UserInputStyled>
            <UserInputStyled maxLength={'1'} id="0-1" className="ur-input"></UserInputStyled>
            <UserInputStyled maxLength={'1'} id="0-2" className="ur-input"></UserInputStyled>
            <UserInputStyled maxLength={'1'} id="0-3" className="ur-input"></UserInputStyled>
            <UserInputStyled maxLength={'1'} id="0-4" className="ur-input"></UserInputStyled>               */}
        </div>
    )
}

// please explain like i'm with examples and comment how to work with react and type script