import { FormEvent, useState } from "react";
import PlantTypes from "../../types/PlantTypes";
import "./Form.scss";
import { isFormElement } from "react-router-dom/dist/dom";
import PlantList from "../PlantList/PlantList";

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
      <div className="form-container">
        <h1>{title}</h1>
        <form className="is-form" onSubmit={validateInput}>
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
            placeholder="water every x days "
            value={plant.wateringFrequency}
            onInput={(event) => handleInput(event, "wateringFrequency")}
          />
          <input
            className="form__input"
            type="text"
            placeholder="last watered yyyy-mm-dd"
            value={plant.lastWatered}
            onInput={(event) => handleInput(event, "lastWatered")}
          />
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
