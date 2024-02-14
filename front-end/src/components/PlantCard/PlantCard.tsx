import "./PlantCard.scss";
import plant from "../../assets/images/—Pngtree—potted plants_4446174.png"
import PlantTypes from "../../types/PlantTypes";

type PlantCardProps = {
    plantCard: PlantTypes;
}
const PlantCard = ({plantCard}:PlantCardProps) => {

  return (
    <div className="plant-card">
        <div className="plant-card__text">
        <h2 className="plant-name">{plantCard.name}</h2>
        <h3>{plantCard.description}</h3>
        <h3>To be watered every {plantCard.wateringFrequency} days</h3>
        <h3>last watered on {plantCard.lastWatered}</h3>
        </div>
        <div className="plant-card__container">
        <img className="plant-card__img" src={plant}></img>

      
        </div>
    </div>
  );
};

export default PlantCard;
