/*
 * Container that represents the side box
*/

import Logo from "../Logo";
import TextContentInSideBox from "../TextContentInSideBox";
import "./SideBoxLeft.css";


const SideBoxLeft =()=>{

  return(
    <div className="container__box__left">
      <div><img className="maisImg" src="./img/mais.svg" alt="" /></div>
      <div>
        <Logo/>
      </div>
     <TextContentInSideBox/>Calculo de ferias
     <TextContentInSideBox/>Calculo de decimo terceiro
     <TextContentInSideBox/>Calculo de Hora Extra
     <TextContentInSideBox/>Calculo de Adicional noturno
     
    </div>
  );
}
export default SideBoxLeft;
