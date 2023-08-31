
import DecimoTerceiro from '../SelectModels/DecimoTerceiro'
import Ferias from '../SelectModels/Ferias'
import HoraExtra from '../SelectModels/HoraExtra'
import SalarioMensal from '../SelectModels/SalarioMensal'
import SelectField from '../SelectedField'
import  './SideBox.css'
import React,{useState} from 'react'


class DisableContent{

}


const SideBox = () =>{
  const [selectFieldPage, setSelectFieldPage] = useState(false)
  const [selectFieldPageHoraExtra, setselectFieldPageHoraExtra] = useState(false)
  const [selectFieldPageFerias, setSelectFieldPageFerias] = useState(false)
  const [selectFieldPageCalculoSalario, setSelectFieldPageCalculoSalario] = useState(false)
  const [showDecimoTerceiro, setShowDecimoTerceiro] = useState(false)
 

  
  const showWege=(event)=>{
    setSelectFieldPage(true)
    setSelectFieldPageCalculoSalario(true)
    setSelectFieldPageFerias(false)
    setselectFieldPageHoraExtra(false)
    setShowDecimoTerceiro(false)
    
    event.preventDefault()
  }
  const showVacation =(event)=>{
    setSelectFieldPage(true)
    setSelectFieldPageFerias(true)
    setSelectFieldPageCalculoSalario(false)
    setShowDecimoTerceiro(false)
    setselectFieldPageHoraExtra(false)

    event.preventDefault()
  }
  const calculoHoraExtra = (event) =>{
    setSelectFieldPage(true)
    setselectFieldPageHoraExtra(true)
    setSelectFieldPageFerias(false)
    setSelectFieldPageCalculoSalario(false)
    setShowDecimoTerceiro(false)
    event.preventDefault()
  }
  const shoWdecimoTerceiroPresentation = (event)=>{
    setSelectFieldPage(true)
    setShowDecimoTerceiro(true)
    setselectFieldPageHoraExtra(false)
    setSelectFieldPageFerias(false)
    setSelectFieldPageCalculoSalario(false)
    event.preventDefault()
  }
  function handlerDisableBoxField(){
    SideBox.setSelectFieldPage(false)
    SideBox.setShowDecimoTerceiro(false)
    SideBox.setselectFieldPageHoraExtra(false)
    SideBox.setSelectFieldPageFerias(false)
    SideBox.setSelectFieldPageCalculoSalario(false)


  }

  return(
    <div className="container-box">
      <div className='container-img'>
      <img id='img' src="../img/casaArrumada.png" alt="logo" />

      </div>
     
      <div className="hora__extra">
        <p onClick={calculoHoraExtra} onMouseEnter={calculoHoraExtra}>Calcular Hora Extra</p>
      </div>
      <div className="salario__mensal">
        <p onClick={showWege}  onMouseEnter={showWege}>Calculo de salario mensal</p>
      </div>
      <div className="ferias">
        <p onClick={showVacation}  onMouseEnter={showVacation}>Calculo de ferias</p>
      </div>
  
      <div className='descimoTerceiro'>
        <p onClick={shoWdecimoTerceiroPresentation} onMouseEnter={shoWdecimoTerceiroPresentation}>Calculo do descimo terceiro</p>
      </div>
      {selectFieldPage && <SelectField/> }
      { selectFieldPageHoraExtra && <HoraExtra/> }
      { selectFieldPageFerias && <Ferias/> }
      {selectFieldPageCalculoSalario && <SalarioMensal/>}
      {showDecimoTerceiro && <DecimoTerceiro/>}
    </div>
  )
}
export default SideBox