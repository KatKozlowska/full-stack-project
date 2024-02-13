import { useEffect, useState } from "react";
import "./EditPlant.scss";
import Form from "../../components/Form/Form"
import PlantCard from "../../components/PlantCard/PlantCard";
import { useNavigate, useParams } from "react-router-dom";
import PlantTypes from "../../types/PlantTypes";


const EditPlant = () => {
  const {id} =useParams();
  const navigate = useNavigate();
  const [editPlant, setEditPlant] = useState(false);
  const [plant, setPlant] = useState<PlantTypes>();

  const handleEditPlant = () => setEditPlant(!editPlant);


const getPlantById = async (id:string) => {
  const response = await fetch(`http://localhost:8080/plants/${id}`);
  const plantData = await response.json();
  setPlant(plantData);
};

  useEffect(() => {
    if (id) {
      getPlantById(id);
    }
  }, [id]);

  const handleDeletePlant = async () => {
    const result = await fetch(`http://localhost:8080/plant/${id}`,{
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: null,

    });
    if(result.ok) {
      alert("deleted");
      navigate("/new-plant")
    }
  }


    const handleUpdatePlant = async (editedPlant: PlantTypes) => {
    console.log(editedPlant);
    const result = await fetch(`http://localhost:8080/plant/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedPlant),
    });

    if (result.ok) {
      setPlant(editedPlant);
    }
  };
 
  if(!plant) return(console.log("no plant"))


  return (
    <div className="edit-plant">
      <h1>Edit Plant</h1>
      {plant && (<PlantCard plantCard={plant} />)}
      <p>Add plant watering history </p>
      <button className="edit-greeting__button edit-greeting__button--secondary"
            onClick={handleEditPlant} >Edit Plant</button>
      <button onClick={handleDeletePlant}>My Plant Died</button>
      {editPlant && (<Form default={plant} title="Edit Plant" handleSubmit={handleUpdatePlant}/>)}
    </div>
  );
};

export default EditPlant;
