import './SelectedField.css'
const backPage =(event)=>{
  window.location.reload()
  event.preventDefault()
}
const SelectField =()=>{
return(
  <div className='campo__Selecionado'>
    <div className='backPage__container'>
    <img  onClick={backPage} id='closePage' src="../img/xis.svg" alt="close Page" />
     
    </div>
  </div>
)
}
export default SelectField