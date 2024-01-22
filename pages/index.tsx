import CardItens from "@/src/components/card-itens";
import Banner from "../src/components/banner";
import { HomeContainer, MainContainer, Title} from "../styles/home/styles";
import { CardItem } from "@/src/components/card-item";

export default function Home() {
    return(
        <HomeContainer>
            <Banner />
                <Title>
                    <h1>Nossos Produtos</h1>
                </Title>
            <MainContainer>
                <CardItens />
            </MainContainer>
        </HomeContainer>
    )
}