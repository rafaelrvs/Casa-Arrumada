
import './Estoque.css';
import React,{useState} from 'react';




class ListToStoke{
constructor(product,descricao){

  this.produto = product;
 this.descricao = descricao;

}

}

const Estoque = () =>{
  const [produto,setProduto] = useState('')
  const [descricao,setDescricao] = useState('')

  const handlerSetValue = (event) =>{
   
    const List  = new ListToStoke(produto,descricao);
    console.log(List)
    event.preventDefault()
  }

  const handlerSetValueInVariable = (event) =>{
    
    const captureValue = event.target.value
    setProduto(captureValue)
    event.preventDefault()
  }
  const handlerSetDescription = (event) =>{
   const captureValue = event.target.value
   setDescricao(captureValue)

  event.preventDefault();
 }

 function ativarConsulta(){
  
 }
  return(
    <div className="estoque-container">
        <form onSubmit={handlerSetValue} action="">
          <h1>Estoque</h1><br />
          <input onChange={handlerSetValueInVariable} value={produto} type="text" placeholder='Nome do produto' />
          <textarea  onChange={handlerSetDescription} name="description" id="description" cols="30" rows="10"></textarea>
          <div className='content-btn'>

          <input type="submit" value="Adicionar"  id='btn'/>
            <p onClick={ativarConsulta} >Consultar</p>
            <p>Remover</p>
          </div>
       
        </form>
    </div>
  )
}
export default Estoque