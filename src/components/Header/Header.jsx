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
                <NavLink className="item-Faca-orcamento" to="Faça-um-orçamento">Faça um orçamento</NavLink>
                    
                </div>
            </div>
        </header>
    )


    
}
export default Header