
import { Outlet } from 'react-router-dom';

import { WelcomeNavBar as NavBar } from './main-components/NavBar';
import './styles/App.scss';


function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>

  );
}

export default App;
