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
        return ids.map( id => {
            return {inputId: id,
                 focused: false, 
                 letter: '', 
                 letterCorrect: false, 
                 letterCorrectPosition: false
            }})  
        }

    const rowOneInputs = createInputs(['0', '1', '2', '3', '4']) 
    const rowTwoInputs = createInputs(['5', '6', '7', '8', '9']) 
    const rowThreeInputs = createInputs(['10', '11', '12', '13', '14'])
    const rowFourInputs = createInputs(['15', '16', '17', '18', '19']) 
    const rowFiveInputs = createInputs(['20', '21', '22', '23', '24'])
    const rowSixInputs = createInputs(['25', '26', '27', '28', '29']) 
    const totalInputs = [...rowOneInputs, ...rowTwoInputs, ...rowThreeInputs, ...rowFourInputs, ...rowFiveInputs, ...rowSixInputs]
    
    const appInit = () => {
        totalInputs[0].focused = true;
        // setInputs(totalInputs);
        // setId(0)
      };
    
      const addLetter = (letter: string, currentId: number) => {
        const currentInput = { ...totalInputs[currentId], letter, focused: false };
        const nextInput = { ...totalInputs[currentId + 1], focused: true };
        const updatedInputs = [...totalInputs];
        updatedInputs[currentId] = currentInput;
        updatedInputs[currentId + 1] = nextInput;
        // setInputs(updatedInputs);
        // Update the id variable to use the nextId variable instead of the currentId variable
        const nextId = currentId + 1
        // setId(nextId);
        return { updatedInputs, nextId};
      };
    
      const removeLetter = () => {
        // implementation here
      };
    
      function handleKeyPress(event: KeyboardEvent) {
        if (event.code >= 'KeyA' || event.code <= 'KeyZ') {
          const { updatedInputs, nextId } = addLetter(event.code.slice(-1), id);
          console.log('input:', updatedInputs, 'id:', nextId)
          setInputs(updatedInputs);
          setId(nextId);
          console.log('input:', updatedInputs, 'id:', nextId)
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
    handleKeyPress,
    appInit

  }
}