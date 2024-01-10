import Image from "next/image"
import { CardItensContainer, ContainerProduct, Star,
Product, ProductDesc, ContainerFavorito, ContainerBtn} from "./styles"
import { MdFavoriteBorder, MdOutlineFavorite} from 'react-icons/md'
import { PRODUCTS } from "../../data/products"
import { useState } from "react"

export default function CardItens(){
    const [likeProduct, setLikeProduct] = useState(false);
    const [productLikeClick, setProductLikeClick] = useState('');

    function handleClick(idItem) {
        if (likeProduct && idItem === productLikeClick) {
            setLikeProduct(false)
            setProductLikeClick('')
        } else {
            setLikeProduct(true)
            setProductLikeClick(idItem)
        }
    }

    return(
        <>
        {
            PRODUCTS.map((value) => {
                return(
            <CardItensContainer key={value.id}>
                <ContainerFavorito>
                    <Star 
                    onClick={() => handleClick(value.id) }>
                        {
                            likeProduct  && value.id === productLikeClick ? (
                                <MdOutlineFavorite 
                                    size={18}  
                                    color="red" 
                                    cursor="pointer"
                                />
                            )
                            : (
                            <MdFavoriteBorder 
                                size={18} 
                                cursor="pointer"
                             />
                            )
                        }
                    </Star>
                </ContainerFavorito>
            
            <ContainerProduct>
                <Product>
                    <Image 
                        src={value.image} 
                        alt="" 
                        width={150} 
                        height={150} 
                    />
                </Product>
              
            </ContainerProduct>
            <ProductDesc>
                    <strong id="title">
                        {value.nome}
                    </strong>
                    {/* <p className="descricao">
                        {value.description}
                    </p> */}
                    <strong id="price">
                        R$ {value.price}
                    </strong>
                    <p data-testid="price" id="price-value">3x de R$ 22,97</p>
                    <p className="descricao">O Refil Creme Acetinado Desodorante Hidratante Corporal Lily 
                    entrega perfumação prolongada e fragrância intensa para sua pele na medida certa.</p>
                    <ContainerBtn>
                        <button>
                            COMPRE AGORA
                        </button>
                    </ContainerBtn>
                </ProductDesc>
        </CardItensContainer>
                )

            })
        }
        </>
        
    )
}