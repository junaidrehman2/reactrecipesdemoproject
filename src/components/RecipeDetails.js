import React from "react";

const RecipeDetails = (props) => (
  <div style={props.style}>
    <h2>creemyyy</h2>
    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chicken_in_a_creamy_84614_16x9.jpg" />
    <div>
      <span>Dessert</span>
      <span>1200 cal</span>
    </div>
    <h3>Info</h3>
    <ul>
      <li>info1</li>
      <li>info1</li>
      <li>info1</li>
      <li>info1</li>
    </ul>
    <h3>steps</h3>
    <ol>
      <li>info1</li>
      <li>info1</li>
      <li>info1</li>
      <li>info1</li>
    </ol>
  </div>
);

export default RecipeDetails;
