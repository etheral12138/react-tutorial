import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Drag from "./pages/Drag";
import {Ref} from "./pages/Ref";
const router = createBrowserRouter([
    {
        path: "/",
        element:<App />,
    },
    {
        path: "/drag",
        element: <Drag/>
    },
    {
        path:"/ref",
        element:<Ref/>
    }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
