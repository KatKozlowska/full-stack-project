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
        <h1 className="plant-name">{plantCard.name}</h1>
        <p>{plantCard.description}</p>
        <p>To be watered every {plantCard.wateringFrequency} days</p>
        <p>Next watering {plantCard.nextWater}</p>
        </div>
        <div className="plant-card__container">
        <img className="plant-card__img" src={plant}></img>
        </div>
       
    </div>
  );
};

export default PlantCard;
