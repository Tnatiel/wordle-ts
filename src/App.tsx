
import './styles/App.scss';
import { Header } from './wordle-components/Header';
import { InputBoard } from './wordle-components/InputBoard';
import { Keyboard } from './wordle-components/Keyboard';
function App() {



    function createInputs(ids: string[]) {
        return ids.map( id => id === '0-0' ? ({inputId: id, focus: true, letter: '', letterCorrect: false, letterCorrectPosition: false}): ({inputId: id, focus: false, letter: '', letterCorrect: false, letterCorrectPosition: false}))
    }
    
    const rowOneInputs = createInputs(['0-0', '0-1', '0-2', '0-3', '0-4']) 
    const rowTwoInputs = createInputs(['1-0', '1-1', '1-2', '1-3', '1-4']) 
    const rowThreeInputs = createInputs(['2-0', '2-1', '2-2', '2-3', '2-4'])
    const rowFourInputs = createInputs(['3-0', '3-1', '3-2', '3-3', '3-4']) 
    const rowFiveInputs = createInputs(['4-0', '4-1', '4-2', '4-3', '4-4'])
    const rowSixInputs = createInputs(['5-0', '5-1', '5-2', '5-3', '5-4']) 


  return (

    <main>
        {/* <!-- PAGE HEADER --> */}
        <Header />
        {/* <!-- USER INPUTS --> */}
        <InputBoard 
          row1={rowOneInputs} 
          row2={rowTwoInputs} 
          row3={rowThreeInputs} 
          row4={rowFourInputs} 
          row5={rowFiveInputs} 
          row6={rowSixInputs} 
        />
        {/* <!-- KEYBOARD --> */}
        <Keyboard />
    </main>
  );
}

export default App;
