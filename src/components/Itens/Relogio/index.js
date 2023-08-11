import { useState } from "react";
import "./Relogio.css";

let sec = 0;
let min = 0;
let hr = 0;
let intervalo = 0;
let digito = 0;

const Relogio = () => {
  const [valueHours, setValueHours] = useState("00:00:00");

  function doisdigitos(digito) {
    if (digito < 10) {
      return "0" + digito;
    } else {
      return digito;
    }
  }
  function play() {
    watch();
    intervalo = setInterval(watch, 1000);
  }
  function stopAction() {
    clearInterval(intervalo);
  }

  function resetAction() {
    clearInterval(intervalo);
    hr = 0;
    min = 0;
    sec = 0;
    setValueHours("00:00:00");
  }

  function watch() {
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
    }
    setValueHours(
      doisdigitos(hr) + ":" + +doisdigitos(min) + ":" + doisdigitos(sec)
    );


  }

  return (
    <div className="cronometro">
      <h1 id="watch">{valueHours}</h1>
      <div className="btn-container">
        <button className="button-btn-start" onClick={play}>
          Iniciar
        </button>
        <button className="button-btn-stop" onClick={stopAction}>
          Parar
        </button>
        <button className="button-btn-reset" onClick={resetAction}>
          Zerar
        </button>
      </div>
    </div>
  );
};
export default Relogio;
