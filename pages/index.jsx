import Banner from "../src/components/banner";
import MenuSlider from "../src/components/slider-itens";
// import Slider from "../src/components/slider";
// import SliderItens from "../src/components/slider-itens";
import { HomeContainer } from "../styles/home/styles";
import { CardItem } from "@/src/components/card-item";
// import { PerfilContext } from "@/context/PefilContext";

export default function Home() {

//    const  { helloWord } = useContext(PerfilContext)
//    console.log('helloWord',helloWord)

    return(
        <HomeContainer>
            <Banner />
            <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
                <CardItem />
            </div>
            
        </HomeContainer>
    )
}