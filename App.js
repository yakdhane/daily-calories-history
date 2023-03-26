import React, { useState } from 'react';
import FoodList from './FoodList';
import AddFood from './AddFood';

const App = () => {
  const [foods, setFoods] = useState([]);

  const addFood = (food) => {
    setFoods([...foods, { id: Date.now(), ...food }]);
  };

  const deleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  return (
    <div>
      <h1>Calories Tracker</h1>
      <AddFood addFood={addFood} />
      <FoodList foods={foods} deleteFood={deleteFood} />
    </div>
  );
};

export default App;