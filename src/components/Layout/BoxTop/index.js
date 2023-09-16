/**
 * Upper box representation
 */

import { useState } from "react";
import Cronometro from "../../Cronometro";
import TextContentInSideBox from "../TextContentInSideBox";
import "./BoxTop.css";
import Anotacao from "../../Anotacao";

const BoxTop = () => {
  const [cronometro, setCronometro] = useState(false);
  const [anotation, setAnotation] = useState(false);

  const activePage = (event) => {
    setCronometro(true);
    setAnotation(false);
    event.preventDefault();
  };
  const handlerOpenNotation = (event) => {
    setCronometro(false);
    setAnotation(true);
    event.preventDefault();
  };

  return (
    <div className="container__BoxTop">
      <div className="content">
        <div onClick={activePage}>
          <TextContentInSideBox /> Cronometro
        </div>
        <div onClick={handlerOpenNotation}>
          <TextContentInSideBox /> Anotação
        </div>
        <div>
          <TextContentInSideBox /> importante
        </div>
        <div>
          <TextContentInSideBox /> Exercicio laboral
        </div>
      </div>
      <div>
        {cronometro && <Cronometro />}
        {anotation && <Anotacao />}
      </div>
    </div>
  );
};
export default BoxTop;
