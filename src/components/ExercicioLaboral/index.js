import "./ExercicioLaboral.css";

const ExercicioLaboral = () =>{
  return(
    <div className="container_Exercicio_Laboral" >
     <video width={640} height={360} className="container-img-exerciciolaboral" controls>
      <source src="./img/exercicio.mp4" alt="" type="video/mp4"/>
     </video>
    </div>
  );
}
export default ExercicioLaboral;