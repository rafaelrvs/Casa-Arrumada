import { useState } from "react"
import "./Produto.css"
import Head from "../head/head"
import Loja from "../Loja/Loja"


const Produtos = () => {
  const [atributoClicado, setAtributoClicado] = useState("")
  let [activeStore, setActiveStore] = useState(false)
  const produtos = [
    {
      id: "1",
      src: "https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
      valor: "RS: 10.59",
      descricao: "Lampada",
    },
    {
      id: "2",
      src: "https://th.bing.com/th/id/OIP._RHk5OpPkIVa34tjO1oFjAHaLB?w=136&h=203&c=7&r=0&o=5&pid=1.7",
      valor: "RS: 1.59",
      descricao: "Tomada",
    },
    {
      id: "3",
      src: "https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
      valor: "RS: 10.59",
      descricao: "Lampada",
    },
    {
      id: "4",
      src: "https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
      valor: "RS: 15.59",
      descricao: "Lampada",
    },
    {
      id: "5",
      src: "https://th.bing.com/th/id/OIP._RHk5OpPkIVa34tjO1oFjAHaLB?w=136&h=203&c=7&r=0&o=5&pid=1.7",
      valor: "RS: 5.59",
      descricao: "Tomada",
    },
    {
      id: "6",
      src: "https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
      valor: "RS: 15.59",
      descricao: "Lampada",
    },
    {
      id: "7",
      src: "https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
      valor: "RS: 25.59",
      descricao: "Lampada",
    },
    {
      id: "8",
      src: "https://th.bing.com/th/id/OIP._RHk5OpPkIVa34tjO1oFjAHaLB?w=136&h=203&c=7&r=0&o=5&pid=1.7",
      valor: "RS: 5.59",
      descricao: "Tomada",
    },


  ]




  function handleClick(element) {

    const atributoClicado = element

    setAtributoClicado(atributoClicado)
    setActiveStore(true)


  }


  return (
    <div className="container-product" onClick={handleClick}>
 


      
      <Head title="Produtos" />

      <h1>Loja Casa Arrumada:</h1>
      <div className="content-product"  >
        {produtos.map(produto => (

          <div className="container-produto">
            <p>Clique </p>
            <img id="img-produto" src={produto.src} alt={produto.descricao} />
            <p>{produto.descricao}</p>
            <p id="preco" >{produto.valor}</p>
        
          </div>
        ))}
      </div>
      {activeStore&&<Loja loja={atributoClicado} lojastatus={activeStore} />}

    </div>

  )
}
export default Produtos