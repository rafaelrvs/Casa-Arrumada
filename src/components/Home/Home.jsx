

import { NavLink } from "react-router-dom"
import "./Home.css"
const Home = () => {



    return (
        <div className="container-home">


            <div className="container-p">

                <p id="text">Somos especialista  em manutenção predial e Residencial</p>

                <div >
                    <NavLink className="item-saiba-mais" to="saiba-mais" >Saiba mais</NavLink>

                </div>

            </div>
            <div className="container-empresas-confiança">
                <br />
                <p>Empresas que confiam no nosso serviço: </p>

            </div>


            <div className="container-empresas-img">
                <div className="container-img-main">
                </div>

                <div className="container-img">
                    <img id="img-3" src="./public/download.png" alt="sancet" />
                </div>
                <div className="container-img">
                    <img id="img-2" src="./public/associação.png" alt="associação" />
                </div>
                <div className="container-img">
                    <img id="img-1" src="./public/aruan.png" alt="aruan" />
                </div>
                



            </div>

            <footer className="footer-home">
                
               <div className="container-logo-footer" >
                 <img id="img" src=".\public\logo.jpg" alt="Logo" />
               </div>

               <p>Parceria</p>
               <p>Sujestões</p>
               <div>
                <p>Ligue:</p>
                     <p>+55 11 99847-7201</p>
               </div>
            </footer>






        </div>




    )
}
export default Home