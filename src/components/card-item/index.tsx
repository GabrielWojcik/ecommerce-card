import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/src/data/products";
import { ContainerMain, ContainerCard, ContainerDescription, ContainerButton } from "./styles";

export function CardItem() {

    return(
        <>
        {
          PRODUCTS.map(item => {
               return(
                    <>
                    <Link key={item.name} href={`/product/${item.name}`}>
                    <ContainerCard>
                         <Image src={item.image} alt=""/>
                              <ContainerDescription>
                                   <p>{item.name}</p>
                                   <p>Valor R$ {item.price}</p>
                              </ContainerDescription>

                              <ContainerButton>
                                   <button>Compre</button>
                              </ContainerButton>
                    </ContainerCard>
                    </Link>
                    </>
               )
          })
        }
  </>
    )
}