import React, { useState } from "react";

const ToDo = (props) => {
  const [input, setInput] = useState("");
  const [listItem, setListItem] = useState([
    "Make the bed",
    "Brush my teeth",
    "Wash my face",
    "Eat breakfast",
    "Walk the dog",
  ]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const addIt = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setListItem((prevItems) => [...prevItems, input.trim()]);
      setInput("");
    }
  };

  const deleteItem = (index) => {
    setListItem((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  return (
    <div className="list">
      <h1>To-Dos</h1>
      <ul>
        <li className="oglist">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => addIt(e)}
          />
        </li>
      </ul>
      {listItem.map((item, index) => {
        return (
          <ul key={index}>
            <li
              className="listitems"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item}
              {hoveredIndex === index && (
                <button className="delete-button" onClick={() => deleteItem(index)}>
                  X
                </button>
              )}
            </li>
          </ul>
        );
      })}
      <p className="item-count">You have {listItem.length} items on your list.</p>
    </div>
  );
};

export default ToDo;