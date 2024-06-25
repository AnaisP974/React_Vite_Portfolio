import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Skills from './Skills';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
