import { KeyboardRow } from "./KeyboardRow"



export function Keyboard() {
    
    
    const rowOneLetters = ["Q","W","E","R","T","Y","U","I","O","P",]
    const rowTwoLetters = ["A","S","D","F","G","H","J","K","L"]
    const rowThreeLetters = ["Enter", "Z","X","C","V","B","N","M", "Del"]
    return (
        <div className="keyboard">
            {/* <!-- ROW1 --> */}
            <KeyboardRow letters={rowOneLetters} />
            {/* <!-- ROW2 --> */}
            <KeyboardRow letters={rowTwoLetters} />
            {/* <!-- ROW3 --> */}
            <KeyboardRow letters={rowThreeLetters} />
        </div>
    )
}