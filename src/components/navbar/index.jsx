import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MenuMobile from "../menu/menu"
import Link from "next/link";

export default function MenuMain() {
    const [isActiveMenu, setIsActiveMenu] = useState(false)
    
    return(
        <>
        <header>
        <nav>
        <div className="container">
            <div className="container-navbar">
               <p className="logo">
                    Beauty
                </p>
               <Link href="/primeira-compra">
                    <p id="sacola" className="sac">
                        Primeira Compra
                    </p>
                </Link>
               
               <Link href="/mais-vendidos">
                    <p id="pagamento">
                        + Vendidos
                    </p>
                </Link>
               
               <Link href="/promocoes">
                    <p id="confirmacao">
                        Promoções
                    </p>
               </Link>
                
                <Link href="/login">
                <p>
                    Entre na sua conta
                </p>
                </Link>

                <Link href="/carrinho">
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <AiOutlineShoppingCart size={25} />
                    <p>
                        Carrinho
                    </p>
                </div>
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