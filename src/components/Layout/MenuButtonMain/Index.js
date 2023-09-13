import { useState } from "react";
import MenuBackground from "../MenuBackGround";
const MenuButtonMain = () =>{
  const  [activePageThirtheenSalary,setActivePageThirtheenSalary] = useState(false);
  
  function HandlerEnablingThirtheenSalary(event){
    setActivePageThirtheenSalary(true);
    event.preventDefault();
  }

  return(
    <div>
        <p onClick={HandlerEnablingThirtheenSalary}> Decimo terceiro</p>
    </div>
  );
}
export default MenuButtonMain;