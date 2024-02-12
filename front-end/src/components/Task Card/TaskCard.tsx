import "./TaskCard.scss";
import plant from "../../assets/images/—Pngtree—potted plants_4446174.png";


const TaskCard = () => {
  return (
    <div className="plant-card">
    <div className="plant-card__text">
    <h2 className="plant-name">Today</h2>
    <ul>
        <li></li>
        <li>Task 2 </li>
        <li>Task 3 </li>
    </ul>
    </div>
    <div className="plant-card__container">
    <img className="plant-card__img" src={plant}></img>

  
    </div>
</div>
  );
};

export default TaskCard;
