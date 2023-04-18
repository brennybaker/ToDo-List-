import React from "react";
import {useState} from "react";



const ToDo = (props)=> {
    const [input,setInput] = useState ("");
    const [listItem,setListItem] = useState(["Make the bed","Brush my teeth",
            "Wash my face", "Eat breakfast","Walk the dog"]);

    const addIt = (e) => {
        setInput (e.target.value);
    };

    const deleteItem = (index) => {
        const newList = [...listItem];
        newList.splice(index, 1);
        setListItem(newList);
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
            onChange={(e) => addIt(e)}
          ></input>
        </li>
      </ul>

      {listItem.map((item, index) => {
        return (
          <ul key={index}>
            <li className="listitems" onHover={() => deleteItem} onClick ={()=>deleteItem(index)}>
              {item}
              <button className="delete-btn">X</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ToDo;