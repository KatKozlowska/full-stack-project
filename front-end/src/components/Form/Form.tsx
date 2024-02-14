import { FormEvent, useState } from "react";
import PlantTypes from "../../types/PlantTypes";
import "./Form.scss";

type FormProps = {
  default: PlantTypes;
  title: string;
  handleSubmit: (plant: PlantTypes) => void;
};

const Form = ({ default: plants, title, handleSubmit }: FormProps) => {
  const [plant, setPlant] = useState<PlantTypes>(plants);

  const validateInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(plant).some((value) => !value)) {
      alert("Fill in all blank fields");
      return;
    }
    handleSubmit(plant);
  };

  const handleInput = (event: FormEvent<HTMLInputElement>, key: string) =>
    setPlant({ ...plant, [key]: event.currentTarget.value });

  return (
    <div className="form">
      <h1>{title}</h1>
      <form onSubmit={validateInput}>
        <input
          className="form__input"
          type="text"
          placeholder="Plant name"
          value={plant.name}
          onInput={(event) => handleInput(event, "name")}
        />
        <input
          className="form__input"
          type="text"
          placeholder="Description/ anything you want to remember..."
          value={plant.description}
          onInput={(event) => handleInput(event, "description")}
        />
        <input
          className="form__input"
          type="text"
          placeholder="how often does it need to be watered"
          value={plant.wateringFrequency}
          onInput={(event) => handleInput(event, "wateringFrequency")}
        />
        <button type="submit" className="form__button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
