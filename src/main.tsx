import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Drag from "./pages/Drag";
import Ref from "./pages/Ref";
import Boolean from "./pages/Boolean";
import Effect from "./pages/Effect";
import Bear from "./pages/Bear";
import KeyDown from "./pages/KeyDown";
import Request from "./pages/Request";

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
        path: "/bears",
        element: <Bear/>
    },
    {
        path: "/keydown",
        element: <KeyDown/>
    },
    {
        path: "/request",
        element: <Request/>
    }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
