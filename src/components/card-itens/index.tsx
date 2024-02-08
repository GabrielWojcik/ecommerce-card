import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { CardItensContainer, ContainerProduct, Star,
Product, ProductDesc, ContainerFavorito, ContainerBtn} from "./styles"
import { MdFavoriteBorder, MdOutlineFavorite} from 'react-icons/md'
import { PRODUCTS } from "../../data/products"
import { Key, useState } from "react"
import { useContext } from "react"
import { ShopContext } from "@/src/context/ShopContext"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "sonner"

export default function CardItens(){
    
    const [likeProduct, setLikeProduct] = useState(false);
    const [productLikeClick, setProductLikeClick] = useState('');

    const { selectedItem } = useContext(ShopContext)

    function handleClick(idItem: any) {
        if (likeProduct && idItem === productLikeClick) {
            setLikeProduct(false)
            setProductLikeClick('')
        } else {
            setLikeProduct(true)
            setProductLikeClick(idItem)
        }
    }
    
    function activeSuccees() {
        toast.success('Item adicionado ao carrinho!')
    }

    return(
        <>
        {
            PRODUCTS?.map((value: {
                image: any,
                id: Key | null | undefined; 
                price: string,
                name: string,
                description: string
            }) => {
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
                        placeholder="blur"
                        src={value.image} 
                        alt={value.name} 
                        width={150} 
                        height={150} 
                    />
                </Product>
              
            </ContainerProduct>
            <ProductDesc>
                    <div>
                        <strong id="title">
                            {value.name}
                        </strong>
                    </div>
                    <strong id="price">
                        R$ {value.price}
                    </strong>
                    <p data-testid="price" id="price-value">3x de R$ 22,97</p>
                    <p className="descricao">
                       {value.description}
                    </p>
                    <ContainerBtn>
                    <Link key={value.id} href={`/product/${value.name}`}>
                        <button onClick={() => selectedItem(value.id)}>
                            COMPRE AGORA
                        </button>
                    </Link>
                    </ContainerBtn>
                    <ContainerBtn>
                        <strong 
                        role='button'
                        id="text-add-item"
                        onClick={() => {selectedItem(value.id),
                            activeSuccees()
                        }}
                        data-testid={`botao-${value.id}`}
                        >
                            Adicionar ao Carrinho
                        </strong>
                        <AiOutlineShoppingCart size={15} /> 
                    </ContainerBtn>
                </ProductDesc>
            </CardItensContainer>
                )
            })
        }
        </>
    )
}