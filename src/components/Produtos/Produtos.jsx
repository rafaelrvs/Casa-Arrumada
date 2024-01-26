import { useState, useEffect } from "react"

import "./Produto.css"
import Head from "../head/head"

const Produtos = () =>{
  
  const produtos = [
  {
    id:"1",
    src:"https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
    descricao:"Lampada",
  },
  {
    id:"1",
    src:"https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
    descricao:"Lampada",
  },
  {
    id:"1",
    src:"https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
    descricao:"Lampada",
  },
  {
    id:"1",
    src:"https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
    descricao:"Lampada",
  },
  {
    id:"1",
    src:"https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
    descricao:"Lampada",
  },
  {
    id:"1",
    src:"https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
    descricao:"Lampada",
  },
  {
    id:"1",
    src:"https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
    descricao:"Lampada",
  },
  {
    id:"1",
    src:"https://images.tcdn.com.br/img/img_prod/760588/180_kit_com_10_lampadas_bulbo_led_de_15w_6500k_branco_frio_bivolt_a60_e27_blumenau_1651_1_5c6a7095f38deed53900922df0e6f729.png",
    descricao:"Lampada",
  },
  

  ]
  function handleScroll(element) {
    // Obter a quantidade de elementos filhos no carrossel
    const quantidadeDeScroll = element.target.childElementCount;
  
    // Imprimir a quantidade no console
    console.log("Quantidade de elementos no carrossel:", element);
  }


    return(
        <div className="container-product">
          <Head title="Produtos"/>


          <div className="content-product" onScroll={handleScroll} >
            {produtos.map(produto =>(
              <div className="container-produto">
              <img id="img-produto" src={produto.src} alt={produto.descricao} />
              <p>{produto.descricao}</p>
              </div>
            ))}
            </div>
                    
      </div>
    )
}
export default Produtos