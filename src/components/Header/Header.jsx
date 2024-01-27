import "./Header.css"

import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
    return(
        <header>
            <div className="content-header">
                <div className="content-head">


                <img src="public/logo.jpg" alt="logo" id="logo" />
                <NavLink className="item" to="">Home</NavLink>
                <NavLink className="item" to="Servicos">Serviços</NavLink>
                <NavLink className="item" to="Produtos">Produtos</NavLink>
                <NavLink className="item-Faca-orcamento" to="Faca-um-orçamento">Faça um orçamento</NavLink>

                <div className="container-hamburger">
                    <div id="barra1" ></div>
                    <div id="barra2" ></div>
                    <div id="barra3" ></div>
                </div>
                    
                </div>
            </div>
        </header>
    )


    
}
export default Header