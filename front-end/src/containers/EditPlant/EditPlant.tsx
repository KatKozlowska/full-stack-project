import { useState } from "react";
import "./EditPlant.scss";
import Form from "../../components/Form/Form"
import PlantCard from "../../components/PlantCard/PlantCard";
const EditPlant = () => {
  const [editPlant, setEditPlant] = useState(false);

  const handleEditPlant = () => setEditPlant(!editPlant);

//   const handleUpdatePlant = async () => {
//     console.log(editedPlant);
//     const result = await fetch(`http://localhost:8080/`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(editPlant),
//     });
//   };
  
  return (
    <div className="edit-plant">
      <h1>Edit Plant</h1>
      <PlantCard />
      <p>Add plant watering history </p>
      <button className="edit-greeting__button edit-greeting__button--secondary"
            onClick={handleEditPlant} >Edit Plant</button>
      <button>My Plant Died</button>
      {editPlant && (<Form />)}
    </div>
  );
};

export default EditPlant;
