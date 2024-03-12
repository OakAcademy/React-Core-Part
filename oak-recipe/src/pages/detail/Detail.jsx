import { useLocation } from "react-router-dom";
import diet from "../../assets/diet.svg";
import meal from "../../assets/meal.svg";
import "./Detail.css";

const Detail = () => {
  const { state } = useLocation();

  return (
    <div className="detailWrapper">
      <div className="imgWrapper">
        <h1>{state.label}</h1>
        <img src={diet} alt="food" />
      </div>
      <div className="bottomWrapper">
        <div className="nutWrapper">
          <h4>NUTRIENTS</h4>
          <p>
            {state.totalNutrients.CA.label} :{" "}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>Calories: {Math.round(state.calories)}</p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </div>
        <div className="mealImage">
          <img src={meal} alt="meal" />
        </div>
        <div className="ingWrapper">
          <h4>INGREDIENT</h4>
          {state.ingredientLines.map((ingredient, index) => (
            <div key={index}>
              <p>
                {index + 1}-{ingredient}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
