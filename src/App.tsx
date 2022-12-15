
import { useWordle } from './hooks/useWordle';
import { createContext, useContext } from "react";
import { WordleContext } from './providers/wordle-context';
import './styles/App.scss';
import { Header } from './wordle-components/Header';
import { InputBoard } from './wordle-components/InputBoard';
import { Keyboard } from './wordle-components/Keyboard';
function App() {
  const wordleApi = useWordle()
  // const WordleContext = useContext(wordleApi)

  return (
    <main>
        {/* <!-- PAGE HEADER --> */}
        <Header />
        <WordleContext.Provider value={wordleApi}>
          {/* <!-- USER INPUTS --> */}
          <InputBoard />
          {/* <!-- KEYBOARD --> */}
          <Keyboard />
        </WordleContext.Provider>
    </main>
  );
}

export default App;

// wordle-context.tsx


// import { createContext } from "react";
// interface inputBox {
//     inputId: string, 
//     focused: boolean, 
//     letter: string,
//     letterCorrect: boolean,
//     letterCorrectPosition: boolean,
// }


// export const WordleContext = createContext<inputBox[]>([{
//     inputId: '', 
//     focused: false, 
//     letter: '',
//     letterCorrect: false,
//     letterCorrectPosition: false,
// }])

// useWordle.tsx:
// import { useState } from "react"


// export function useWordle() {
//     type Input = {
//         inputId: string;
//         focused: boolean;
//         letter: string;
//         letterCorrect: boolean;
//         letterCorrectPosition: boolean;
//       };
//     const [inputs, setInputs] = useState<Input[]>([])
//     const [id, setId] = useState(0)

//     function createInputs(ids: string[]) {
//         return ids.map( id => id === '0' ? 
//         ({inputId: id, focused: true, letter: '', letterCorrect: false, letterCorrectPosition: false}): 
//         ({inputId: id, focused: false, letter: '', letterCorrect: false, letterCorrectPosition: false}))
//     }

//     const rowOneInputs = createInputs(['0', '1', '2', '3', '4']) 
//     const rowTwoInputs = createInputs(['5', '6', '7', '8', '9']) 
//     const rowThreeInputs = createInputs(['10', '11', '12', '13', '14'])
//     const rowFourInputs = createInputs(['15', '16', '17', '18', '19']) 
//     const rowFiveInputs = createInputs(['20', '21', '22', '23', '24'])
//     const rowSixInputs = createInputs(['25', '26', '27', '28', '29']) 


//     const totalInputs = [...rowOneInputs, ...rowTwoInputs, ...rowThreeInputs, ...rowFourInputs, ...rowFiveInputs, ...rowSixInputs]

//     const addLetter = (letter: string) => {
//         const currentInput = {...totalInputs[id], letter, focused: false}
//         const nextInput = {...totalInputs[id + 1] ,focused: true}
//         const updatedInputs = [...totalInputs]
//         updatedInputs[id] = currentInput
//         updatedInputs[id + 1] = nextInput
//         return updatedInputs
//     }
//     const removeLetter = () => {

//     }
//     function handleKeyPress(event: KeyboardEvent) {
//         if (event.code >= 'KeyA' || event.code <= 'KeyZ') {
//             const inputs = addLetter(event.code.slice(-1))
//             console.log(inputs)
//             setInputs(inputs)
//         } else if (event.code === 'Enter') {
//         } else if (event.code === 'del') {
//         removeLetter()
//         }

//   }

//   return {
//     rowOneInputs,
//     rowTwoInputs,
//     rowThreeInputs,
//     rowFourInputs,
//     rowFiveInputs, 
//     rowSixInputs,
//     totalInputs,
//     id,
//     inputs,
//     setId,
//     addLetter,
//     removeLetter,
//     handleKeyPress

//   }
// }
// i cant pass wordleApi as value because I get this error:
// (property) React.ProviderProps<inputBox[]>.value: inputBox[]
// Type '{ rowOneInputs: { inputId: string; focused: boolean; letter: string; letterCorrect: boolean; letterCorrectPosition: boolean; }[]; rowTwoInputs: { inputId: string; focused: boolean; letter: string; letterCorrect: boolean; letterCorrectPosition: boolean; }[]; ... 10 more ...; handleKeyPress: (event: KeyboardEvent) => ...' is missing the following properties from type 'inputBox[]': length, pop, push, concat, and 29 more.ts(2740)
// index.d.ts(329, 9): The expected type comes from property 'value' which is declared here on type 'IntrinsicAttributes & ProviderProps<inputBox[]>'
// What can I do to make it work
