import React, { useState } from "react";
import "./Anotacao.css";


function Anotacao() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [contPassWord, setContWord] = useState('');

  const handleInputChange = (event) => {
    let insertingValue = event.target.value
    const contWord = insertingValue.length
    setContWord(contWord)
    setInputValue(insertingValue);
    validate(contWord);
  };
  function validate(contWord){
    let colorH2 =  document.querySelector("#contagem")
    colorH2.style.color=" rgb(251, 218, 1)"
    if(contWord>30){
     colorH2.style.color="red"
     setContWord("-"+ contWord + " Resuma sua tarefa em menos palavras !")
   }
  }

  const addItem = () => {
    if (inputValue.trim() !== ""&& inputValue.length <=30) {
      const newTask = {
        text: inputValue,
        isComplete: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
      setContWord('')
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
  const handlerReload = (event)=>{
    window.location.reload();
    event.preventDefault();
  }
  return (
    <div className="tarefas">
      <div className="container">
        <img onClick={handlerReload} id="img" src="../img/xis.svg" alt="close page" />
      <h1>Anotação</h1>
      <h2 id="contagem">{contPassWord}</h2>
      </div>
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