import { useEffect, useState } from "react";
import PlantList from "../../components/PlantList/PlantList";
import "./NewPlant.scss";
import Form from "../../components/Form/Form";
import PlantTypes from "../../types/PlantTypes";

const NewPlant = () => {
  const [newPlant, setNewPlant] = useState(false);
  const [plants, setPlants] = useState<PlantTypes[]>([]);



  const handleSubmit = async (plant: PlantTypes) => {
    console.log(plant);
    const result = await fetch("http://localhost:8080/plant", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(plant),
  });
  handleShowNewPlant();
  getPlants();
  };



  const handleShowNewPlant = () => setNewPlant(!newPlant);

  const getPlants = async () => {
    const response = await fetch("http://localhost:8080/plants");
    const plantsData = await response.json();
    setPlants(plantsData);
  };

 

  const defaultForm= {id: -1, name: "", description: "", wateringFrequency: ""};

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <div className="new-plant">
      <h1> My Plants</h1>
      <button
        className="new-plant-button"
        onClick={handleShowNewPlant}
      >
        Add new plant
      </button>
      {newPlant && <Form handleSubmit={handleSubmit} default={defaultForm} title= "Add a new plant" />}
      <div className="scroll">
      <PlantList plants={plants} />
      </div>
      
    </div>
  );
};

export default NewPlant;
