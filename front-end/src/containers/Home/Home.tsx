import TaskCard from "../../components/Task Card/TaskCard";
import "./Home.scss"


const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <TaskCard/>
      <TaskCard/>
      
    </div>
  );
};

export default Home;
