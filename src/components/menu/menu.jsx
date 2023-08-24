import React, { useEffect, useState } from "react"
import { MenuMobileContainer, MenuList } from "./styles"


export default function MenuMobile({menuActive}) {
    const [isActiveMenu, setIsActinveMenu] = useState(false)
    useEffect(() => {
        if(isActiveMenu){
            menuActive(false)
        } 
            
    },[isActiveMenu])

    return(
        <MenuMobileContainer>
            <strong onClick={() => setIsActinveMenu(true)} >X</strong>
            <MenuList>
                <ul>
                    <li>Sacola</li>
                    <li>Confirmação</li>
                    <li>Pagamento</li>
                </ul>
            </MenuList>
        </MenuMobileContainer>
    )
}