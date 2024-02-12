import { useState } from "react";
import PlantCard from "../../components/PlantCard/PlantCard";
import PlantList from "../../components/PlantList/PlantList";
import "./NewPlant.scss";
import Form from "../../components/Form/Form";


const NewPlant = () => {
  const [newPlant, setNewPlant] = useState(false);

  const handleShowNewPlant = () => setNewPlant(!newPlant)

  return (
    <div className="new-plant">
      <h1> My Plants</h1>
      <button className={newPlant  ? "new-plant__button"
                : "new-plant__button new-plant__button--secondary"} onClick={handleShowNewPlant}> Add new plant</button>
                {newPlant && (<Form/>)}
      <PlantCard/>
    </div>
  );
};

export default NewPlant;
