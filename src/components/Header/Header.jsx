import "./Header.css"

import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {

    const disableLogo =() =>{
        document.querySelector("#img").style.display="none"
    }
    const ativaLogo =() =>{
        document.querySelector("#img").style.display="flex"
    }

    return (
        <header className="container-center">
            <div className="container-header">

              <img id="img-logo" src="./public/img/logo.jpg" alt="logo" />
                <nav className="content-header" >
                    <NavLink className='item' to="/" onClick={ativaLogo}>Home</NavLink>
                    <NavLink className='item' to="Produtos" onClick={disableLogo}>Produtos</NavLink>
                    <NavLink className='item' to="Serviços"onClick={disableLogo}>Serviços</NavLink>
                    <NavLink className='item' to="Contatos"onClick={disableLogo}>Contatos</NavLink>

                
                </nav>
                <nav className="content-header teste">
                    <NavLink className='item cadastro'  to="Cadastro">Faça um orçamento</NavLink>
                </nav>
            </div>
        </header>
    )
}
export default Header