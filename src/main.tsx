import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Drag from "./pages/Drag";
import Ref from "./pages/Ref";
import Boolean from "./pages/Boolean";
import Effect from "./pages/Effect";
import Hl from "./pages/Hl";

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
    },
    {
        path: "/boolean",
        element: <Boolean/>
    },
    {
        path: "/effect",
        element: <Effect/>
    },
    {
        path: "/hl",
        element: <Hl/>
    },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
