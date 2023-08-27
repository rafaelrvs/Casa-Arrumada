import './Anotacao.css'
import React, { useState } from 'react';


function Anotacao() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');
   
  const handleRemoveNote = () =>{
    notes.forEach((element) =>{
      const updatedNotes = notes.filter(note => note !== inputValue);
      setNotes(updatedNotes);
    })
  }
  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="blocoDeNotas">
      <h1>Meu Bloco de Notas</h1>
      <br />
      <div className="note-container">
        <input
          type="text"
          placeholder="Digite sua nota..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddNote}>Adicionar Nota</button>
        <button onClick={handleRemoveNote}>Limpar</button>
      </div>
      <div className="notes-list">
        <h2>Notas:</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Anotacao;
