import { useState } from 'react'
import './MenuAbove.css'
import Relogio from '../../Itens/Relogio'
import Estoque from '../../Itens/Estoque'
import SelectField from '../SelectedField'
import Agenda from '../../Itens/Agenda'
import Anotacao from '../../Itens/Anotacao'
const MenuAbove =()=>{
  const [activeWacthPresentation,setActiveWacthPresentation] = useState(false)
  const [activeStockPresentation,setActiveStockPresentation] = useState(false)
  const [activeFieldBackground,setActiveFieldBackground] = useState(false)
  const [activeFieldAgenda,setactiveFieldAgenda] = useState(false)
  const [activeAnotacaoPresentation, setActiveFieldAnotacao] = useState(false)
  
  
  function activeWacth(event){
  setActiveWacthPresentation(true)
  setActiveStockPresentation(false)
  setActiveFieldBackground(false)
  setActiveFieldAnotacao(false)
  setactiveFieldAgenda(false)
  event.preventDefault()

}
function activeStock(event){
  setActiveStockPresentation(true)
  setActiveFieldBackground(true)
  setActiveWacthPresentation(false)
  setActiveFieldAnotacao(false)
  setactiveFieldAgenda(false)
  event.preventDefault()
}
function activeCalendar (event){
  setActiveFieldBackground(true)
  setactiveFieldAgenda(true)
  setActiveFieldAnotacao(false)
  setActiveStockPresentation(false)
  event.preventDefault()
}
function activeAnotacao (event){
  setActiveFieldBackground(true)
  setActiveFieldAnotacao(true)
  setactiveFieldAgenda(false)
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
      <p onClick={activeAnotacao}>Anotação</p>
      {activeWacthPresentation&&<Relogio/>}
      {activeStockPresentation&&<Estoque/>}
      {activeFieldBackground&&<SelectField/>}
      {activeFieldAgenda&&<Agenda/>}
      {activeAnotacaoPresentation&&<Anotacao/>}
      </section>
    </div>
  )
}
export default MenuAbove