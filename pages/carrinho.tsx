import Image from "next/image";
import { BiPlusCircle } from 'react-icons/bi';
import { Key, useContext, useEffect, useState } from "react"
import { ShopContext } from "@/src/context/ShopContext"
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { Container, Box, ProductDetails, ProductAmount, 
ContainerInput, Value, Body, ValueContainer, PixBox, BoxPayment, ContainerButton, 
StyledButton, ContainerBox, ContainerOptionItem, PriceItem, ContainerImage } from "../styles/cart/styles"
import CepService from "../src/services/cep/apiServices";
import { PRODUCTS } from "@/src/data/products";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Carrinho() {
    const [itemInCart, setItemInCart] = useState<any>([]);
    const { item, removeItem } = useContext(ShopContext);

    const product = PRODUCTS;

    function addPriceProducts ( valuePrice: any ) {
        let sum = 0;
        valuePrice.forEach((product: { price: string; }) => {
            const priceProduct = parseFloat(product.price.replace(',', '.'))
            if (!isNaN(priceProduct)) {
                sum += priceProduct
            }
        })
        return sum
    }

    const somaTotal = addPriceProducts(itemInCart);
    useEffect(() => {
        const findItems = product.filter(value => item.includes(value.id))
        setItemInCart(findItems)
    },[item, product])

    const [addItem, setAddItem] = useState<number>(itemInCart.length);
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

    function handleDeletedItem(id:any) {
        removeItem(id)
    }

    return(
        <>
            <Body>
            <Container>
                {
                    itemInCart.length === 0 ?
                        <div style={{display: 'flex', gap: '8px', color: "lightslategray"}}>
                            <AiOutlineShoppingCart size={25} />
                            <p>
                                 Seu Carrinho está vazio.
                            </p>
                        </div>                    
                    :
                    itemInCart?.map((value: {
                        value: string;
                        name: string;
                        image: any; id: Key | null | undefined; 
                        price: number,
                        brand: string,
                    }) => {
                        return(
                        <ContainerBox key={value.id}>
                            <Box>
                                <ContainerImage>
                                    <Image 
                                    id="img-item"  
                                    alt="" 
                                    src={value.image} 
                                    width={100} 
                                    height={90} 
                                    />
                                </ContainerImage>
                                <ProductDetails>
                                    <p id="title-product">{value.name}</p>
                                    <ContainerOptionItem>
                                        <p onClick={() => handleDeletedItem(value.id)}>
                                            Excluir
                                        </p>
                                        <p>Comprar</p>
                                    </ContainerOptionItem>
                                </ProductDetails>

                                <ProductAmount>
                                    <ContainerInput>
                                        <IoIosRemoveCircleOutline 
                                                size={25} 
                                                color="red" 
                                                cursor="pointer"
                                                onClick={handleDecrement}
                                            />
                                        <input type="number" value={addItem} />
                                        <BiPlusCircle 
                                            size={25} 
                                            color="green"
                                            cursor="pointer"
                                            onClick={handleIncrement}
                                        />
                                     
                                        {/* <button 
                                        onClick={() => removeItem(value.id)}>
                                            Remover
                                        </button> */}
                                    </ContainerInput>

                                </ProductAmount>

                                <PriceItem>
                                    <p>R${value.price}</p>
                                </PriceItem>
                            </Box>
                        </ContainerBox>
                        )
                    })
                }
            </Container>
            
            <Value>
                <ValueContainer>
                                <p className="title">Resumo da compra</p>
                                <div className="container-box">
                                    <p className="text-box">
                                      Produtos ({item.length}) 
                                    </p>
                                    <span>R$ {somaTotal.toFixed(2)}</span>
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
                                    <p className="text-box">Total </p>
                                    <span>R$ {somaTotal.toFixed(2)}</span>
                                </div>
                </ValueContainer>

                <PixBox>
                    <BoxPayment>
                        <p>Valor à vista no Pix:</p>
                        <span>R$ {somaTotal.toFixed(2)}</span>
                        {/* <p>Economize: R$ 0,00</p> */}
                    </BoxPayment>
                </PixBox>

                <ContainerButton>
                    <Link href={"/frete"} >
                        <StyledButton active>
                            Continuar a compra
                        </StyledButton>
                    </Link>
                    
                    {/* <StyledButton>
                        CONTINUAR COMPRANDO
                    </StyledButton> */}
                </ContainerButton>

            </Value>
            </Body>
        </>
    )
}