/*
Here the thirteenth salary
is registered following the
Brazillian business rule
*/
import './ThirteenFirstSalary.css';

// storing entered values with useState
import { useState } from 'react';

class ThirteenRegisteredSalary{
  constructor(grossSalary, _months){
    this._months = _months; // months entered in instance
    this._salary = grossSalary / 12; // gross salary divided into 12 months
    this._valueTotal = this._salary * this._months; // TODO: Business rule for Thirteen first salary 
  
  }
  get valueTotal(){
    return this._valueTotal;
  }
}


const ThirteenFirstSalary = () =>{
  
  const [grossSalary, setGrossSalary] = useState('');
  const [monthEntered, setMonthEntered] = useState('');
  const [salaryValue, setSalaryValue] = useState('');
 
  function handleInputChangeSalary(event){
    const valueTheWage = event.target.value; // accessing entered value
    const newNumber = Number(valueTheWage);
    setGrossSalary(newNumber);
    event.preventDefault();

  }
  function handlerInsertValueMonth(event){
    const insertValueMonth = event.target.value;
    const numberInsertValueMonth = Number(insertValueMonth);
    setMonthEntered(numberInsertValueMonth);
    event.preventDefault();

  }
  function clearPage (event){
    setGrossSalary('');
    setMonthEntered('');
    event.preventDefault();
  }
  function ClickSendValue(event){
    const newDecimo = new ThirteenRegisteredSalary(grossSalary,monthEntered);
    const resultado = newDecimo.valueTotal;
    setSalaryValue(`Pague R$ ${resultado.toFixed(2)}`);
    event.preventDefault();
  }

  return(
    <div className="ThirteenFirstSalary__container">
      <section>
        <form onSubmit={ClickSendValue} action="">
          <h1>Décimo Terceiro  {salaryValue}</h1>
          <label htmlFor="salary">Salario bruto</label>
          <input 
          type="Number"
          id= 'salary' 
          step='any'
           placeholder=' Digite o salario bruto'
           value={grossSalary}
           onChange={handleInputChangeSalary}
           />

          <label htmlFor="totalMonth" >Quantidade de meses Trabalhado</label>
          <input type="Number"
          id='totalMonth'
          step='any' 
           value={monthEntered}
           onChange={handlerInsertValueMonth}
          placeholder=' Digite os meses trabalhados'
          
          />
          <div className='container__btn'>
          <input id='btn' type="submit" value="Calcular" />
          <p onClick={clearPage}>Limpar</p>
          </div>
        </form>
      </section>
    </div>
  )
}
export default ThirteenFirstSalary