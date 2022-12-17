import { useContext, useEffect } from "react"
import { useState } from "react"
import { WordleContext } from "../providers/wordle-context"
import { InputRow } from "./InputRow"

interface inputBox {
    inputId: string, 
    focused: boolean, 
    letter: string,
    letterCorrect: boolean,
    letterCorrectPosition: boolean,
}

interface WordleApi {
    rowOneInputs: inputBox[];
    rowTwoInputs: inputBox[];
    rowThreeInputs: inputBox[];
    rowFourInputs: inputBox[];
    rowFiveInputs: inputBox[];
    rowSixInputs: inputBox[];
    addLetter: (letter: string, currentId: number) => void;
    removeLetter: () => void;
    handleKeyPress: (event: KeyboardEvent) => void;
  }

export function InputBoard() {
    // const = useContext(WordleContext)

    type Input = {
        inputId: string;
        focused: boolean;
        letter: string;
        letterCorrect: boolean;
        letterCorrectPosition: boolean;
      };

    const [inputs, setInputs] = useState<Input[]>([])
    const [currentColumn, setCurrentColumn] = useState(0)
    const [currentRow, setCurrentRow] = useState(0)

    function createInputs(ids: string[]) {
        return ids.map( id =>
           {
            if (id === '0-0') {
              return {inputId: id,
                   focused: true, 
                   letter: '', 
                   letterCorrect: false, 
                   letterCorrectPosition: false
              }
            } else {
                return {inputId: id,
                  focused: false, 
                  letter: '', 
                  letterCorrect: false, 
                  letterCorrectPosition: false
              }
            }
          })  
        }

    const rowOneInputs = createInputs(['0-0', '0-1', '0-2', '0-3', '0-4']) 
    const rowTwoInputs = createInputs(['1-0', '1-1', '1-2', '1-3', '1-4']) 
    const rowThreeInputs = createInputs(['2-0', '2-1', '2-2', '2-3', '2-4'])
    const rowFourInputs = createInputs(['3-0', '3-1', '3-2', '3-3', '3-4']) 
    const rowFiveInputs = createInputs(['4-0', '4-1', '4-2', '4-3', '4-4'])
    const rowSixInputs = createInputs(['5-0', '5-1', '5-2', '5-3', '5-4']) 
    const totalInputs = [...rowOneInputs, ...rowTwoInputs, ...rowThreeInputs, ...rowFourInputs, ...rowFiveInputs, ...rowSixInputs]
    const currentFocused = () => {
        const currentInput = totalInputs.filter( input => input.inputId === `${currentRow}-${currentColumn}`)
        return currentInput[0]
      }
  
    const addLetter = (letter: string) => {
        
        const currentInput = {...currentFocused(), letter, focused: false}
        const updatedInputs = totalInputs.map( input => {
          if (input.inputId === currentInput.inputId) {
            return currentInput
          } else { return input}
        })
        const nextInput = updatedInputs.filter(input => input.inputId === `${currentRow}-${currentColumn + 1}`)[0]
        nextInput.focused = true
        // console.log(nextInput)
        return updatedInputs
      };

      function handleKeyPress(event: KeyboardEvent) {
        if (/^[A-Za-z]$/.test(event.key)) {
          const newInputs = addLetter(event.key.toUpperCase())
          setInputs(newInputs)
          console.log('render')
        }
      }
    
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