import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import Stats from "./components/Stats";

const App = () => {
  const [itemsList, setItemsList] = useState([]);

  const handleAddItems = function (newItem) {
    const itemsNew = [...itemsList, newItem];
    setItemsList(itemsNew);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList itemsList={itemsList} setItemsList={setItemsList} />
      <Stats itemsList={itemsList} />
    </div>
  );
};

export default App;
