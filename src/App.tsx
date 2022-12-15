
import { useWordle } from './hooks/useWordle';
import { useEffect, useState } from "react";
import { WordleContext } from './providers/wordle-context';
import './styles/App.scss';
import { Header } from './wordle-components/Header';
import { InputBoard } from './wordle-components/InputBoard';
import { Keyboard } from './wordle-components/Keyboard';
function App() {
  
  // const wordleApi = useWordle()
  // const [wordleApi, setWordleApi] = useState()
  interface inputBox {
    inputId: string, 
    focused: boolean, 
    letter: string,
    letterCorrect: boolean,
    letterCorrectPosition: boolean,
}
  const [wordleApi, setWordleApi] = useState<{
    rowOneInputs: inputBox[];
    rowTwoInputs: inputBox[];
    rowThreeInputs: inputBox[];
    rowFourInputs: inputBox[];
    rowFiveInputs: inputBox[];
    rowSixInputs: inputBox[];
    addLetter: (letter: string) => void;
    removeLetter: () => void;
    handleKeyPress: (event: KeyboardEvent) => void;
  }>({
    rowOneInputs: [],
    rowTwoInputs: [],
    rowThreeInputs: [],
    rowFourInputs: [],
    rowFiveInputs: [],
    rowSixInputs: [],
    addLetter: () => {},
    removeLetter: () => {},
    handleKeyPress: () => {},
  })
  const api = useWordle();
  useEffect(() => {
    setWordleApi(api);
    api.appInit();
  }, []);
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
