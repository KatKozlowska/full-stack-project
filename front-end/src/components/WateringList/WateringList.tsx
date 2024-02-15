import PlantTypes from "../../types/PlantTypes";
import WateringCard from "../WateringCard/WateringCard";




type WateringListProps = {
    watering : PlantTypes[];
  }
  const WateringList = ({watering}:WateringListProps) => {
    return (
      
      <div className="plan-list">
         {watering.map(water => <div><WateringCard wateringCard={water}/></div>)}
         
        
      </div>
    );
  };
  
  export default WateringList;
  