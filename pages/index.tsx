import Banner from "../src/components/banner";
import MenuSlider from "../src/components/slider-itens";
import { HomeContainer, MainContainer } from "../styles/home/styles";
import { CardItem } from "@/src/components/card-item";

export default function Home() {
    return(
        <HomeContainer>
            <Banner />
                <div style={{margin: 'auto'}}>
                    <h1>Nossos Produtos</h1>
                </div>
            <MainContainer>
                <CardItem />
            </MainContainer>
        </HomeContainer>
    )
}