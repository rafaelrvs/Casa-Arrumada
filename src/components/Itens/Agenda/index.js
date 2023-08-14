import React from 'react';
import './Agenda.css';

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
        <h2>Calendário</h2>
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