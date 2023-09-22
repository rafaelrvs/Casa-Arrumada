import './Ferias.css'
import React,{useState} from 'react'
class CalculoFerias {
  constructor(salarioBruto,meses,diasDeFerias){
    this._SalarioBruto = salarioBruto
    this._meses = meses
    this._diasDeFerias = diasDeFerias
    this.valorDiario = salarioBruto / meses
    this.valorDasFerias = this.valorDiario * diasDeFerias
    this.adicionalDe1terco = (this.valorDasFerias *  (1/3))
    this.valueWageTotal = this.valorDasFerias + this.adicionalDe1terco

  }
  get salarioBruto(){
    return this._SalarioBruto
  }
  get mese(){
    return this._meses
  }
  set salarioBruto(newValue){
    this._SalarioBruto = newValue
  }
  set meses(newMes){
    this._meses = newMes
  }
  get diasDeFerias(){
    return this._diasDeFerias
  }
  set diasDeFerias(newValue){
    this._diasDeFerias = newValue
  }





}

const Ferias = () =>{
  const [salarioBruto,setSalarioBruto] = useState('')
  const [meses,setMeses] = useState('')
  const [diasDeFerias,setDiasDeFerias] = useState('')
  const [pagamento,setPagamento] = useState('')

  function inserirSalario(event){
    const valueWage =  event.target.value
    console.log(valueWage)
    setSalarioBruto(valueWage)
    event.preventDefault()
  }

  function inserirMeses(event){
    const months = event.target.value
    setMeses(months) 
    event.preventDefault()
  }
  function inserirDiaDeFerias(event){
    const todayTheVacation = event.target.value
    setDiasDeFerias(todayTheVacation)
    event.preventDefault()
  }
  function toSendValue (event){
    const newFerias = new CalculoFerias(salarioBruto, meses,diasDeFerias)
    setPagamento(`Pague:   R$ ${newFerias.valueWageTotal.toFixed(2)}`)

    event.preventDefault()
  }
  
 const clearInput=(event)=>{
      setDiasDeFerias('') 
       setMeses('') 
       setPagamento('') 
       setSalarioBruto('') 
     
   event.preventDefault()
 }

  return(
    <div className='vacation'>
      <section>
        <form onSubmit={toSendValue} action="">
          <h1>Calculo de ferias: <br/>{pagamento}</h1>
          <label htmlFor="entradaDoSalario">Salario Bruto</label>

          <input id="entradaDoSalario"
           type="Number" 
           placeholder=' Digite o salario bruto'
           step='any'
            value={salarioBruto}
            onChange={inserirSalario}
            />
          <label htmlFor="meses">Dias do mes</label>
          <input id='meses' type="Number" placeholder=' Insira  quantos dias do mes' value={meses} 
          onChange={inserirMeses} required 
          step='any'
          />
          <label htmlFor="diasDeFerias" required>Dias de Ferias</label>
          <input id='diasDeFerias'
           type="Number" 
           value={diasDeFerias}
            onChange={inserirDiaDeFerias}
            placeholder=' Insira os dias de ferias'
            step='any'
            required />
            <div className='container-btn'>
                <input type="submit" id='btn' />
                <p onClick={clearInput}>Limpar</p>
            </div>
        </form>
      </section>
    </div>
  )
}
export default Ferias