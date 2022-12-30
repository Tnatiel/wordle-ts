import {useState} from 'react';

export function useSignIn() {
    const [showSignIn, setShowSignIn] = useState(false);
    const handleSignInClose = (): void => setShowSignIn(false);
    const handleSignInShow = (): void => setShowSignIn(true);
    return {
        showSignIn,
        handleSignInShow,
        handleSignInClose
    }
}