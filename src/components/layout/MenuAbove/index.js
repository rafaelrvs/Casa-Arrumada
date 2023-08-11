import { useState } from 'react'
import './MenuAbove.css'
import Relogio from '../../Itens/Relogio'
const MenuAbove =()=>{
  const [activeWacthPresentation,setActiveWacthPresentation] = useState(false)
function activeWacth(event){
  setActiveWacthPresentation(true)
event.preventDefault()
}
  return(
    <div className="container-menuAbove">
      <p onClick={activeWacth}>Descanso</p>
      <p>Estoque</p>
      <p>Agenda</p>
      <p>Avisos</p>
      <p>Anotação</p>
      {activeWacthPresentation&&<Relogio/>}
    </div>
  )
}
export default MenuAbove