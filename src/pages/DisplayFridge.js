import { useState } from "react";
import FridgeItem from "../components/FridgeItem";
import SearchBar from "../components/Search";

export default function DisplayFridge(props){
    const { foods, handleDeleteFood } = props;
    const [ data, setData ] = useState(foods)
    return(
        <div className="home">
            <h1>Aliments</h1>
            <div>
                <SearchBar placeholder={"filter by type"} filterfield={(food) => food.foodname} list={foods} setList={setData} handleDeleteFood={handleDeleteFood}/>
                {/* {foods.map((food) => (<FridgeItem food={food} key={food.foodid} handleDeleteFood={handleDeleteFood}/>))} */}
            </div>
        </div>
    )
}