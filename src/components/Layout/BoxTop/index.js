/**
 * Upper box representation
 */

import { useState } from "react";
import Cronometro from "../../Cronometro";
import TextContentInSideBox from "../TextContentInSideBox";
import "./BoxTop.css";

const BoxTop = () => {
  const [cronometro, setCronometro] = useState(false);

  const activePage = (event) => {
    setCronometro(true);
    event.preventDefault();
  };
  return (
    <div className="container__BoxTop">
      <div className="content">
        <div onClick={activePage}>
          <TextContentInSideBox /> Cronometro
        </div>
        <TextContentInSideBox /> Anotação
        <TextContentInSideBox /> Exercicio laboral
        <TextContentInSideBox /> importante
      </div>
      <div>{cronometro && <Cronometro />}</div>
    </div>
  );
};
export default BoxTop;
