import "./PlantCard.scss";
import plant from "../../assets/images/—Pngtree—potted plants_4446174.png"

// type PlantCardProps = {
//     plantCard: PlantType;
// }
const PlantCard = () => {
  return (
    <div className="plant-card">
        <div className="plant-card__text">
        <h2 className="plant-name">Plant name here </h2>
        <h3>Maybe botanical name here</h3>
        </div>
        <div className="plant-card__container">
        <img className="plant-card__img" src={plant}></img>

      
        </div>
    </div>
  );
};

export default PlantCard;
