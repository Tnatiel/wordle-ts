import { useState } from "react"


export function useWordle() {
    type Input = {
        inputId: string;
        focused: boolean;
        letter: string;
        letterCorrect: boolean;
        letterCorrectPosition: boolean;
      };
    const [inputs, setInputs] = useState<Input[]>([])
    const [id, setId] = useState(0)

    function createInputs(ids: string[]) {
        return ids.map( id => id === '0' ? 
        ({inputId: id, focused: true, letter: '', letterCorrect: false, letterCorrectPosition: false}): 
        ({inputId: id, focused: false, letter: '', letterCorrect: false, letterCorrectPosition: false}))
    }

    const rowOneInputs = createInputs(['0', '1', '2', '3', '4']) 
    const rowTwoInputs = createInputs(['5', '6', '7', '8', '9']) 
    const rowThreeInputs = createInputs(['10', '11', '12', '13', '14'])
    const rowFourInputs = createInputs(['15', '16', '17', '18', '19']) 
    const rowFiveInputs = createInputs(['20', '21', '22', '23', '24'])
    const rowSixInputs = createInputs(['25', '26', '27', '28', '29']) 


    const totalInputs = [...rowOneInputs, ...rowTwoInputs, ...rowThreeInputs, ...rowFourInputs, ...rowFiveInputs, ...rowSixInputs]

    const addLetter = (letter: string) => {
        const currentInput = {...totalInputs[id], letter, focused: false}
        const nextInput = {...totalInputs[id + 1] ,focused: true}
        const updatedInputs = [...totalInputs]
        // const updatedInputs = totalInputs.map( input => {
        //     if (input.inputId === id.toString()) {
        //         return currentInput
        //     } else if (input.inputId === (id + 1).toString()) {
        //         return nextInput
        //     } else {return input}
        // })
        updatedInputs[id] = currentInput
        updatedInputs[id + 1] = nextInput
        return updatedInputs
    }
    const removeLetter = () => {

    }
    function handleKeyPress(event: KeyboardEvent) {
        if (event.code >= 'KeyA' || event.code <= 'KeyZ') {
            const inputs = addLetter(event.code.slice(-1))
            console.log(inputs)
            setInputs(inputs)
        } else if (event.code === 'Enter') {
        } else if (event.code === 'del') {
        removeLetter()
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
    id,
    inputs,
    setId,
    addLetter,
    removeLetter,
    handleKeyPress

  }
}