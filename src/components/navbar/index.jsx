// import "./styles.css";
import React, { useState } from "react";
// import { NavLink, useNavigate } from 'react-router-dom';

// import Menu from "../../assets/menu.png";
// import Favorite from "../../assets/favorite.png";
// import User from "../../assets/user.png";
import MenuMobile from "../menu/menu"
import Link from "next/link";
// import useRouterNavBar from "../../hooks/router";

export default function MenuMain() {
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    
    return(
        <>
        <header>
        <nav>
        <div className="container">
            <div className="container-navbar">
                <p className="logo">Beauty</p>
                <p id="sacola" className="sac">Favoritos</p>
                <p id="pagamento" >+ Vendidos</p>
                <p id="confirmacao" >Promoções</p>
                
                <Link href="/login">
                <p>
                    Entre na sua conta
                </p>
                </Link>
            </div>
        </div>

        <div className="container-navbar-mobile">
          <div className="menu">
                {/* <img 
                src={Menu} 
                alt="" 
                className="icon-header"
                onClick={() => setIsActiveMenu(true)}
                /> */}
          </div>
         
          
           <p className="logo">Beauty</p>
          <div>
                {/* <img src={Favorite} alt="" className="icon-header" />
                <img src={User} alt="" className="icon-header" /> */}
          </div>          

        </div>
        {
            isActiveMenu === true ?
                <MenuMobile menuActive={() => setIsActiveMenu()} />
            :
            null
          }

        </nav>
        </header>
        </>
    )
}