import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ itemsList, setItemsList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;

  if (sortBy === "input") sortedList = itemsList;
  if (sortBy === "description")
    sortedList = itemsList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedList = itemsList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            key={item.id}
            setItemsList={setItemsList}
            itemsList={itemsList}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packing</option>
        </select>
        <button onClick={() => setItemsList([])}>Delete All Items</button>
      </div>
    </div>
  );
};

export default PackingList;
