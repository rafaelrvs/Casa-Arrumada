/*
 * Container that represents the side box
*/

import TextContentInSideBox from "../TextContentInSideBox";
import "./SideBoxLeft.css";

const SideBoxLeft =()=>{
  return(
    <div className="container__box__left">
     <TextContentInSideBox/>Calculo de ferias
     <TextContentInSideBox/>Calculo de decimo terceiro
     <TextContentInSideBox/>Calculo de Hora Extra
     <TextContentInSideBox/>Calculo de Adicional noturno
     
    </div>
  );
}
export default SideBoxLeft;
