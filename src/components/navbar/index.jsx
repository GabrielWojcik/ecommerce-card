import React, { useState, useContext, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { CiDiscount1 } from 'react-icons/ci';
import MenuMobile from "../menu/menu"
import Link from "next/link";
import { AuthContext } from '@/src/context/AuthContext';


export default function MenuMain() {
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [userLogged, setUserLogged] = useState();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        function loggedUser() {
            if(user) {
                setUserLogged(user)
            }
            else {
                console.log('nao esta logado')
            }
        }
        loggedUser()
    },[user])

    return(
        <>
        <header>
        <nav>
        <div className="container">
            <div className="container-navbar">
               <Link href="/">
                    <p className="logo">
                        Beauty
                    </p>
               </Link>
               <Link href="/primeira-compra">
               <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <p id="sacola" className="sac">
                        1 Compra
                    </p>
                </div>
                </Link>
               
               {/* <Link href="/mais-vendidos">
                    <p id="pagamento">
                        + Vendidos
                    </p>
                </Link> */}
               
               <Link href="/promocoes">
                    <div style={{display: 'flex', alignItems: 'center', gap: '5px', color:'#fff'}}>
                    <CiDiscount1 size={25} />
                    <p id="confirmacao">
                        Promoções
                    </p>
                    </div>
               </Link>

                <Link href="/carrinho">
                <div style={{display: 'flex', alignItems: 'center', gap: '5px', color:'#fff'}}>
                    <AiOutlineShoppingCart size={25} />
                    <p>
                        Carrinho
                    </p>
                </div>
                </Link>

                 {userLogged ? 
                    <Link href="/account">
                        <div style={{display: 'flex', alignItems: 'center', gap: '5px', color:'#fff'}}> 
                        <AiOutlineUser size={25} />
                            <p>
                                {user}
                            </p>
                        </div>
                    </Link> 
                    : 
                    <Link href="/login">
                        <div style={{display: 'flex', alignItems: 'center', gap: '5px', color:'#fff'}}>
                         <AiOutlineUser size={25} />
                        <p>
                            Entre na sua conta
                        </p>
                        </div>
                    </Link>
                 }
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