import React from 'react';

import './Agenda.css';
class listMonth31{
  constructor(mes){
    this._meses = [
      'janeiro',
      'março',
      'maio',
      'julho',
      'agosto',
      'outubro',
      'dezembro',
    ]
    this.monthSelct = mes

  }
  get _meses(){
    return this._meses;
  }
  get monthSelct(){
    return this.monthSelct;
  }

}

class Agenda extends React.Component {
  state = {
    
    daysInMonth: 31, // Altere para o número de dias no mês atual
  };

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
    return (
      <div className='container__Agenda'>
        <div className='container__btn_option'>

        <h2>Calendário</h2>
        <select name="" id="selectMonth">
          <option value="'janeiro">Janeiro  </option>
          <option value="'fevereiro">Fevereiro  </option>
          <option value="'março">Março  </option>
          <option value="'maio">Abril  </option>
          <option value="'julho">Maio  </option>
          <option value="'agosto">Junho  </option>
          <option value="'outubro">Julho  </option>
          <option value="'dezembro">Agosto  </option>
          <option value="'dezembro">Setembro  </option>
          <option value="'dezembro">Outubro  </option>
          <option value="'dezembro">Novembro  </option>
          <option value="'dezembro">Dezembro  </option>
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