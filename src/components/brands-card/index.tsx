import Image from "next/image"
import Wella from "../../assets/brands/wella.jpg"
import LogoWella from "../../assets/brands/logo-wella.svg"
import Mac from "../../assets/brands/mac.webp"
import LogoMac from "../../assets/brands/logo-mac.svg"
import QmDisse from "../../assets/brands/quem-disse-berenice.webp"
import LogoQmDisse from "../../assets/brands/logo-quem-disse-berenice.webp"
import Link from "next/link"

export default function BrandsCard() {
    const brands = [
        {id: 0, name: 'Wella Professionals', image: Wella, logo: LogoWella, url: '/wella-professionals'},
        {id: 1, name: 'M.A.C', image: Mac, logo: LogoMac, url: '/mac'},
        {id: 2, name: 'Quem Disse, Berenice', image: QmDisse, logo: LogoQmDisse, url: '/quem-disse-berenice'},
    ]

    return(
        <div className="flex flex-col items-center justify-around gap-5 w-full md:flex-row ">
            {
                brands.map(value => {
                    return(
                        <Link href={value.url} key={value.id}>
                        <div className="flex flex-col justify-center items-center rounded-xl w-56 bg-gray-100 cursor-pointer hover:shadow-lg hover:bg-gray-200 hover:scale-105">
                            <div className="w-full h-20 relative">
                                <Image src={value.image}  alt="logo-marca" className="rounded-xl"/>
                            </div>
                            <div className="absolute bg-white shadow-md border-black w-40 h-20 flex items-center justify-center rounded-md">
                                <Image src={value.logo} alt="logo-marca" />
                            </div>
                            <div className="p-4 mt-5">
                                <div className="mt-5">
                                    <strong>
                                        {value.name}
                                    </strong>
                                </div>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}