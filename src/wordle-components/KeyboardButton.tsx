

export function KeyboardButton({letter}: {letter: string}) {

    return <button id={letter} className="kbd-btn">{letter}</button>
}