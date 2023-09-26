/**
 * Upper box representation
 */

import { useState } from "react";
import Cronometro from "../../Cronometro";
import TextContentInSideBox from "../TextContentInSideBox";
import "./BoxTop.css";
import Anotacao from "../../Anotacao";
import ExercicioLaboral from "../../ExercicioLaboral";

const BoxTop = () => {
  const [cronometro, setCronometro] = useState(false);
  const [anotation, setAnotation] = useState(false);
  const [exercicio, setExercicio] = useState(false);

  const activePage = (event) => {
    setCronometro(true);
    setAnotation(false);
    setExercicio(false);
    event.preventDefault();
  };
  const handlerOpenNotation = (event) => {
    setCronometro(false);
    setAnotation(true);
    setExercicio(false);
    event.preventDefault();
  };
  const exercicioAtivo = (event) => {
    console.log(exercicio)
    setExercicio(true);
    setCronometro(false);
    setAnotation(false);
    event.preventDefault();
  };

  return (
    <div className="container__BoxTop">
      <p   className="continue">Menu</p>
      <div className="content">
        <div onClick={activePage}>
          <TextContentInSideBox /> Cronometro
        
        </div>
        <div onClick={handlerOpenNotation}>
          <TextContentInSideBox /> Anotação
        </div>
       
        <div onClick={exercicioAtivo}>
          <TextContentInSideBox /> Exercicio laboral
        </div>
        
      </div>
      <div>
        {cronometro && <Cronometro />}
        {anotation && <Anotacao />}
        {exercicio &&<ExercicioLaboral/>}
      </div>
    </div>
  );
};
export default BoxTop;
