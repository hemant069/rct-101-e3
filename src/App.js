import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import RequiredAuth from "./hoc/RequiredAuth";
import Login from "./pages/Login";
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      {
       <>
        <Navbar/>
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="/home" element={<RequiredAuth><Home/></RequiredAuth>}></Route>
        </Routes>
       </>
      }
    </div>
  );
}

export default App;
