
import WateringTypes from "../../types/WateringTypes";
import WateringCard from "../WateringCard/WateringCard";




type WateringListProps = {
   
    watering : WateringTypes[];
    
  }
  const WateringList = ({watering}:WateringListProps) => {
    return (
      
      <div className="plan-list">
        <h1>Watering history</h1>
         {watering.map(water => <div><WateringCard  wateringCard={water}/></div>)}
         
        
      </div>
    );
  };
  
  export default WateringList;
  