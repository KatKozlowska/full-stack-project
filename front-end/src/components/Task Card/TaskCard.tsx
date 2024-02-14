import "./TaskCard.scss";
import today from "../../assets/images/calendar.png" 
import next from "../../assets/images/next-week.png"
import PlantTypes from "../../types/PlantTypes";

type TaskCardProps = {
  title: string;
  tasks:PlantTypes;
  image:string;

}


const TaskCard = ({title, tasks, image}: TaskCardProps) => {
  return (
    <div className="plant-card">
    <div className="plant-card__text">
    <h2 className="plant-name">{title}</h2>
    <ul>
        <li>Water {tasks.lastWatered}</li>
        <li>Task 2 </li>
     
    </ul>
    </div>
    <div className="plant-card__container">
    <img className="plant-card__img" src={image}></img>

  
    </div>
</div>
  );
};

export default TaskCard;
