
import { Outlet } from 'react-router-dom';
import {useState} from 'react'
import {InstructionsModal} from './main-components/InstructionsModal'
import './styles/App.scss';
import NavBar from './main-components/NavBar';


function App() {

  const [show, setShow] = useState(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);
  return (
    <>
      <NavBar openModal={handleShow}/>
      <InstructionsModal show={show} closeModal={handleClose}/>
      <Outlet />
    </>

  );
}

export default App;
