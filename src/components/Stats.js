import React from "react";

const Stats = ({ itemsList }) => {
  const numPacked = itemsList.filter((item) => item.packed === true).length;
  let percentage = Math.trunc((numPacked / itemsList.length) * 100);

  return (
    <footer className="stats">
      <em>
        💼 You have {itemsList.length} items on your list, and you have already
        packed {numPacked} ({percentage}%).
      </em>
    </footer>
  );
};

export default Stats;
