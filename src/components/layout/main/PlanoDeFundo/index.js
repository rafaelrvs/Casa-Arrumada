import Logo from "../Logo";
import TextContainer from "../TextContainer";
import "./PlanoDeFundo.css";
const PlanoDeFundo = ()=>{
  return(
    <div className="container__planoDeFundo">
      <div className="container__lateral">
        <div>
          <Logo/>
        </div>
        <div>
          <TextContainer/>Calculo das ferias
        </div>
        <div>
          <TextContainer/>Calculo de hora extra
        </div>
        <div>
          <TextContainer/>Calculo de Salario
        </div>
        <div>
          <TextContainer/>Calculo do decimo terceiro
        </div>
      
      </div>
      
      <div className="container__topo">

          <h1>Em atualização</h1>
      </div>
    </div>
  );
}
export default PlanoDeFundo;