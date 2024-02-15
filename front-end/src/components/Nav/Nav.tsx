import home from "../../assets/images/home.png";
import new_plant from "../../assets/images/holding-hand.png";
import water from "../../assets/images/watering-plants.png";
import {Link} from "react-router-dom";
import "./Nav.scss"

const Nav = () => {
  
   
 
    return (
      <div className="nav">
        <div className="nav-container">
        <Link title="Home" className="nav__item" to="/"><img className=" nav__img nav__img--home" src={home}/></Link>
        <Link title="Your Plants" className="nav__item" to="/new-plant"><img className="nav__img nav__img--new-plant" src={new_plant}/></Link>
                </div>
      </div>
    );
  };


export default Nav;