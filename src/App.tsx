
import { Outlet } from 'react-router-dom';
import {useState, useRef} from 'react'
import {InstructionsModal} from './main-components/InstructionsModal'
import './styles/App.scss';
import NavBar from './main-components/NavBar';
import SignInModal from './main-components/SignInModal';

function App() {

  const formRef = useRef<HTMLFormElement>(null)
  const getUserData = () => {
    if (formRef.current) {
      const userData  = new FormData(formRef.current);
      const valuesObj = Object.fromEntries(userData.entries())
      localStorage.setItem('name', valuesObj.name.toString())
      localStorage.setItem('email', valuesObj.email.toString())
      console.log('local storage: ', localStorage)
    }
  }
  const [showInsructions, setShowInstructions] = useState(false);
  const handleInstructionsClose = (): void => setShowInstructions(false);
  const handleInstructionsShow = (): void => setShowInstructions(true);

  const [showSignIn, setShowSignIn] = useState(false);
  const handleSignInClose = (): void => setShowSignIn(false);
  const handleSignInShow = (): void => setShowSignIn(true);
  return (
    <>
      <NavBar openSignInModal={handleSignInShow} openInstructionsModal={handleInstructionsShow}/>
      <InstructionsModal 
        showInstructions={showInsructions} 
        closeModal={handleInstructionsClose}
      />
      <SignInModal 
        showSignIn={showSignIn} 
        closeSignInModal={handleSignInClose}
        handleSubmit={getUserData}
        formRef={formRef}
      />
      <Outlet />
    </>
  );
}

export default App;
