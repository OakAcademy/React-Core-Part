import { useState } from "react";
import List from "../component/List";
import Form from "./Form";
const Main = ({ items, handleAddItems, onDeleteItem, handleDoneItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul className="mainWrapper">
        {sortedItems.map((item) => (
          <List
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            handleDoneItem={handleDoneItem}
          />
        ))}
      </ul>
      <div>
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="packed">Sort By Packed</option>
        </select>
      </div>
    </div>
  );
};
export default Main;
