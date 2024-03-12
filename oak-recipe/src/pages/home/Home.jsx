import { useState } from "react";
import "./Home.css";
import axios from "axios";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import home from "../../assets/home.svg";
const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [recipes, setRecipes] = useState(null);

  const appId = process.env.REACT_APP_API_ID;
  const appKey = process.env.REACT_APP_API_KEY;
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"];
  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(recipes);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        selectedMeal={selectedMeal}
        setSelectedMeal={setSelectedMeal}
        mealTypes={mealTypes}
        getData={getData}
      />
      <div className="homeCard">
        {!recipes && <img className="homeImg" src={home} alt="home" />}
        {recipes?.length === 0 && <h1>Sorry, Try Another Food Name</h1>}
        {recipes?.length > 0 && <Card recipes={recipes} />}
      </div>
    </div>
  );
};

export default Home;
