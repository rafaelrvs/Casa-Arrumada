import '/Relogio.css'

const Relogio = () =>{
return(
     <div className="Cronometro">
      <h1 id="watch">00:00:00</h1>
        <button className ="button-btn-start" onclick="play()">Iniciar</button>
        <button className ="button-btn-stop" onclick="stopAction()">Parar</button>
        <button className ="button-btn-reset" onclick="resetAction()">Zerar</button>
      </div>
)
}
export default Relogio