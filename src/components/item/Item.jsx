import { ContainerMainItem, GridContainer, ImgMain, GridContainerSecondary, 
ImgSecondary, ContinerTitle } from "./Styles";
import ImgProduct from "../../assets/icons/img-product.png";
import ItemDescription from "../Item-Description/ItemDescription";

export default function Item() {
    return(
        <ContainerMainItem>
            <GridContainer>
                <ImgMain>
                    <img src={ImgProduct} alt="" />
                </ImgMain>
            </GridContainer>
            <GridContainerSecondary>

                    <ImgSecondary>
                        <img src={ImgProduct} alt="" />
                    </ImgSecondary>

                    <ImgSecondary>
                        <img src={ImgProduct} alt="" />
                    </ImgSecondary>

                    <ImgSecondary>
                        <img src={ImgProduct} alt="" />
                    </ImgSecondary>

            </GridContainerSecondary>

            <ContinerTitle>
                <h1>Kit Malbec: Desodorante Colônia 100ml + Gold Desodorante
                Colônia 50ml + Shower Gel 200g
                </h1>
                 <h2>
                    R$ 329,00
                 </h2>
                <button>Compre</button>
            </ContinerTitle>


        </ContainerMainItem>
    )
}