
import './styles/App.scss';
import { Header } from './wordle-components/Header';
import { InputRow } from './wordle-components/InputRow';
import { Keyboard } from './wordle-components/Keyboard';
function App() {


    // interface inputBox {
    //     inputId: string, 
    //     focus: boolean, 
    //     letter: string,
    //     correctPosition: boolean,
    //     correct: boolean
    // }

    function createInputs(ids: string[]) {
        return ids.map( id => id === '0' ? ({inputId: id, focus: true, letter: '', letterCorrect: false, letterCorrectPosition: false}): ({inputId: id, focus: false, letter: '', letterCorrect: false, letterCorrectPosition: false}))
    }
    
    const rowOneInputs = createInputs(['0', '1', '2', '3', '4']) 
    const rowTwoInputs = createInputs(['5', '6', '7', '8', '9']) 
    const rowThreeInputs = createInputs(['10', '11', '12', '13', '14'])
    const rowFourInputs = createInputs(['15', '16', '17', '18', '19']) 
    const rowFiveInputs = createInputs(['20', '21', '22', '23', '24'])
    const rowSixInputs = createInputs(['25', '26', '27', '28', '29']) 


  return (

    // TODO create input row component
    // TODO create input board
    // TODO create keyboard button
    // TODO create keyboard row
    // TODO create keyboard 
    // TODO 
    <main>
        {/* <!-- PAGE HEADER --> */}
        <Header />
        {/* <!-- USER INPUTS --> */}
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
        {/* <!-- KEYBOARD --> */}
        <Keyboard />
    </main>
  );
}

export default App;
