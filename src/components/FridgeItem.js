import { useState } from "react";

export default function FridgeItem(props) {
    const { food, handleDeleteFood } = props;
    const [count, setCount] = useState(food.foodquantity);

    function handleChange(evt,type){
        const { name, value } = evt.target;
        if(type === "add"){
            setCount((value) => value + 1);
            food.foodquantity = count;
        }
        if(type === "sub"){
            setCount((value) => value - 1);
            food.foodquantity = count;
        }
        console.log("value = ", value, count);
    }

    return(
        <div key={food.foodname} className="card">
            <h2>{food.foodname}</h2>
            <h3>Quantité </h3>
            <p>{food.foodquantity}</p>
            <div className="footer">
                <button className="btn-increment" name="foodquantity" value={food.foodquantity} onClick={(evt) => handleChange(evt,"add")}>+</button>
                <button className="btn-decrement" name="foodquantity" value={food.foodquantity} onClick={(evt) => handleChange(evt,"sub")}>-</button>
                <button className="btn-delete" onClick={() => handleDeleteFood(food.foodid)}>supprimer</button>
            </div>
        </div>
    )
}