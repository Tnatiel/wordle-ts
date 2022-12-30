import {useState} from 'react';


export function useModal() {

    const [showInsructions, setShowInstructions] = useState(false);
    const handleInstructionsClose = (): void => setShowInstructions(false);
    const handleInstructionsShow = (): void => setShowInstructions(true);

    const [showSignIn, setShowSignIn] = useState(false);
    const handleSignInClose = (): void => setShowSignIn(false);
    const handleSignInShow = (): void => setShowSignIn(true);

    return {
        showInsructions,
        showSignIn,
        setShowSignIn,
        setShowInstructions,
        handleInstructionsShow,
        handleInstructionsClose,
        handleSignInShow,
        handleSignInClose
    }
}