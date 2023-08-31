import React from 'react';
import './Agenda.css';




class Agenda extends React.Component {
  
  state = {
    
    daysInMonth:0// Altere para o número de dias no mês atual

  };

   handlermonthSelct = (event)=>{
    const listMonthWith31Days = [
      'Janeiro',
      'Março',
      'Maio',
      'Julho',
      'Agosto',
      'Outubro',
      'Dezembro'
    ]
    const currentMonth = event.target.value 

    const monthInList = listMonthWith31Days.includes(currentMonth)
      this.sendValueMonth(monthInList, currentMonth)
  

    
    event.preventDefault()
  }


   sendValueMonth = (value, month)=>{
     let newDaysInMonth; // Novo valor
     if(value === true){
       
        newDaysInMonth = 31; // Novo valor
       // Aqui você pode adicionar a lógica para calcular o novo valor
    this.setState({ daysInMonth: newDaysInMonth });
    
    
  }
  else if(month === 'Fevereiro'){
    newDaysInMonth = 28; // Novo valor
   this.setState({ daysInMonth: newDaysInMonth });
  }
    
    else{
      newDaysInMonth = 30; // Novo valor
     this.setState({ daysInMonth: newDaysInMonth });


   }
 
    
    
  }


  
  renderCalendar = () => {
    const { daysInMonth } = this.state;
    const calendar = [];
    

    let dayCounter = 1;
    for (let week = 0; week < 5; week++) { // 5 semanas para simplificar o exemplo
      const row = [];
      for (let day = 0; day < 7; day++) {
        if (dayCounter <= daysInMonth) {
          row.push(<td key={day}>{dayCounter}</td>);
          dayCounter++;
        } else {
          row.push(<td key={day}></td>);
        }
      }
      calendar.push(<tr key={week}>{row}</tr>);
    }
    
    return calendar;
  };
  
  render() {

    
 
    const handlerSelectItem = (event)=>{

    
  }


    
   
    return (
      
      <div onClick={handlerSelectItem} className='container__Agenda'>
        <div className='container__btn_option'>

        <h2>Calendário</h2>
        <select name="" id="selectMonth" onChange={this.handlermonthSelct}>
          <option value="">Selecione o mês</option>
          <option value="Janeiro">  Janeiro  </option>
          <option value="Fevereiro">Fevereiro  </option>
          <option value="Março">    Março  </option>
          <option value="Abril">     Abril  </option>
          <option value="Maio">    Maio  </option>
          <option value="Junho">   Junho  </option>
          <option value="Julho">  Julho  </option>
          <option value="Agosto"> Agosto  </option>
          <option value="Setembro"> Setembro  </option>
          <option value="Outubro"> Outubro  </option>
          <option value="Novembro"> Novembro  </option>
          <option value="Dezembro"> Dezembro  </option>
        </select>

        </div>
        <table className="calendar">
          <thead>
            <tr>
              <th>Domingo</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
              <th>Sábado</th>
            </tr>
          </thead>
          <tbody>{this.renderCalendar()}</tbody>
        </table>
      </div>
    );
  }
}

export default Agenda;