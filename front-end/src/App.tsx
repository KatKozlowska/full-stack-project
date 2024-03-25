import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NewPlant from "./containers/NewPlant/NewPlant";
import "./App.scss"
import EditPlant from "./containers/EditPlant/EditPlant";

const App = () => {
  return<div className="main ">
  <Router>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/new-plant" element={<NewPlant/>}></Route>
    <Route path="/plants/:id" element={<EditPlant/>}></Route>

  </Routes>
  </Router>
  </div>;
  
}

export default App;
