import { useEffect, useState } from "react";
import PlantList from "../../components/PlantList/PlantList";
import "./NewPlant.scss";
import Form from "../../components/Form/Form";
import PlantTypes from "../../types/PlantTypes";

const NewPlant = () => {
  const [newPlant, setNewPlant] = useState(false);
  const [plants, setPlants] = useState<PlantTypes[]>([]);

  const handleShowNewPlant = () => setNewPlant(!newPlant);

  const getPlants = async () => {
    const response = await fetch("http://localhost:8080/plants");
    const plantsData = await response.json();
    setPlants(plantsData);
  };

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <div className="new-plant">
      <h1> My Plants</h1>
      <button
        className={
          newPlant
            ? "new-plant__button"
            : "new-plant__button new-plant__button--secondary"
        }
        onClick={handleShowNewPlant}
      >
        {" "}
        Add new plant
      </button>
      {newPlant && <Form />}
      <PlantList plants={plants} />
    </div>
  );
};

export default NewPlant;
