
import Head from "../head/head"
import "./Servicos.css"


const Servicos = () => {



    return (
        <div className="Servicos-container">
            <Head title="Servico" />
            <div className="containerImg-Servico">
                <div>
                    <img  id="img1"  src="./public\images (2).jpg " alt="Eletrica" />
                    <p>Eletrica</p>

                </div>
                <div>
                <img  id="img2"  src="public\casa-capacete.jpg" alt="Eletrica" />
                    <p>Manutenção predial</p>
                </div>

                <div>
                <img  id="img3"  src="public\747-10.jpg" alt="Eletrica" />
                <p>Servoços de alvenaria e carpintaria</p>
                </div>
            </div>

        </div>




    )
}
export default Servicos