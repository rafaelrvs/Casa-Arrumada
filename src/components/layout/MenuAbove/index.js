import { useState } from 'react'
import './MenuAbove.css'
import Relogio from '../../Itens/Relogio'
import Estoque from '../../Itens/Estoque'
import SelectField from '../SelectedField'
import Agenda from '../../Itens/Agenda'
const MenuAbove =()=>{
  const [activeWacthPresentation,setActiveWacthPresentation] = useState(false)
  const [activeStockPresentation,setActiveStockPresentation] = useState(false)
  const [activeFieldBackground,setActiveFieldBackground] = useState(false)
  const [activeFieldAgenda,setactiveFieldAgenda] = useState(false)
  
  
  function activeWacth(event){
  setActiveWacthPresentation(true)
  setActiveStockPresentation(false)
  setActiveFieldBackground(false)
  setactiveFieldAgenda(false)
  event.preventDefault()

}
function activeStock(event){
  setActiveStockPresentation(true)
  setActiveFieldBackground(true)
  setActiveWacthPresentation(false)
  setactiveFieldAgenda(false)
  event.preventDefault()
}
function activeCalendar (event){
  setActiveFieldBackground(true)
  setactiveFieldAgenda(true)
  setActiveStockPresentation(false)
  event.preventDefault()
}




  return(
    <div className="container-menuAbove">
      <section>
      <p onClick={activeWacth}>Descanso</p>
      <p onClick={activeStock}>Estoque</p>
      <p onClick={activeCalendar}>Agenda</p>
      <p>Avisos</p>
      <p>Anotação</p>
      {activeWacthPresentation&&<Relogio/>}
      {activeStockPresentation&&<Estoque/>}
      {activeFieldBackground&&<SelectField/>}
      {activeFieldAgenda&&<Agenda/>}
      </section>
    </div>
  )
}
export default MenuAbove