import React, { useState } from "react";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [listItem, setListItem] = useState([
    "Make the bed",
    "Brush my teeth",
    "Wash my face",
    "Eat breakfast",
    "Walk the dog"
  ]);

  const addIt = (e) => {
    e.preventDefault();
    setListItem([...listItem, input]);
    setInput("");
  };

  const removeIt = (index) => {
    const newList = [...listItem];
    newList.splice(index, 1);
    setListItem(newList);
  };

  return (
    <div className="container">
      <h1>To-Dos</h1>
      
        <ul className="list">
        <form onSubmit={addIt}>
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" style={{}}>Add</button>
        </form>
          {listItem.map((item, index) => (
            <li className="listitems" key={index}>
              {item}
              <button className="delete" onClick={() => removeIt(index)}>
                x
              </button>
            </li>
          ))}
          <div className="count">
            <p>Number of items: {listItem.length}</p>
          </div>
        </ul>
      
    </div>
  );
};

export default ToDo;