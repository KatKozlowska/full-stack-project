import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NewPlant from "./containers/NewPlant/NewPlant";
import Watering from "./containers/Watering/Watering";
import "./App.scss"

const App = () => {
  return<div className="main ">
  <Router>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/new-plant" element={<NewPlant/>}></Route>
    <Route path="/water-plant" element={<Watering/>}></Route>

  </Routes>
  </Router>
  </div>;
  
}

export default App;
