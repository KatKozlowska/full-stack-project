import { useEffect, useState } from "react";
import "./EditPlant.scss";
import Form from "../../components/Form/Form";
import PlantCard from "../../components/PlantCard/PlantCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import PlantTypes from "../../types/PlantTypes";
import WateringCard from "../../components/WateringCard/WateringCard";
import WateringTypes from "../../types/WateringTypes";

const EditPlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editPlant, setEditPlant] = useState(false);
  const [plant, setPlant] = useState<PlantTypes>();
  const [water, setWater] = useState<WateringTypes[]>([]);
  const [d, setD] = useState<number>(0);

  const handleEditPlant = () => setEditPlant(!editPlant);

  const getPlantById = async (id: string) => {
    const response = await fetch(`http://localhost:8080/plants/${id}`);
    const plantData = await response.json();
    setPlant(plantData);
  };

  const getWateringHistory = async (id: string) => {
    const result = await fetch(`http://localhost:8080/plants/${id}/watering`);
    const wateringHistory = await result.json();
    setWater(wateringHistory);
  };

  useEffect(() => {
    if (id) {
      getPlantById(id);
      getWateringHistory(id);
    }
  }, [id, d]);

  const handleDeletePlant = async () => {
    const result = await fetch(`http://localhost:8080/plant/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: null,
    });
    if (result.ok) {
      alert("deleted");
      navigate("/new-plant");
    }
  };

  const handleUpdatePlant = async (editedPlant: PlantTypes) => {
    console.log(editedPlant);
    const result = await fetch(`http://localhost:8080/plant/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedPlant),
    });

    if (result.ok) {
      setPlant(editedPlant);
      handleEditPlant();
    }
  };

  const handleWateredToday = async () => {
    const response = await fetch(`http://localhost:8080/watering`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: -1,
        plantId: plant?.id,
        wateredOn: new Date().toISOString().split("T")[0],
      }),
    });

    setD(d + 1);
  };

  if (!plant) return console.log("no plant");

  return (
    <div className="edit-plant">
      <section className="exit">
        <Link to="/new-plant" ><button className="exit--button">X</button></Link>
      </section>

      <h1>Edit Plant</h1>

      {plant && <PlantCard plantCard={plant} />}
      <h1>Watering History</h1>
      {water.map((w) => (
        <WateringCard wateringCard={w} />
      ))}
      <div className=" edit-plant__container">
        <button
          className="edit-plant__button edit-plant__button--three "
          onClick={handleWateredToday}
        >
          Watered today
        </button>
        <button className="edit-plant__button" onClick={handleEditPlant}>
          Edit Plant
        </button>
        <button
          className=" edit-plant__button edit-plant__button--two"
          onClick={handleDeletePlant}
        >
          My Plant Died
        </button>
      </div>
      {editPlant && (
        <Form
          default={plant}
          title="Edit Plant"
          handleSubmit={handleUpdatePlant}
        />
      )}
    </div>
  );
};

export default EditPlant;
