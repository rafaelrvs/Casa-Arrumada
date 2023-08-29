import './SelectedField.css'
const backPage =(event)=>{
  window.location.reload()
  event.preventDefault()
}
const SelectField =()=>{
return(
  <div className='campo__Selecionado'>
    <img  onClick={backPage} id='closePage' src="../img/xis.svg" alt="close Page" />
  </div>
)
}
export default SelectField