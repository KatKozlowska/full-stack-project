import { useEffect, useState } from "react";
import TaskCard from "../../components/Task Card/TaskCard";
import "./Home.scss"
import PlantTypes from "../../types/PlantTypes";
import { useParams } from "react-router-dom";
import today from "../../assets/images/calendar.png" 
import next from "../../assets/images/next-week.png"


const Home = () => {
  const {id} = useParams();
  const [tasks, setTasks] = useState<PlantTypes[]>([]);


  const getPlants = async () => {
    const response = await fetch(`http://localhost:8080/plants/${id}/watering`);
    const wateringData = await response.json();
    setTasks(wateringData);
  };

  useEffect(() => {
    if (id) {
      getPlants();
    }
  }, [id]);

  console.log(tasks)

  return (
    <div className="home">
      <h1>Home</h1>
     { tasks && <TaskCard title="Today" tasks={tasks} image={today}/>}
      <TaskCard title="This week" tasks={tasks} image={next}/>
      
    </div>
  );
};

export default Home;
