
import { Outlet } from 'react-router-dom';
import {useState} from 'react'
import {InstructionsModal} from './main-components/InstructionsModal'
import './styles/App.scss';
import NavBar from './main-components/NavBar';
import SignInModal from './main-components/SignInModal';

function App() {
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
      />
      <Outlet />
    </>
  );
}

export default App;
