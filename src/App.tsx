
import './styles/App.scss';
import { Header } from './wordle-components/Header';
import { InputBoard } from './wordle-components/InputBoard';
import { Keyboard } from './wordle-components/Keyboard';
function App() {



  return (

    <main>
        {/* <!-- PAGE HEADER --> */}
        <Header />
        {/* <!-- USER INPUTS --> */}
        <InputBoard />
        {/* <!-- KEYBOARD --> */}
        <Keyboard />
    </main>
  );
}

export default App;
