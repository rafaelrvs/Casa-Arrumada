/*
 * Container that represents the side box
 */

import { useState } from "react";
import Logo from "../Logo";
import TextContentInSideBox from "../TextContentInSideBox";
import "./SideBoxLeft.css";
import DescimoTerceiro from "../../DecimoTerceiro";
import Ferias from "../../Ferias";
import HoraExtra from "../../HoraExtra";
import SalarioMensal from "../../SalarioMensal";

const SideBoxLeft = () => {
const [decimoAtivo,setDecimoAtivo] = useState(false);
const [feriasAtiva,setFeriasAtiva] = useState(false);
const [horaExtraAtiva,setHoraExtraAtiva] = useState(false);
const [salarioMensalAtivo,setSalarioMensalAtivo] = useState(false);



  function activeModelCalcDecimo(event){
    setDecimoAtivo(true);
    setSalarioMensalAtivo(false);
    setHoraExtraAtiva(false);
    setFeriasAtiva(false);
    event.preventDefault();
  }
  
  function activeModelCalcFerias(event){
    setFeriasAtiva(true);
    setDecimoAtivo(false);
    setSalarioMensalAtivo(false);
    setHoraExtraAtiva(false);
    event.preventDefault();
  }
  
  function activeHoraExtra(event){
    setHoraExtraAtiva(true);
    setSalarioMensalAtivo(false);
    setFeriasAtiva(false);
    setDecimoAtivo(false);
    event.preventDefault();
  }
  function ActiveSalarioMensal(event){
    setSalarioMensalAtivo(true);
    setHoraExtraAtiva(false);
    setFeriasAtiva(false);
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
      <div onClick={activeHoraExtra}>
        <TextContentInSideBox />
        Calculo de Hora Extra
      </div>
      <div onClick={ActiveSalarioMensal}>
        <TextContentInSideBox />
        Calculo Salario mensal
      </div>
      <div>
      {decimoAtivo&&<DescimoTerceiro/>}
      {feriasAtiva&&<Ferias/>}
      {horaExtraAtiva&&<HoraExtra/>}
      {salarioMensalAtivo&&<SalarioMensal/>}

      </div>
      </div>
    </div>

  );
};
export default SideBoxLeft;
