import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const ingredientsArray = Object.keys(props.ingredients);
  console.log(ingredientsArray);

  const burgerIngredients = ingredientsArray.map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
      console.log(i);
      console.log(ingredientKey);
      return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {burgerIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
