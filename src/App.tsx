
import { Outlet } from 'react-router-dom';
import {useState} from 'react'
import {InstrucModal} from './main-components/InstrucModal'
import { WelcomeNavBar } from './main-components/NavBar';
import './styles/App.scss';


function App() {

  const [show, setShow] = useState(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  return (
    <>
      <InstrucModal show={show} closeModal={handleClose}/>
      <WelcomeNavBar openModal={handleShow}  />
      <Outlet />
    </>

  );
}

export default App;
