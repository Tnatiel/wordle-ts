import React from "react";

export function InputBox(
    {boxId, focusOn, inputsRefsData}: 
    {boxId: string, focusOn: boolean, inputsRefsData: {[key: string]: React.RefObject<HTMLInputElement>}}) {

    // todo figure how to make only relevant inputs to get checker func
    // todo although that not that importent wont change runtime
    // todo how i get the inputs data (REFFFFFFFFFFFFFFFS)

    const getNextInputId = (id: string) => {

        if (+id[0] + 1 > 5) {
            return 'Game Over'
        }
        if (+id[2] + 1 > 4) {
            return `${+id[0] + 1}-0`
        } else {
            return `${id[0]}-${(+id[2] + 1)}`
        }
    }

    const handleClick = (event: React.FormEvent<HTMLInputElement>) => {
        if ((event.target as HTMLInputElement) !== document.activeElement) {
            return
        }
    }

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const nextId = getNextInputId((event.target as HTMLInputElement).id) as string;
        if (nextId === '0-5') {
            setTimeout(() => {
                alert('Done!')
            }, 250);
            return
        }

        // here the if that check guess

        if (nextId in inputsRefsData) {
            const nextInput = inputsRefsData[nextId];
            if (nextInput && nextInput.current) {
            nextInput.current.focus();
            }
          }
    } 
    
    const getGuess = (id: string) => {
        const guess: string[] = [];
        for (let column = 0; column < 5; column++) {
            const currentRef = inputsRefsData[`${id[0]}-${column}`]
            guess.push(currentRef.current!.value);            
        }
        return guess.join('')
    }

    const sendGuess = (guess: string) => {
        fetch('http://localhost:3003/word/check', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(guess)
            })
            .then( res => res.json())
            .then( answer => console.log(answer))
            .catch( (e: Error) => console.log(e.message))
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