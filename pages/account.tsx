import { AuthContext } from "@/src/context/AuthContext";
import { useContext } from "react";
import { ContainerMainAccount, AcconuntLogged, AccountInfomation } from "@/styles/account";
import { AiOutlineInbox} from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import FormAddres from "@/src/components/FormAddress";

export default function Profile() {
   const { user } = useContext(AuthContext);


    return(
        <ContainerMainAccount>
            <AcconuntLogged>
            <ul>
                <li><BsHouseDoor/> Meus Endereços</li>
                <li><AiOutlineInbox/> Meus Pedidos</li>
                <li><MdManageAccounts/> Meus Dados</li>
                <li><BiHelpCircle/> Ajuda</li>
            </ul>
            </AcconuntLogged>
            <AccountInfomation>
                <FormAddres />

            </AccountInfomation>
        </ContainerMainAccount>
    )
}