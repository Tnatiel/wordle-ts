import classNames from "classnames"

export function InputBox({boxId, focused, letter, correctPosition, correct}: {boxId: string, focused: boolean, letter: string, correctPosition: boolean, correct: boolean}) {
    const boxClasses = classNames('ur-input', {
        focused: focused,
        correctPosition: correctPosition,
        correct: correct
    })
    // console.log({boxId, focused, letter, correctPosition, correct})
    return (
        <div id={boxId} className={boxClasses}>{letter}</div>
    )
} 