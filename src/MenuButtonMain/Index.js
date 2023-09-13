import "./MenuButtonMain.css"
import Logo from "../components/Layout/Logo";


const MenuButtonMain = () =>{

  function HandlerEnablingThirtheenSalary(event){
  
  event.preventDefault();

  }

  return(
    <div className="containerOption">
      <div>
        <Logo/>
      </div>
        <p onClick={HandlerEnablingThirtheenSalary}> Decimo terceiro</p>
        <p>Calculo da Hora extra</p>
        <p>Calculo de ferias</p>
        <p>Calculo do salario</p>
        
  
        <p></p>
    </div>
  );
}
export default MenuButtonMain;