import "./Header.css";

const Header = ({
  query,
  setQuery,
  setSelectedMeal,
  selectedMeal,
  mealTypes,
  getData,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="headerWrapper">
      <h1>Recipe App</h1>
      <div className="searchWrapper">
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
          <select
            name="mealType"
            id="mealType"
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}
          >
            {mealTypes.map((mealType, index) => (
              <option value={mealType} key={index}>
                {mealType}
              </option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
};

export default Header;
