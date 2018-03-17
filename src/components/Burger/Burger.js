import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const ingredientsArray = Object.keys(props.ingredients);

  let burgerIngredients = ingredientsArray.map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
      console.log(i);
      console.log(ingredientKey);
      return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
    });
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (burgerIngredients.length === 0) {
    burgerIngredients = <p>Please start adding ingredients!</p>
  }

  console.log(burgerIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {burgerIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
