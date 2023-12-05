import { ContainerBanner, SectionTitle,  ContainerTitle } from "./styles"
import BannerBlack from "../../assets/banner-black.jpg";
import Image from "next/image";

export default function Banner() {
    return(
        <ContainerBanner>
            <Image src={BannerBlack} alt="" />
            <SectionTitle>
                <h1>Cupom de Desconto Beauty <br></br>
                    até <span>50% OFF</span>
                </h1>
            </SectionTitle>

            {/* <ContainerTitle>
                <h1>Nossos Produtos</h1>
            </ContainerTitle> */}
        </ContainerBanner>
    )
}