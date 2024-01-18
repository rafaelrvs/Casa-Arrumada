import { NavLink } from "react-router-dom"
import "./Home.css"


const Home = () =>{



    return(
        <div className="container-home">
           <div className="container-img">
            <div>
                <h6>Serviços</h6>
                <h1>Manutenção predial, Residencial, Comercio e Condominio</h1>
                <NavLink className="SaibaMaisBtn" to="Saiba mais">Saiba mais</NavLink>
            </div>



           </div>
            <footer className="container-footer-home" >

                <h2>Serviços prestados para: </h2>
                <div className="carrocel-clientes">
                    <div className="carrocel-1"><img src="public\img\download.png" alt="sancet" /></div>
                    <div className="carrocel-2"><img src="public\img\associação.png" alt="associação" /></div>
                    <div className="carrocel-3"><img src="public\img\aruan.png" alt="aruan" /></div>

                <div className="rodaPe" >
                </div>
                </div>

            </footer>




        </div>
    )
}
export default Home