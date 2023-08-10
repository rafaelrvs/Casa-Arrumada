import './SelectedField.css'
const backPage =(event)=>{
  window.location.reload()
  event.preventDefault()
}
const SelectField =()=>{
return(
  <div className='campo__Selecionado'>
    <header onClick={backPage}>X</header>
   
  </div>
)
}
export default SelectField