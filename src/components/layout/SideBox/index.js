
import HoraExtra from '../SelectModels/HoraExtra'
import SelectField from '../SelectedField'
import  './SideBox.css'
import React,{useState} from 'react'




const SideBox = () =>{
  const [selectFieldPage, setSelectFieldPage] = useState(false)
  const [selectFieldPageHoraExtra, setselectFieldPageHoraExtra] = useState(false)

 
 
  const calculoHoraExtra = (event) =>{
    setSelectFieldPage(true)
    setselectFieldPageHoraExtra(true)
    event.preventDefault()
    
  }
  return(
    <div className="container-box">
      <div className="hora__extra">
        <p onClick={calculoHoraExtra}>Calcular Hora Extra</p>
      </div>
      <div className="salario__mensal">
        <p>Calculo de salario mensal</p>
      </div>
      <div className="ferias">
        <p>Calculo de ferias</p>
      </div>
  
      <div className='descimoTerceiro'>
        <p>Calculo do descimo terceiro</p>
      </div>
      {selectFieldPage && <SelectField/> }
      { selectFieldPageHoraExtra && <HoraExtra/> }
    </div>
  )
}
export default SideBox