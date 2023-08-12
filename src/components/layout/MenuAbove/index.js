import { useState } from 'react'
import './MenuAbove.css'
import Relogio from '../../Itens/Relogio'
import Estoque from '../../Itens/Estoque'
import SelectField from '../SelectedField'
const MenuAbove =()=>{
  const [activeWacthPresentation,setActiveWacthPresentation] = useState(false)
  const [activeStockPresentation,setActiveStockPresentation] = useState(false)
  const [activeFieldBackground,setActiveFieldBackground] = useState(false)


  function activeWacth(event){
  setActiveWacthPresentation(true)
  setActiveStockPresentation(false)
  setActiveFieldBackground(false)
  event.preventDefault()
}
function activeStock(event){
  setActiveStockPresentation(true)
  setActiveWacthPresentation(false)
  setActiveFieldBackground(true)
  event.preventDefault()
}




  return(
    <div className="container-menuAbove">
      <section>
      <p onClick={activeWacth}>Descanso</p>
      <p onClick={activeStock}>Estoque</p>
      <p>Agenda</p>
      <p>Avisos</p>
      <p>Anotação</p>
      {activeWacthPresentation&&<Relogio/>}
      {activeStockPresentation&&<Estoque/>}
      {activeFieldBackground&&<SelectField/>}
      </section>
    </div>
  )
}
export default MenuAbove