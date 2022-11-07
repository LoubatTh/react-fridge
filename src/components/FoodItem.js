import { useState } from "react";

export default function FoodItem(props) {
    const { food, handleDeleteFood, handleChangeFood } = props;
    const [state, setState] = useState({
        foodname: "",
        foodquantity: 0,
        storage: ""
    });

    function handleChange(evt){
        const { name } = evt.target;
        setState({...food, [name]: "fridge"});
        food.storage = state.storage;
        console.log(food, state);
    }

    return(
        <div key={food.foodname} className="card">
            
            <h2>{food.foodname}</h2>
            <h3>Quantité </h3>
            <p>{food.foodquantity}</p>
            <div className="footer">
                <button className="btn" name="storage" onClick={(evt) => handleChange(evt)}>Ajouter au frigo</button>
            </div>
        </div>
    )
}