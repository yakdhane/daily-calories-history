import React from 'react';

const FoodList = ({ foods, deleteFood }) => {
  return (
    <ul>
      {foods.map((food) => (
        <li key={food.id}>
          {food.name} - {food.calories} calories
          <button onClick={() => deleteFood(food.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default FoodList;