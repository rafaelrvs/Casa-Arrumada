import ClosePage from "../Layout/ClosePage";
import "./ExercicioLaboral.css";

const ExercicioLaboral = () =>{
  return(
    <div className="container_Exercicio_Laboral" >
       <div className='closePageContainer'>
            <ClosePage/>
          </div>
     <video  className="container-img-exerciciolaboral" controls>
      <source src="./img/exercicio.mp4" alt="" type="video/mp4"/>
     </video>
    </div>
  );
}
export default ExercicioLaboral;