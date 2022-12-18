// import classNames from 'classNames'

export function InputBox({boxId, focus, letter, correctPosition, correct}: {boxId: string, focus: boolean, letter: string, correctPosition: boolean, correct: boolean}) {
    console.log({boxId, focus, letter, correctPosition, correct})
    return (
        <input
            id={boxId} 
            className={`ur-input  
            ${correctPosition === true ? 'correct-position': '' }
            ${correct === true ? 'correct': '' }`}
            defaultValue={focus === true ? letter : '' }
            autoFocus={focus}
            maxLength={1}
        />
    )
} 