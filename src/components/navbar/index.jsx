import React, { useState, useContext, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { CiDiscount1 } from 'react-icons/ci';
import Link from "next/link";
import { AuthContext } from '@/src/context/AuthContext';
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiddenMenu, HiddenCLose, Sections } from "../../../styles/navbar/styles";
import { IoPricetagOutline } from "react-icons/io5";
import { ShopContext } from "@/src/context/ShopContext";
import { MdOutlineShoppingBag, MdFavoriteBorder } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";

 
export default function MenuMain() {
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [userLogged, setUserLogged] = useState();
    const { user } = useContext(AuthContext);
    const { item } = useContext(ShopContext)

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
        const dataLocalStorage = JSON.parse(localStorage.getItem('userDataLogged'));
    },[user, userLogged])

    return(
        <>
        <header>
        <nav>
        <div className="hidden md:flex">
            <div className="flex fixed bg-pink-600 w-screen h-14 py-3 justify-around items-center">
               <Link href="/">
                    <p className="m-0 text-4xl cursor-pointer text-white">
                        Beauty
                    </p>
               </Link>
               <Link href="/primeira-compra">
               <div className="flex items-center gap-1 text-white">
                    <IoPricetagOutline size={25} />
                    <p>
                        Compra
                    </p>
                </div>
                </Link>
              
               
               <Link href="/promocoes">
                    <div className="flex items-center gap-1 text-white">
                        <CiDiscount1 size={25} />
                        <p>
                            Favoritos
                        </p>
                    </div>
               </Link>

                <Link href="/carrinho">
                <div className="flex items-center gap-1 text-white">
                    <AiOutlineShoppingCart size={25} />
                    <strong>
                        {item.length}
                    </strong>
                    <p>
                        Carrinho
                    </p>
                </div>
                </Link>

                 {userLogged ? 
                    <Link href="/account">
                        <div className="flex items-center gap-1 text-white">
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
                        <div className="flex items-center gap-1 text-white">
                            <AiOutlineUser size={25} />
                            <p>
                                Entre na sua conta
                            </p>
                        </div>
                    </Link>
                 }
            </div>
        </div>
        <div className="flex items-center w-full justify-between bg-pink-600 p-4 md:hidden">
            <div className="flex items-center gap-1 text-white">
                <div  onClick={() => setIsActiveMenu(true)}>
                    <IoMenuOutline size={30} color="#FFF" />

                </div>
                <div>
                    <Link href={"/"}>
                        <p className="logo">Beauty</p>
                    </Link>
                </div>
                <div style={{display: 'flex'}}>
                    <Link href={"/carrinho"}>
                        <div>
                            <MdOutlineShoppingBag size={30} color="#FFF" />
                            <strong style={{color: "#FFF"}}>
                                {item.length}
                            </strong>
                        </div>
                    </Link>                    
                    <div>

                        <MdFavoriteBorder size={30} color="#FFF" />
                    </div>
                </div>
           </div>
           
           {
            userLogged ? (
            <>
                <div className="container-text-icon">
                    <Link href="/account">
                            <BiUserCircle size={25} color="#FFF" />
                            <p>Perfil</p>
                    </Link>
                </div>
                <div className="container-text-icon">
                        <RxHamburgerMenu 
                        size={25} 
                        color="#FFF" 
                        onClick={() => setIsActiveMenu(true)} 
                        />
                </div>
            </>
            )
            :
            (
                <></>
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