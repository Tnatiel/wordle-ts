
import './styles/App.scss';
import { UserInputStyled } from './styled-components/userInputStyled';
import { Header } from './wordle-components/Header';
import { InputRow } from './wordle-components/InputRow';
import { create } from 'domain';
function App() {


    interface inputBox {
        inputId: string, 
        focus: boolean, 
        letter: string,
        correctPosition: boolean,
        correct: boolean
    }

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
        <div className="keyboard">
            {/* <!-- ROW1 --> */}
            <div className="kboard-row1">
                <button id="Q" className="kbd-btn">Q</button>
                <button id="W" className="kbd-btn">W</button>
                <button id="E" className="kbd-btn">E</button>
                <button id="R" className="kbd-btn">R</button>
                <button id="T" className="kbd-btn">T</button>
                <button id="Y" className="kbd-btn">Y</button>
                <button id="U" className="kbd-btn">U</button>
                <button id="I" className="kbd-btn">I</button>
                <button id="O" className="kbd-btn">O</button>
                <button id="P" className="kbd-btn">P</button>
            </div>
            {/* <!-- ROW2 --> */}
            <div className="kboard-row2">
                <button id="A" className="kbd-btn">A</button>
                <button id="S" className="kbd-btn">S</button>
                <button id="D" className="kbd-btn">D</button>
                <button id="F" className="kbd-btn">F</button>
                <button id="G" className="kbd-btn">G</button>
                <button id="H" className="kbd-btn">H</button>
                <button id="J" className="kbd-btn">J</button>
                <button id="K" className="kbd-btn">K</button>
                <button id="L" className="kbd-btn">L</button>
            </div>
            {/* <!-- ROW3 --> */}
            <div className="kboard-row3">
                <button id="enter" className="kbd-btn">Enter</button>
                <button id="Z" className="kbd-btn">Z</button>
                <button id="X" className="kbd-btn">X</button>
                <button id="C" className="kbd-btn">C</button>
                <button id="V" className="kbd-btn">V</button>
                <button id="B" className="kbd-btn">B</button>
                <button id="N" className="kbd-btn">N</button>
                <button id="M" className="kbd-btn">M</button>
                <button id="del" className="kbd-btn">Del</button>
                
            </div>
        </div>
    </main>
  );
}

export default App;
