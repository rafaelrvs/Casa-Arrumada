import ClosePage from '../Layout/ClosePage'
import './DecimoTerceiro.css'
import { useState } from 'react'

class DecimoTErceiroRegistrado{
  constructor(salarioBrutoInserido, mesesInserido){
    this._meses = mesesInserido
    this._salario = salarioBrutoInserido /12
    this._valueTotal = this._salario * this._meses
  
  }
  get valueTotal(){
    return this._valueTotal  
  }
}


const DescimoTerceiro = () =>{
  
  const [salarioBrutoInserido, setSalarioBrutoInserido] = useState('')
  const [mesesInserido, setMesTrabalhados] = useState('')
  const [valorDoDecimo, setValorDoDecimo] = useState('')
 
  function handleInputChangeSalario(event){
    const valueTheWage = event.target.value
    const newNumber = Number(valueTheWage)
    setSalarioBrutoInserido(newNumber)
    event.preventDefault()

  }
  function handlerInsertValueMonth(event){
    const insertValueMonth = event.target.value
    const numberInsertValueMonth = Number(insertValueMonth)
    setMesTrabalhados(numberInsertValueMonth)
    event.preventDefault()

  }
  function clearPage (event){
    setSalarioBrutoInserido('')
    setMesTrabalhados('')
    event.preventDefault()
  }
  function ClickSendValue(event){
    const newDecimo = new DecimoTErceiroRegistrado(salarioBrutoInserido,mesesInserido)
    const resultado = newDecimo.valueTotal
    setValorDoDecimo(`Pague R$ ${resultado.toFixed(2)}`)
    event.preventDefault()
  }

  return(
    <div className="decimoTerceiroContainer">
      <section>
        <form onSubmit={ClickSendValue} action="">
        <div className='closePageContainer'>
            <ClosePage/>
          </div>
          <h1>Décimo Terceiro  {valorDoDecimo}</h1>
          <label htmlFor="salario">Salario bruto</label>
          <input 
          type="Number"
          id= 'salario' 
          step='any'
           placeholder=' Digite o salario bruto'
           value={salarioBrutoInserido}
           onChange={handleInputChangeSalario}
           />

          <label htmlFor="totalMeses" >Quantidade de meses Trabalhado</label>
          <input type="Number"
          id='totalMeses'
          step='any' 
           value={mesesInserido}
           onChange={handlerInsertValueMonth}
          placeholder=' Digite os meses trabalhados'
          
          />
          <div className='container-btn'>

          <input id='btn' type="submit" value="Calcular" />
          <p onClick={clearPage}>Limpar</p>
          </div>
        </form>
      </section>
    </div>
  )
}
export default DescimoTerceiro