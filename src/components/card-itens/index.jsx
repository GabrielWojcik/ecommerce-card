import Image from "next/image"
import img1 from "../../assets/banner-black.jpg"
import { CardItensContainer, ContainerProduct, Star,
Product, ProductDesc, ContainerFavorito, ContainerBtn} from "./styles"
import { MdFavoriteBorder } from 'react-icons/md'
import { PRODUCTS } from "@/src/data/products"
import ButtonComponent from "../button-component/buttom"
// import { NavLink, useParams } from 'react-router-dom';


export default function CardItens(){
    return(
        <>
        {
            PRODUCTS.map((value) => {
                return(
            <CardItensContainer key={value.id}>
                <ContainerFavorito>
                    <Star>
                        <MdFavoriteBorder 
                            size={18} 
                            cursor="pointer"
                         />
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
                    <p id="price-value">3x de R$ 22,97</p>
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