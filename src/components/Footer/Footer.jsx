import "./Footer.css"


const Footer =()=>{
    return(
        <footer className="footer-main">
            <div className="content">
                <div className="logo"><img src="./public/logo.jpg" alt="" /></div>
                <div className="textCompany">
                    <h1>Compania</h1>
                    <p>Historia</p>
                    <p>Missão</p>
                    <p>Metas</p>
                    <p>Parcerias</p>
                </div>
                <div className="servicos">
                    <h1>Serviços</h1>
                    <p>Hidraulica</p>
                    <p>Eletrica</p>
                    <p>Reforma</p>
                    <p>Coomercio</p>
                    <p>Residencia</p>
                    <p>Consultoria</p>
                </div>

                <div className="redeSociais">
                        <h1>Contato</h1>
                        <p> 11 9 9847-7201</p>
                        <div>
                            <img id="img-whats" src="./public\whatsapp-logo-1.png" alt="" />
                            <img id="img-whats" src="public\Xlr-instagram.svg.png" alt="" />
                            <img id="img-whats" src="public\Facebook_f_logo_(2019).svg" alt="" />
                            </div>
                      
                </div>
            </div>
        </footer>
    )
}
export default Footer