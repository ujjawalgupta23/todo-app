import React, { useState } from "react";
import todo from "../images/todo.svg";
import "../App.css";

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (inputData) {
            setItems([...items, inputData]);
            setInputData("");
        }
    };

    const deleteItem = (id) => {
        console.log(id);
        const updatedItems = items.filter((ele, i) => i !== id);
        setItems(updatedItems);
    };

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todo logo"></img>
                        <figcaption>Add your List Here✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder="✍️ Add Items"
                            value={inputData}
                            onChange={(e) => {
                                setInputData(e.target.value);
                            }}
                        ></input>
                        <i
                            className="fa fa-plus"
                            title="Add Item"
                            onClick={addItem}
                        ></i>
                    </div>
                    <div className="showItems">
                        {items.map((ele, i) => {
                            return (
                                <div className="eachItem" key={i}>
                                    <h3>{ele}</h3>
                                    <i
                                        className="far fa-trash-alt"
                                        title="Delete Item"
                                        onClick={() => deleteItem(i)}
                                    ></i>
                                </div>
                            );
                        })}
                    </div>

                    {/* Clear all Buttons */}
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All"
                            onClick={() => setItems([])}
                        >
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
