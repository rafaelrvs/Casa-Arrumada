/*
 * Container that represents the side box
 */

import { useState } from "react";
import Logo from "../Logo";
import TextContentInSideBox from "../TextContentInSideBox";
import "./SideBoxLeft.css";
import DescimoTerceiro from "../../DecimoTerceiro";
import Ferias from "../../Ferias";

const SideBoxLeft = () => {
const [decimoAtivo,setDecimoAtivo] = useState(false);
const [feriasAtiva,setFeriasAtiva] = useState(false);


  function activeModelCalcDecimo(event){
    setDecimoAtivo(true);
    setFeriasAtiva(false);
    event.preventDefault();
  }
  function activeModelCalcFerias(event){
    setFeriasAtiva(true);
    setDecimoAtivo(false);
    event.preventDefault();
  }



  return (
    <div className="container__box__left">
      <div className="menuMais__Logo">
        <img className="maisImg" src="./img/mais.svg" alt="" />
      </div>

      <div className="container_menuEmpresa_logo">
        <Logo />
      </div>
      <div className="textContent">

      <div onClick={activeModelCalcFerias} >
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
      <div>
      {decimoAtivo&&<DescimoTerceiro/>}
      {feriasAtiva&&<Ferias/>}

      </div>
      </div>
    </div>

  );
};
export default SideBoxLeft;
