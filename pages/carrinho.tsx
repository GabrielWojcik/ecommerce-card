import Image from "next/image";
import Img from "../images/perfume-1.jpg";
import { BiPlusCircle } from 'react-icons/bi';
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "@/src/context/ShopContext"
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { Container, SectionTitle, Box, ProductDetails, ProductAmount, 
ContainerInput, Value, Body, ValueContainer, PixBox, BoxPayment, ContainerButton, 
StyledButton } from "../styles/cart/styles"
import InputComponent from "@/src/components/input/input";
import ButtonComponent from "@/src/components/button-component/buttom";

export default function Carrinho() {
    
    const { item } = useContext(ShopContext);

    const [addItem, setAddItem] = useState<number>(0);
    
    useEffect(() => {
        console.log('item carrinho', item)

        if(item) {
            console.log('item', item)
        }
    },[item])

    const handleIncrement = () => {
        setAddItem(addItem + 1);
    }

    const handleDecrement = () => {
        setAddItem(addItem - 1);
    }

    return(
        <>
            <SectionTitle>
                <p>
                    SELECIONE O ENDEREÇO
                </p>
                
                <div className="container-cep">
                    <InputComponent 
                        placeholder="Digite o CEP"
                    />
                    <ButtonComponent 
                    active
                    > 
                        OK 
                    </ButtonComponent>
                </div>

            </SectionTitle>

            <Body>
            <Container>
                <Box>
                    <Image id="img-item"  alt="" src={Img} width={100} height={90} />
                    
                    <ProductDetails>
                        <p>Perfume Eau de Parfum</p>
                        <p>R$ 190,00</p>
                        <p>Amadeirado</p>

                    </ProductDetails>
                    
                    <ProductAmount>
                        
                        <p>Quantidade</p>

                        <ContainerInput>
                            <input type="number" value={addItem} />
                            <BiPlusCircle 
                                size={25} 
                                color="green"
                                cursor="pointer"
                                onClick={handleIncrement}
                            />
                            <IoIosRemoveCircleOutline 
                                size={25} 
                                color="red" 
                                cursor="pointer"
                                onClick={handleDecrement}
                            />
                        </ContainerInput>

                    </ProductAmount>

                </Box>

            </Container>

            <Value>
                <ValueContainer>
                    <p className="title">Resumo</p>
                    <div className="container-box">
                        <p className="text-box">Valor dos Produtos: </p>
                        <span>R$ 625,00</span>
                    </div>
                    <hr></hr>
                    <div className="container-box">
                        <p className="text-box">Frete: </p>
                        <span>R$ 625,00</span>
                    </div>
                    <div className="container-box">
                        <p className="text-box">Total à prazo: </p>
                        <span>R$ 625,00</span>
                    </div>
                </ValueContainer>

                <PixBox>
                    <BoxPayment>
                        <p>Valor à vista no Pix:</p>
                        <span>R$ 625,00</span>
                        <p>Economize: R$ 0,00</p>
                    </BoxPayment>
                </PixBox>

                <ContainerButton>
                    <StyledButton active>
                        IR PARA O PAGAMENTO
                    </StyledButton>
                    
                    <StyledButton>
                        CONTINUAR COMPRANDO
                    </StyledButton>
                </ContainerButton>

            </Value>
            </Body>
        </>
    )
}