import { InputBox } from './InputBox';
import { useRef } from "react"
interface inputBox {
    inputId: string, 
    focused: boolean, 
}

export function InputRow({inputsData}: {inputsData: inputBox[]}) {

    const inputRefs: {[key: string]: React.RefObject<HTMLInputElement>} = {
        '0-0': useRef<HTMLInputElement>(null),
        '0-1': useRef<HTMLInputElement>(null),
        '0-2': useRef<HTMLInputElement>(null),
        '0-3': useRef<HTMLInputElement>(null),
        '0-4': useRef<HTMLInputElement>(null),
        '1-0': useRef<HTMLInputElement>(null),
        '1-1': useRef<HTMLInputElement>(null),
        '1-2': useRef<HTMLInputElement>(null),
        '1-3': useRef<HTMLInputElement>(null),
        '1-4': useRef<HTMLInputElement>(null),
        '2-0': useRef<HTMLInputElement>(null),
        '2-1': useRef<HTMLInputElement>(null),
        '2-2': useRef<HTMLInputElement>(null),
        '2-3': useRef<HTMLInputElement>(null),
        '2-4': useRef<HTMLInputElement>(null),
        '3-0': useRef<HTMLInputElement>(null),
        '3-1': useRef<HTMLInputElement>(null),
        '3-2': useRef<HTMLInputElement>(null),
        '3-3': useRef<HTMLInputElement>(null),
        '3-4': useRef<HTMLInputElement>(null),
        '4-0': useRef<HTMLInputElement>(null),
        '4-1': useRef<HTMLInputElement>(null),
        '4-2': useRef<HTMLInputElement>(null),
        '4-3': useRef<HTMLInputElement>(null),
        '4-4': useRef<HTMLInputElement>(null),
        '5-0': useRef<HTMLInputElement>(null),
        '5-1': useRef<HTMLInputElement>(null),
        '5-2': useRef<HTMLInputElement>(null),
        '5-3': useRef<HTMLInputElement>(null),
        '5-4': useRef<HTMLInputElement>(null),
    }

    return (
        <div className="input-row">
            
            {inputsData.map( inputData => (
                <InputBox
                    boxId={inputData.inputId}
                    key={inputData.inputId}
                    focusOn={inputData.focused}
                    inputsRefsData={inputRefs}
                />
            )
        
            )}
        </div>
    )
}

