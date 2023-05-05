import React from "react" ;
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home" ;
import Login from "./Login";
import Error from "./Error";

import './App.css';


const router = createBrowserRouter([{
   path : "/" ,
   element : <Home />,
   errorElement : <Error />
},{
  path : "/login",
  element : <Login />,
  errorElement : <Error />
},{
  path : "/error",
  element : <Error />
}])

function App() {
  return (
     <React.StrictMode>
      <RouterProvider router={router} />
     </React.StrictMode>
  );
}

export default App;
