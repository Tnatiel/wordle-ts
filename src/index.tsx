import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import {createBrowserRouter} from 'react-router-dom'
import { WordleApp } from './main-components/WordleApp'
import { SignIn } from './pages/SignIn';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const route = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'wordle',
          element: <WordleApp />
      },
      {
          path: 'sign-in',
          element: <SignIn />
      },
      ]
  },
  
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
