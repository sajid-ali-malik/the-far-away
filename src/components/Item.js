import React from "react";

const Item = ({ item, setItemsList, itemsList }) => {
  function handleDel(id) {
    const filteredList = itemsList.filter((l) => l.id !== id);
    setItemsList(filteredList);
  }
  function handleToggle(id) {
    setItemsList(
      itemsList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => handleDel(item.id)}>❌</button>
    </li>
  );
};

export default Item;
