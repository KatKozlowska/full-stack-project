import "./TaskCard.scss";
import PlantTypes from "../../types/PlantTypes";

type TaskCardProps = {
  title: string;
  tasks:PlantTypes[];
  image:string;

}


const TaskCard = ({title, tasks, image}: TaskCardProps) => {
  return (
    <div className="task-card">
    <div className="task-card__text">
    <h1 className="task-name">{title}</h1>
    <ul>
        {tasks.map(task => <li key={task.id}>Water {task.name}</li>)}     
    </ul>
    </div>
    <div className="task-card__container">
    
    <img className="task-card__img" src={image}></img>
    </div>
  
    </div>

  );
};

export default TaskCard;
