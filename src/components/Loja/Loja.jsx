import Produtos from "../Produtos/Produtos"
import "./Loja.css"

const Loja =({loja,lojastatus})=>{

    function disableStore(){
        lojastatus = false
        
    }


    return(
        <div className="containerloja"> 
            <input type="button" value="voltar"  onClick={disableStore}/>
            <h1>{loja.target.alt}</h1>
            <img src={loja.target.src} alt="img" />
      

        </div>
    )
}
export default Loja