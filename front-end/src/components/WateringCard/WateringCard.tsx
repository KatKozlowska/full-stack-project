
import "./WateringCard.scss";
import WateringTypes from "../../types/WateringTypes";

type WateringCardProps = {
 
  wateringCard: WateringTypes;
}

const WateringCard = ({  wateringCard}:WateringCardProps) => {
  return (
    <div className="watering-card">
        <div className="watering-card__text">
        <p>Watered on {wateringCard.wateredOn}</p>
        </div>
        <div className="watering-card__container">
        </div>
   
    </div>
  )
};

export default WateringCard;
