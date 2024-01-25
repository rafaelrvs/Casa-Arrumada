

import { NavLink } from "react-router-dom"
import "./Home.css"
import Head from "../head/head"
const Home = () => {



    return (
        <div className="container-home">
         
        <Head title = "home"/>
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


                <div className="container-img">
                    <img id="img-2" src="./public/associação.png" alt="associação" />
                </div>

                <div className="container-img">
                    <img id="img-3" src="./public/download.png" alt="sancet" />
                </div>

                <div className="container-img">
                    <img id="img-1" src="./public/aruan.png" alt="aruan" />
                </div>




            </div>
     


        </div>




    )
}
export default Home