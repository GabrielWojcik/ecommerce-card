import { Code, ContainerDescribe, ContainerPrimeiraCompra, CupomContainer, Describe, TextDescribe, ContainerCards } from "./styles";
import Cell from "../../assets/app.svg";
import CardItens from "../card-itens/index"
export default function PrimeiraCompra() {
    return(
        <ContainerPrimeiraCompra>
            <CupomContainer>
                <Describe>
                    <strong>Aprovite 10% OFF Na Sua Primeira Compra!</strong>
                    <p>Válido Apenas Para A Primeira Compra, Para Itens Dessa Página
                    E Não Cumulativo Com Lançamentos E Promoções.
                    </p>
                </Describe>
                <Code>
                    <button id="btn-codigo">CUPOM: BEMVINDO10</button>
                    <button id="btn-copy">COPIAR</button>
                </Code>
            </CupomContainer>
            <ContainerDescribe>
                <TextDescribe>
                    <strong>
                        Cupom Beauty: Desconto na Primeira Compra
                    </strong>
                    <p>
                    É novo por aqui? Então, temos uma surpresa! Que 
                    tal garantir desconto extra na sua primeira compra? 
                    Escolha entre os produtos selecionados nesta página e 
                    utilize o cupom no carrinho.Receba sua compra em casa e com segurança.
                    </p>
                </TextDescribe>
            <img src={Cell} />
            </ContainerDescribe>
            <ContainerCards>
                <CardItens />
                <CardItens />
            </ContainerCards>
        </ContainerPrimeiraCompra>
    )
}