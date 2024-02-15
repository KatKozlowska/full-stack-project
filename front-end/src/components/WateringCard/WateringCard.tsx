import PlantTypes from "../../types/PlantTypes";
import plant from "../../assets/images/—Pngtree—potted plants_4446174.png"
import "./WateringCard.scss"

type WateringCardProps = {
wateringCard: PlantTypes;
}

const WateringCard = ({wateringCard}:WateringCardProps) => {
  return (
    <div className="watering-card">
          <div className="watering-card__text">
        <h1 className="watering-card-name">{wateringCard.name}</h1>
        <p>To be watered every {wateringCard.wateringFrequency} days</p>
        <p>Last watered on {wateringCard.lastWatered}</p>
        <p>Next watering on {wateringCard.nextWater}</p>
        </div>
        <div className="watering-card__container">
        <img className="watering-card__img" src={plant}></img>
        </div>
   
    </div>
  )
};

export default WateringCard;
