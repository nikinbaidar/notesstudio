import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function Main() {
    return(
        <div>
            <ul>
                <li><a href={`/home`}>Home</a></li>
                <li><a href={`/about`}>About</a></li>
                <li><a href={`/support`}>Support</a></li>
            </ul>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/home",
        element: <h1>Home</h1>
    },
    {
        path: "/about",
        element: <h1>About</h1>
    },
    {
        path: "/support",
        element: <h1>Support</h1>
    },
])

const App = () => {
  return (
      <>
      <h1>Test</h1>
      <Main/>
      <RouterProvider router={router} />
      </>
  );
};

export default App;
