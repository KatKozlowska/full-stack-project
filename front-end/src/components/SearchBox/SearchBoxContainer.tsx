import { FormEvent, useState } from "react";
import PlantTypes from "../../types/PlantTypes";
import SearchBox from "./SearchBox";
import WateringList from "../WateringList/WateringList";



type SearchProps = {
    date : PlantTypes[];
};

const SearchBoxContainer = ({date}:SearchProps) => {
    const [search, setSearch] = useState<string>("");
    
    const handleInput = (event:FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value)
    };

    const filteredDate = date.filter( watered => {
        return watered.nextWater.includes(search) || watered.lastWatered.includes(search) ;
      
    
    });
    return (<>
    <SearchBox  searchTerm={search} handleInput={handleInput}/>
    <div>
    <WateringList watering={filteredDate}/>
    </div>
    </>
)}

export default SearchBoxContainer;