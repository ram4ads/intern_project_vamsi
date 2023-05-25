import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Column from "./components/Column";




const App = () => {

 

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Column />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App