

export function InputBox({boxId, focus, letter, correctPosition, correct}: {boxId: string, focus: boolean, letter: string, correctPosition: boolean, correct: boolean}) {
    return (
        <div 
            id={boxId} 
            className={`ur-input  
            ${focus === true ? 'focused': '' } 
            ${correctPosition === true ? 'correct-position': '' }
            ${correct === true ? 'correct': '' }`}
        >{focus === true ? letter : '' }</div>
    )
} 