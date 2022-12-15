

export function InputBox({boxId, focused, letter, correctPosition, correct}: {boxId: string, focused: boolean, letter: string, correctPosition: boolean, correct: boolean}) {
    
    return (
        <div 
            id={boxId} 
            className={`ur-input  
            ${focused === true ? 'focused': '' } 
            ${correctPosition === true ? 'correct-position': '' }
            ${correct === true ? 'correct': '' }`}
        >{letter}</div>
    )
} 