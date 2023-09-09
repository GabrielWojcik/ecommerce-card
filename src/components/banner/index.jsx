// import Banner3 from "../../assets/banners/banner-3.webp"
import Image from "next/image"
import Banner1 from "../../../images/perfume-1.jpg"
import { ContainerBanner, ContainerTitle } from "./styles"

export default function Banner() {
    return(
        <ContainerBanner>
            {/* <Image src={Banner1} alt="" /> */}
            <ContainerTitle>
                <h1>Nossos Produtos</h1>
            </ContainerTitle>
        </ContainerBanner>
    )
}