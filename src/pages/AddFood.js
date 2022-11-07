import { useState } from "react";

export default function AddFood(props) {
    const [food, setFood] = useState({
        foodname: "",
        foodquantity: 0,
        storage: ""
    });

    const { handleAddFood } = props;

    function handleChange(evt){
        const { name, value } = evt.target;
        setFood({...food, [name]: value });
    }

    function handleSubmit(evt){
        evt.preventDefault();
        handleAddFood(food);
        setFood({
            foodname:"",
            foodquantity: 0,
            storage: ""
        })
    }

    return(
        <div className="add-food">
            <h1>Ajout d'aliment</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="food">Aliment</label>
                    <br />
                    <input type="text" name="foodname" id="foodname" value={food.foodname} onChange={(evt) => handleChange(evt)} />
                    <br />
                    <label htmlFor="quantity">Quantité</label>
                    <br />
                    <input type="number" name="foodquantity" id="foodquantity" value={food.foodquantity} onChange={(evt) => handleChange(evt)} />
                    <br />
                    <input type="submit" value="Add Foodstuff" className="btn" />
                    <br />
                </form>
            </div>
        </div>
    )
}