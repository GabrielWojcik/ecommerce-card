import { AuthContext } from "@/src/context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { ContainerMainAccount, AcconuntLogged, AccountInfomation } from "@/styles/account";
import { AiOutlineInbox} from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import FormAddres from "@/src/components/FormAddress";
import FormOrder from "@/src/components/FormOrder";
import { useAsyncError } from "react-router-dom";

export default function Profile() {
   const { user } = useContext(AuthContext);

   const [activeAddress, setActiveAddress] = useState<boolean>(false);
   const [activeOrder, setActiveOrder] = useState<boolean>(false);

//    useEffect(() => {
//         if(activeAddress) {
//             setActiveOrder(false)
//         }
//         if(activeOrder) {
//             setActiveAddress(false)
//         }
//    },[activeAddress, activeOrder])

    return(
        <ContainerMainAccount>
            <AcconuntLogged>
            <ul>
                <li onClick={() => {
                    setActiveAddress(true)
                    setActiveOrder(false)
                } }><BsHouseDoor/> Meus Endereços</li>
                <li onClick={() =>{
                     setActiveOrder(true)
                     setActiveAddress(false)
                }}><AiOutlineInbox/> Meus Pedidos</li>
                <li><MdManageAccounts/> Meus Dados</li>
                <li><BiHelpCircle/> Ajuda</li>
            </ul>
            </AcconuntLogged>
            <AccountInfomation>
                {
                    activeAddress
                     ? 
                    <FormAddres />
                    :
                    null
                }
                {
                    activeOrder 
                    ?
                    <FormOrder />
                    :
                    null
                }

            </AccountInfomation>
        </ContainerMainAccount>
    )
}