import React from "react"

export function InputBox({boxId, focusOn, inputsRefsData}: {boxId: string, focusOn: boolean, inputsRefsData: {[key: string]: React.RefObject<HTMLInputElement>}}) {

    const getNextInputId = (id: string) => {
        if (Number(id[0]) + 1 > 5) {
            return 'Game Over'
        } else {
            return `${id[0]}-${(Number(id[2]) + 1).toString()}`
        }
    }

    const handleClick = (event: React.FormEvent<HTMLInputElement>) => {
        if ((event.target as HTMLInputElement) !== document.activeElement) {
            return
        }
    }

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const nextId = getNextInputId((event.target as HTMLInputElement).id) as string
        if (nextId === '0-5') {
            setTimeout(() => {
                alert('Done!')
            }, 250);
            return
        }

        if (nextId in inputsRefsData) {
            const nextInput = inputsRefsData[nextId];
            if (nextInput && nextInput.current) {
            nextInput.current.focus();
            }
          }
    }   

    return (
        <input
            ref={inputsRefsData[boxId]}
            id={boxId} 
            className={'ur-input'}
            autoFocus={focusOn}
            autoComplete={'off'}
            maxLength={1}
            onInput={(event) => handleInput(event)}
            onClick={(event) => handleClick(event)}
        />
    )
} 