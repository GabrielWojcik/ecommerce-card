import CardItens from "@/src/components/card-itens";
import Banner from "../src/components/banner";
import MenuSlider from "../src/components/slider-itens";
import { HomeContainer, MainContainer, Title} from "../styles/home/styles";
import { CardItem } from "@/src/components/card-item";

export default function Home() {
    return(
        <HomeContainer>
            <Banner />
                <Title>
                    <h1>Nossos Produtos</h1>
                </Title>
                {/* <div style={{margin: 'auto', backgroundColor:'#dbead5', width: '100%'}}>
                    <h1>Nossos Produtos</h1>
                </div> */}
            <MainContainer>
                <CardItens />
                {/* <CardItem /> */}
            </MainContainer>
        </HomeContainer>
    )
}