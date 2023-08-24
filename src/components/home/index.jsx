import Banner from "../banner";
import MenuSlider from "../menu-slider";
import Slider from "../slider";
import SliderItens from "../slider-itens";
import { HomeContainer } from "./styles";

export default function Home() {
    return(
        <HomeContainer>
            <Slider />
            <MenuSlider />
            <Banner />
            <SliderItens />
        </HomeContainer>
    )
}