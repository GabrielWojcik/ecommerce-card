import React, { useState, useContext, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { CiDiscount1 } from 'react-icons/ci';
import Link from "next/link";
import { AuthContext } from '@/src/context/AuthContext';
import { BiUserCircle, BiPurchaseTagAlt, BiLogIn } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiddenMenu, HiddenCLose, Sections } from "../../../styles/navbar/styles";
 
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
        console.log('userLogged', userLogged)
        const dataLocalStorage = JSON.parse(localStorage.getItem('userDataLogged'));

        console.log('dataLocalStorage', dataLocalStorage);
        console.log('user', user)

    },[user, userLogged])

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
                        {
                            user === 'undefined' ?
                            <p>
                                {dataLocalStorage}
                            </p>
                            :
                            <p>
                                {user}
                            </p>
                        }
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
           <p className="logo">Beauty</p>
           <div className="container-text-icon">
                <BiPurchaseTagAlt size={25} color="#FF005C" />
                <p>Descontos</p>
           </div>
           {
            userLogged ? (
            <>
                <div className="container-text-icon">
                    <Link href="/account">
                            <BiUserCircle size={25} color="#FF005C" />
                            <p>Perfil</p>
                    </Link>
                </div>
                <div className="container-text-icon">
                        <RxHamburgerMenu 
                        size={25} 
                        color="#FF005C" 
                        onClick={() => setIsActiveMenu(true)} 
                        />
                </div>
            </>
            )
            :
            (
                <div className="container-text-icon">
                        <Link href="/login">
                            <BiLogIn size={25} color="#FF005C" />
                            <p>Entrar / Sair</p>
                        </Link>
                </div>
            )
           }
          <div>
          </div>          

        </div>
        {
            isActiveMenu === true ?
            (   
                <>
                    <HiddenMenu>
                        <HiddenCLose>
                            <AiOutlineClose 
                            size={25} 
                            color="#FFF"
                            onClick={() => setIsActiveMenu(false)}
                            />
                         </HiddenCLose>
                         <Sections>
                                <ul>
                                    <li>Meus Pedidos</li>
                                    <li>Meus Endereços</li>
                                    <li>Minha conta</li>
                                </ul>
                         </Sections>


                    </HiddenMenu>
                </>
            )
            :
            null
          }

        </nav>
        </header>
        </>
    )
}