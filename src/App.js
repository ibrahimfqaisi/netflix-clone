import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Components/home/Home'
import NavBar from "./Components/NavBar/NavBar";
import FavList from "./Components/FavList/FavList ";
function App() {
  return (
    <>
      <NavBar/>
     <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/FavList" element={<FavList  />} />
      </Routes>
   
    </>
  );
}

export default App;
