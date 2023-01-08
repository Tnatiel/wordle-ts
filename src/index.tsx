import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom'
import { WordleApp } from './pages/WordleApp'
import { AppHome } from './pages/AppHome';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const route = createBrowserRouter([
    {
      path: '/',
      element: <AppHome />,
      children: [
        {
          path: 'wordle',
          element: <WordleApp />
        }
      ]
      
    },
    // {
    //   path: 'wordle',
    //   element: <WordleApp />
    // }
  // {
  //     path: '/',
  //     element: <App />,
  //     children: [
  //       {
  //         path: 'wordle',
  //         element: <WordleApp />
  //       },
  //       {
  //           path: 'home',
  //           element: <Home />
  //       },
  //       ]
  //   },
  
])
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
