import { useEffect, useState } from "react";
import PlantTypes from "../../types/PlantTypes";
import "./Watering.scss"
import WateringList from "../../components/WateringList/WateringList";
import SearchBoxContainer from "../../components/SearchBox/SearchBoxContainer";



const Watering = () => {

  const [water, setWater] = useState<PlantTypes[]>([]);

  const getWater = async () => {
    const response = await fetch("http://localhost:8080/plants");
    const waterData = await response.json();
    setWater(waterData);
  };

  useEffect(() => {
    getWater();
  }, []);


  return (
    <div className="watering">
      <h1>Watering</h1>
      <div  className="scroll" ><SearchBoxContainer date={water}/></div>
?
    
    </div>
  );
};

export default Watering;
