import React, { useState } from "react";
import "./Anotacao.css";


function Anotacao() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        text: inputValue,
        isComplete: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const deleteItem = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTasks(newTasks);
  };

  return (
    <div className="tarefas">
      <h1>Anotação</h1>
      <div className="tarefas-input">
        <input
          type="text"
          placeholder="Adicione a tarefa"
          value={inputValue}
          onChange={handleInputChange}
        />
        <img
          src="../img/mais.svg"
          alt="Add"
          onClick={addItem}
          className="icone"
        />
      </div>
      <div className="tarefas-lista">
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`${task.isComplete ? "check" : ""} show`}
            >
              {task.text}
              <div className="icones">
                <img
                  src="./img/check.svg"
                  alt="Complete"
                  onClick={() => toggleComplete(index)}
                  className="icone"
                />
                <img
                  src="./img/xis.svg"
                  alt="Delete"
                  onClick={() => deleteItem(index)}
                  className="icone"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Anotacao;
