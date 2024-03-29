import CardItens from "@/src/components/card-itens";
import Banner from "../src/components/banner";
import { HomeContainer, MainContainer, Title} from "../styles/home/styles";
import { CardItem } from "@/src/components/card-item";
import Chips from "@/src/components/chips";
import Brands from "@/src/components/brands";

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
                <div className="flex flex-col justify-center items-center md:flex-row p-4 gap-5">
                    <Chips />
                </div>
                <div className="flex justify-center items-center">
                    <Brands />
                </div>

        </HomeContainer>
    )
}