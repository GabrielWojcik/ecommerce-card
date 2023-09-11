import Banner from "../src/components/banner";
import MenuSlider from "../src/components/slider-itens";
import { HomeContainer, MainContainer } from "../styles/home/styles";
import { CardItem } from "@/src/components/card-item";

export default function Home() {
    return(
        <HomeContainer>
            <Banner />
            <MainContainer>
                <CardItem />
            </MainContainer>
        </HomeContainer>
    )
}