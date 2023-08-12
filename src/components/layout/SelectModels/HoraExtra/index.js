import './HoraExtra.css'
import { useState } from 'react'
class HoraExtraRegistradaParaPagamento{
  constructor(porcentage,salarioPorHora, hora){
    this._porcentage = porcentage/100
    this._salarioPorHora =salarioPorHora
    this._horasTrabalhadas = hora
    this.totalApagar = (salarioPorHora * this._porcentage + salarioPorHora)*hora
 

  }
  get porcentage(){
    return this._porcentage
  }
  get hora(){
    return this._horasTrabalhadas
  }
  get salarioPorHora(){
    return this._salarioPorHora
  }

  set porcentage(newValuethePorcentage){
    this._porcentage = newValuethePorcentage

  }
  set horasTrabalhadas(newValuetheHorasTrabalhadas){
    this._horasTrabalhadas = newValuetheHorasTrabalhadas
  }
  set horaExtra(newValueTheHoraExtra){
    this._horaExtra = newValueTheHoraExtra
  }
  set salarioPorHora(newSalario){
    this._salarioPorHora = newSalario
  }


} 
const HoraExtra =()=>{
  let   [resposta, setResposta]= useState('')
  const [porcentage, setPorcentage] = useState('')
  const [salarioHoraFuncionario, setsalarioHoraFuncionario] = useState('')
  const [horaExtra, sethoraExtra] = useState('')
  
  
  const handleInputChange = (event) => {
    const inputValuePorcentagem = event.target.value;
     const porcentagemNumero =  Number(inputValuePorcentagem)
    
      setPorcentage(porcentagemNumero);

  
    
   
  };
  const handleInputChangeSalario = (event) => {
    const inputValueSalario = event.target.value;
   const salarioNumero = Number(inputValueSalario)
   
    setsalarioHoraFuncionario(salarioNumero);
    
    
  };
  
  const handleInputChangeHoraExtra = (event) => {
    const inputValueHoraExtra = event.target.value;
    const ExtraNumero = Number(inputValueHoraExtra)

    sethoraExtra(ExtraNumero);
    
    
  };
  const handleSubmit =(event)=>{
    
    const newPay = new HoraExtraRegistradaParaPagamento(porcentage,
      salarioHoraFuncionario,
      horaExtra)
      setResposta(` pague R$ ${newPay.totalApagar}`)
    event.preventDefault()
  }
  
  const clearPage = (event)=>{
   
setResposta('')
setPorcentage('')
setsalarioHoraFuncionario('')
sethoraExtra('')



    event.preventDefault()
    
  }
  
  
  
  
  return(
    <div className='horaExtraSelecionada'>
      <div>

      <h1>Hora Extra:  {resposta}</h1>
      </div>
     <section>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="percentageInput">Porcentagem:</label>
        <input
        type="Number"
        step='any'
        minLength={1}
        id="percentageInput"
        placeholder=' Digite a porcentagem, não use o %'
        value={porcentage}
        onChange={handleInputChange}
        required
      />
    
        <label htmlFor="salarioHora">Salario P/ Hora:</label>
        <input

        type="Number"
        id="salarioHora"
        step='any'
        placeholder=' Digite o valor da hora normal'
        value={salarioHoraFuncionario}
        onChange={handleInputChangeSalario}
        required
        />
        <label htmlFor="horasTotal">Hora Extra total :</label>
      <input type="Number"
      id='horasTotal'
      placeholder=' Digite o valor total de horas trabalhadas'
      value={horaExtra}
      step='any'
      onChange={handleInputChangeHoraExtra}
       required

      />

      <div className='container-form-btn'>
      <input id='btn' type="submit" value="Calcular"  />
      <p onClick={clearPage}>Limpar</p>
      </div>
      </form>
     </section>
    </div>
  )
}
export default HoraExtra