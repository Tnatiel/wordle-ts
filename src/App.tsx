
import { useWordle } from './hooks/useWordle';
import { WordleContext } from './providers/wordle-context';
import './styles/App.scss';
import { Header } from './wordle-components/Header';
import { InputBoard } from './wordle-components/InputBoard';
import { Keyboard } from './wordle-components/Keyboard';


function App() {
  
  // const wordleApi = useWordle()
  
  return (
    <main>
        {/* <!-- PAGE HEADER --> */}
        <Header />
        {/* <WordleContext.Provider value={wordleApi}> */}
          {/* <!-- USER INPUTS --> */}
          <InputBoard />
          {/* <!-- KEYBOARD --> */}
          <Keyboard />
        {/* </WordleContext.Provider> */}
    </main>
  );
}

export default App;
