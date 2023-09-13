import { useState } from "react";
import "./MenuButtonMain.css"

import MenuBackground from "../MenuBackGround";
const MenuButtonMain = () =>{
  const  [activePageThirtheenSalary,setActivePageThirtheenSalary] = useState(false);
  
  function HandlerEnablingThirtheenSalary(event){
    setActivePageThirtheenSalary(true);
    event.preventDefault();
  }

  return(
    <div className="containerOption">
        <p onClick={HandlerEnablingThirtheenSalary}> Decimo terceiro</p>
        <p>Calculo da Hora extra</p>
        <p>Calculo de ferias</p>
        <p>Calculo do salario</p>
        <p></p>
    </div>
  );
}
export default MenuButtonMain;