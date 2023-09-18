/*
 * Container that represents the side box
 */

import { useState } from "react";
import Logo from "../Logo";
import TextContentInSideBox from "../TextContentInSideBox";
import "./SideBoxLeft.css";
import DescimoTerceiro from "../../DecimoTerceiro";

const SideBoxLeft = () => {
const [decimoAtivo,setDecimoAtivo] = useState(false);


  function activeModelCalcDecimo(event){
    setDecimoAtivo(true);
    event.preventDefault();
  }
  return (
    <div className="container__box__left">
      <div>
        <img className="maisImg" src="./img/mais.svg" alt="" />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <TextContentInSideBox />
        Calculo de ferias
      </div>
      <div onClick={activeModelCalcDecimo}>
        <TextContentInSideBox />
        Calculo de decimo terceiro
      </div>
      <div>
        <TextContentInSideBox />
        Calculo de Hora Extra
      </div>
      <div>
        <TextContentInSideBox />
        Calculo de Adicional noturno
      </div>


      {decimoAtivo&&<DescimoTerceiro/>}
    </div>
  );
};
export default SideBoxLeft;
