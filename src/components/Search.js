import { useState, useEffect } from "react";
import FridgeItem from "./FridgeItem";

export default function SearchBar({ list, setList, handleDeleteFood,filterfield = item => item,... props}) {
    const [value, setValue] = useState("");
    console.log(list);
    useEffect(() => {
        if(value){
            setList(filterList);
        }
        else {
            setList(list)
        }
      }, [value])

      
    function filterList(){
        console.log(list);
        return list.filter(item => filterfield(item).toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    } 
    function handleChange(evt){
        setValue(evt.target.value);
    }

    return(
        <>
            <input 
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="Rechercher"
                onChange={(evt) => handleChange(evt)}
                value= {value} {...props}
            />
            <div>
                {filterList().map((item) => (<FridgeItem food={item} key={item.foodid} handleDeleteFood={handleDeleteFood}/>))}
            </div>
        </>

    );
}