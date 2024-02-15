import { Link } from "react-router-dom";
import PlantCard from "../PlantCard/PlantCard";
import PlantTypes from "../../types/PlantTypes";
import "./PlantList.scss"


type PlantListProps = {
  plants : PlantTypes[];
}
const PlantList = ({plants}:PlantListProps) => {
  return (
    
    <div className="plan-list">
      {plants.map(plant => (<Link key={plant.id} to={`/plants/${plant.id}`}>
        <PlantCard plantCard={plant}
          />
      </Link>))}
      
       
        
  
      
    </div>
  );
};

export default PlantList;
