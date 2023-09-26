import { useState } from 'react'
import './SalarioMensal.css'
import ClosePage from '../Layout/ClosePage';
class WageMonth{
  constructor(wageForHours,workHours, dayToWorkTotal ){
    this._wageForHours = wageForHours;
    this._workHours = workHours;
    this._dayToWorkTotal = dayToWorkTotal
    this.wageMain = (this._wageForHours * this._workHours) *dayToWorkTotal

  }
}
const SalarioMensal = () =>{
const [diaDeTrabalho,setDiaDeTrabalho] = useState('')
const [hora,setHora] = useState('')
const [salario,setSalario] = useState('')
const [valueWage,setValueWage] = useState('')


const inserirSalario = (event) =>{
  const salarioInserido = event.target.value
  const numerSalario = Number(salarioInserido)
  setSalario(numerSalario)
  event.preventDefault()
}
const inserirHoraTrabalho = (event) =>{
  const horaInserida = event.target.value
  const numberHours = Number(horaInserida)
  setHora(numberHours)
  event.preventDefault()
}
const  inserirdiaDeTrabalho = (event) =>{
  const diasDetrabalhoRegistrado = event.target.value
  const numberDayToWorkRegister = Number(diasDetrabalhoRegistrado)
  setDiaDeTrabalho(numberDayToWorkRegister)
  event.preventDefault()
}

function insertValueInSalario(event){
  const newSalarioregister = new WageMonth(salario,hora ,diaDeTrabalho)
  setValueWage(`Pague: R$${newSalarioregister.wageMain.toFixed(2)}`)
  event.preventDefault()
}


function clearPage(event){
  setDiaDeTrabalho('')
  setHora('')
  setSalario('')
  event.preventDefault()
}

return(
  <div className="containerSalarioMensal">
    <section>
      <form onSubmit={insertValueInSalario} action="">
      <div className='closePageContainer'>
            <ClosePage/>
          </div>
      <h1>Salario mensal: {valueWage}</h1> 
        <label htmlFor="salarioPhora">Salario P/hora</label>
        <input id='salarioPhora' 
        type="Number"
        step='any'
        placeholder=' Digite o salario por hora'
        value={salario}
        onChange={inserirSalario}
        />
        <label  htmlFor="horasTrabalhadas">Horas trabalhadas</label>
        <input id='horaTrabalhadas'
         type="Number" 
         step='any'
         placeholder=' Digite a quantidade de horas trabalhadas por dia '
         value={hora}
         onChange={inserirHoraTrabalho}
         />
        <label  htmlFor="diasTravalhados">Dias trabalhados</label>
        <input id='diasTrabalhados' 
         step='any'
         type="Number" 
         value={diaDeTrabalho}
         onChange={inserirdiaDeTrabalho}
         placeholder=' Digite quantidade de dias trabalhados ' />
         <div className="containerSubmit">
          <input type="submit" value="Constultar" id='btn' />
          <p onClick={clearPage}>Limpar</p>
         </div>
      </form>
        
    </section>
  </div>
)

}
export default SalarioMensal