
import { useState } from "react"

export function useWordle(): any {

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
    const totalInputs = [rowOneInputs, rowTwoInputs, rowThreeInputs, rowFourInputs, rowFiveInputs, rowSixInputs]

    const currentFocused = () => {
      const currentInput = totalInputs[currentRow].filter( input => input.inputId === `${currentRow}-${currentColumn}`)
      return currentInput[0]
    }

    const getNextInput = () => {
      if (currentColumn > 4) {
        setCurrentRow( prev => prev + 1)
        setCurrentColumn(0)
        return `${currentRow}-${currentColumn}`
      }
      if (currentRow > 5) {
        return 'Game Over'
      }
      setCurrentColumn( prev => prev + 1)
      return `${currentRow}-${currentColumn}`
    }


    const addLetter = (letter: string) => {
      const currentInput = {...currentFocused(), letter, focused: false}
      const updatedInputs = totalInputs[currentRow].map( input => {
        if (input.inputId === currentInput.inputId) {
          return currentInput
        } else { return input}
      })
      const nextInput = updatedInputs.filter(input => input.inputId === `${currentRow}-${currentColumn + 1}`)[0]
      nextInput.focused = true
      // console.log(nextInput)
      return updatedInputs
    };
    
    const removeLetter = () => {

    };
    
    function handleKeyPress(event: KeyboardEvent) {
      if (/^[A-Za-z]$/.test(event.key)) {
        const inputs = addLetter(event.key.toUpperCase())
        setInputs(inputs)
        console.log('render')
      }
    }

    return {
      rowOneInputs,
      rowTwoInputs,
      rowThreeInputs,
      rowFourInputs,
      rowFiveInputs, 
      rowSixInputs,
      totalInputs,
      inputs,
      setInputs,
      addLetter,
      removeLetter,
      handleKeyPress,
    }
  }


