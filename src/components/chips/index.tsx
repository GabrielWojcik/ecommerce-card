import { BsTicketPerforated } from "react-icons/bs";
import { CgMathPercent } from "react-icons/cg";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { CiStar } from "react-icons/ci";

export default function Chips() {
    const chipsData = [
        {id:0, image: <BsTicketPerforated size={40} color="#f472b6" />, text: 'escolha seu cupom'},
        {id:2, image: <CgMathPercent size={40} color="#d97706"  />, text: 'outlet'},
        {id:3, image: <MdOutlinePhoneIphone size={40} color="#f472b6"  />, text: '+ deconto no APP'},
        {id:4, image: <MdFavoriteBorder size={40} color="#f472b6"   />, text: 'programa de afiliação'},
        {id:5, image: <CiStar size={40} color="#f472b6" />, text: 'lançamentos'},
    ]
    return(
       <>
       {
        chipsData.map(value => {
            return(
            <div key={value.id} className={`flex flex-col  md:flex-row justify-center items-center rounded border-2 cursor-pointer ${value.text === 'outlet' ? 'border-amber-600' : 'border-pink-500'} p-4 w-64 h-20 gap-5`}>
                <div className="flex justify-center items-center gap-5">
                    <div>
                        {value.image}
                    </div>
                    <div className={`${value.text === 'outlet' ? 'text-amber-600' : 'text-pink-500'}`}>
                        <p>{value.text}</p>
                    </div>
                </div>
            </div>     
            )
        })
       }
       </>
    )
}