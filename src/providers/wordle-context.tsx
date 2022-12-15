

import { createContext } from "react";
interface inputBox {
    inputId: string, 
    focused: boolean, 
    letter: string,
    letterCorrect: boolean,
    letterCorrectPosition: boolean,
}


export const WordleContext = createContext<{
    rowOneInputs: inputBox[];
    rowTwoInputs: inputBox[];
    rowThreeInputs: inputBox[];
    rowFourInputs: inputBox[];
    rowFiveInputs: inputBox[];
    rowSixInputs: inputBox[];
    addLetter: (letter: string) => void;
    removeLetter: () => void;
    handleKeyPress: (event: KeyboardEvent) => void;
  }>({
    rowOneInputs: [],
    rowTwoInputs: [],
    rowThreeInputs: [],
    rowFourInputs: [],
    rowFiveInputs: [],
    rowSixInputs: [],
    addLetter: () => {},
    removeLetter: () => {},
    handleKeyPress: () => {},
  });