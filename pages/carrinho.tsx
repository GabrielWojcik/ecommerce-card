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
import CepService from "../src/services/cep/apiServices";
import { BiMap } from "react-icons/bi";
import { BsHouseDoor, BsMailbox } from "react-icons/bs";


export default function Carrinho() {
    
    const { item } = useContext(ShopContext);

    const [addItem, setAddItem] = useState<number>(0);
    const [cep, setCep] = useState<string>('');
    const [dataCep, setDataCep] = useState({
        bairro: '',
        cep: '',
        complemento: '',
        ddd: '',
        gia: '',
        ibge: '',
        localidade: '',
        logradouro: '',
        siafi: '',
        uf: ''
      });
      const [priceDelivery, setPriceDelivery] = useState<boolean>(false);
    
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

    async function sendCep() {
        const data = await CepService.sendCep(cep);
        saveValues(data.bairro, data.cep, data.complemento, data.ddd, 
            data.localidade, data.logradouro, data.uf)
        setPriceDelivery(true)

    }

    function saveValues(bairro: string, cep: string, complemento: string, ddd: string,
         localidade: string, logradouro: string, uf:string) {
        setDataCep((prevEndereco) => ({
            ...prevEndereco,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            ddd: ddd,
            localidade: localidade,
            logradouro: logradouro,
            uf: uf
          }));
    }

    function randomValue() {
        const numeroAleatorio = Math.random() * 0.9 + 10;
        const numeroString = numeroAleatorio.toFixed(4); 
        const numeroEmReal = parseFloat(numeroString).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        });
        return numeroEmReal
    }

    return(
        <>
            <SectionTitle>
                <p>
                    SELECIONE O ENDEREÇO
                </p>
                
                <div className="container-cep">
                    <InputComponent 
                        value={cep}
                        onChange={(e:any) => setCep(e.target.value)}
                        placeholder="Digite o CEP"
                    />

                    <ButtonComponent 
                    active
                    onClick={() => sendCep()}
                    > 
                        OK 
                    </ButtonComponent>
                </div>

                <div className="container-address">
                    <p className="address">
                        <BsHouseDoor color="#FF005C" />   Endereço: {dataCep.logradouro}
                    </p>
                    
                    <p className="address">
                        <BiMap color="#FF005C" /> Cidade: {dataCep.localidade}
                    </p>
                    
                    <p className="address">
                        <BsMailbox color="#FF005C" />   UF: {dataCep.uf}
                    </p>
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
                        {
                            priceDelivery ?
                            <span>{randomValue()}</span>
                            :
                            null
                        }
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