
import './Estoque.css';
import React,{useState} from 'react';
const outputDiv = document.getElementById('output');



class ListToStoke{
constructor(product){
  this._listProduct=  product;
}
get listProduct(){
  return this._listProduct;
}
set listProduct (value){
  this._listProduct = value;
}

}

const Estoque = () =>{
  const [valueToQuery,setValueToQuery] = useState('')

  const handlerSetValue = (event) =>{
    const newValueInList = new ListToStoke(valueToQuery)
  
    console.log(newValueInList.listProduct)
    
    event.preventDefault()
  }

  const handlerSetValueInVariable = (event) =>{
    
    const captureValue = event.target.value
    setValueToQuery(captureValue)
    event.preventDefault()
  }
  return(
    <div className="estoque-container">
        <form onSubmit={handlerSetValue} action="">
          <h1>Estoque</h1><br />
          <input onChange={handlerSetValueInVariable} value={valueToQuery} type="text" placeholder='Nome do produto' />
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
          <div className='content-btn'>

          <input type="submit" value="Adicionar"  id='btn'/>
            <p  >Consultar</p>
            <p>Remover</p>
          </div>
       
        </form>
    </div>
  )
}
export default Estoque