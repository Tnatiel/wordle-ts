import { KeyboardButton } from "./KeyboardButton"

export function KeyboardRow({letters}:{letters: string[]}) {
    
    return (
        <div className="kboard-row">
            {letters.map( letter => (
                <KeyboardButton  key={letter} letter={letter}/>
            ))}
        </div>
    )
}