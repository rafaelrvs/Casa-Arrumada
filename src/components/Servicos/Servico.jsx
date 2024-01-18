import { useState, useEffect } from "react"

import "./Servico.css"

const Servico = () => {

    return (
        <div className="container-Servico">
     
            <div className="carrocel">

            <div className="conteudo-servico">
                <div className="container-servico1" >
                    <div>
                    <img id="img-servico1" src="public\images (2).jpg" alt="" />

                    </div>
                    <p id="paragrafo-servico" >Eletrica</p>
                </div>
                <div className="container-servico2" >
                    <div>
                    <img id="img-servico2" src="public\747-10.jpg" alt="" />

                    </div>
                    <p id="paragrafo-servico"  >Marcenaria</p>
                </div>
                <div className="container-servico3">
                    <div>
                    <img id="img-servico3" src="public\9fb53446dbb41e0497e4db028ceb8b7a.jpg" alt="" />

                    </div>
                    <p id="paragrafo-servico" >Hidraulica</p>
                </div>
                <div className="container-servico4">
                    <div>
                    <img id="img-servico3" src="public\images (1).jpg" alt="" />
                    </div>

                    <p id="paragrafo-servico">Consultoria</p>

                </div>
                <div className="container-servico5">
                    <img id="img-servico3" src="public\images.jpg" alt="" />
                    <div>
                        <p id="paragrafo-servico" >Construção civil</p>
                    </div>
                </div>
            </div>
            <hr id="linha" />
            <div>
                <p></p>
            </div>


            </div>
        </div>
    )
}
export default Servico