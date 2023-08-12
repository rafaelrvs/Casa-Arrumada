
import './Estoque.css'

const Estoque = () =>{
  return(
    <div className="estoque-container">
        <form action="">
          <input type="text" placeholder='Nome do produto' />
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
          <div className='content-btn'>

          <input type="submit" value="Adicionar" />
            <p>Remover</p>
          </div>
       
        </form>
    </div>
  )
}
export default Estoque