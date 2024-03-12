const List = ({ item, onDeleteItem, handleDoneItem }) => {
  const { product, quentity, packed, id } = item;
  return (
    <li className="listWrapper">
      <span>{quentity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>
      <div>
        <button onClick={() => handleDoneItem(id)} className="doneBtn">
          Done
        </button>
        <button onClick={() => onDeleteItem(id)} className="deleteBtn">
          Delete
        </button>
      </div>
    </li>
  );
};
export default List;
