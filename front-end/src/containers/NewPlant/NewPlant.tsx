import PlantCard from "../../components/PlantCard/PlantCard";
import PlantList from "../../components/PlantList/PlantList";
import "./NewPlant.scss";

const NewPlant = () => {
  return (
    <div className="new-plant">
      <p> this is a new plant</p>
      <PlantList/>
    </div>
  );
};

export default NewPlant;
