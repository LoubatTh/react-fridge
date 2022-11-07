import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {v4 as uuidv4 } from "uuid";
import { Search } from "react-router-dom";

import "./css/app.css";
import Menu from "./components/Menu";
import AddFood from "./pages/AddFood";
import Home from "./pages/DisplayFridge";
import {useLocalStorage } from "./hooks/useLocalStorage"
import FoodItem from "./components/FoodItem";


function App() {
  const [foods, setFoods ] = useState([]);
  const STORAGE_KEY = "foods";
  const [storedFoods, setStoredFoods] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    console.log("useEffect with []");
    setFoods(storedFoods);
  }, [])

  useEffect(() => {
    console.log("useEffect with [foods]");
    setStoredFoods(foods);
  }, [foods])

  function handleAddFood(food) {
    console.log('handleAddFood', food);
    setFoods([...foods, {...food, foodid: uuidv4()}])
  }

  function handleAddFoodToFridge(food) {
    console.log('handleAddFood', food);
    setFoods([...foods, {...food, storage: "frigo"}])
  }

  function handleDeleteFood(id){
    setFoods([...foods.filter((foodstuff) => foodstuff.foodid !== id)])
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home foods={foods} handleDeleteFood={handleDeleteFood} /> } /> {/* handleChangeFood={handleChangeFood} */}
        <Route path="/add" element={
          <>
            <AddFood handleAddFood={handleAddFood} /> 
            <div className="FoodList">
              {
                foods.map((food) => (
                <FoodItem food={food} key={food.foodid} handleDeleteFood={handleDeleteFood} handleAddFoodToFridge={handleAddFoodToFridge} />  
                ))  
              }
               
            </div>
          </>
            

            } />
      </Routes>
    </>
  );
}

export default App;
