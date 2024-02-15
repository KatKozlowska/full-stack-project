
import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({searchTerm, handleInput}:SearchBoxProps) => {

    return(
        <div className="search__container">
            <p>Search by date</p>
            <input 
            type="text"
            value={searchTerm}
            onInput={handleInput}/>
        </div>
    )
    
}

export default SearchBox;