import { useEffect, useState } from "react";
import "./EditPlant.scss";
import Form from "../../components/Form/Form"
import PlantCard from "../../components/PlantCard/PlantCard";
import { useParams } from "react-router-dom";
import PlantTypes from "../../types/PlantTypes";


const EditPlant = () => {
  const {id} =useParams();
  const [editPlant, setEditPlant] = useState(false);
  const [plant, setPlant] = useState<PlantTypes>();

  const handleEditPlant = () => setEditPlant(!editPlant);



const getPlantById = async (id:string) => {
  console.log(id)
  const response = await fetch(`http://localhost:8080/plants/${id}`);
  const plantData = await response.json();
  setPlant(plantData);
};

  useEffect(() => {
    if (id) {
      getPlantById(id);
    }
  }, [id]);

  console.log(plant)


  
  return (
    <div className="edit-plant">
      <h1>Edit Plant</h1>
      {plant && (<PlantCard plantCard={plant} />)}
      <p>Add plant watering history </p>
      <button className="edit-greeting__button edit-greeting__button--secondary"
            onClick={handleEditPlant} >Edit Plant</button>
      <button>My Plant Died</button>
      {editPlant && (<Form />)}
    </div>
  );
};

export default EditPlant;
