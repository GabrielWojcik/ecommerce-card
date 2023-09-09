import { useRouter } from "next/router"
import { PRODUCTS } from "@/src/data/products"
import { useEffect, useState } from "react"
import Image from "next/image"
import { ContainerItem, CardImage, ContainerImage, ContainerDescription, ContainerMain } from "@/styles/product/styles"
import ItemDescription from "@/src/components/Item-Description/ItemDescription"
import Assessment from "@/src/components/Product-Assessment"

export default function Product() {
    const[data, setData] = useState<any>()
    const router = useRouter()
    const productRouter = router.query.name

    useEffect(() => {
        const filterProduct = PRODUCTS.filter(name => name.name === productRouter)
        setData(filterProduct)
    },[data])

    return(
        <>
        {data?.map((item: { name: any, image: any, 
        brand: string, price: number, description: string
         }) => {
            return (
                <ContainerItem key={item.name}>
                    <ContainerMain>
                        <ContainerImage>
                            <CardImage>
                                <Image src={item.image} alt="" layout="responsive" />
                            </CardImage>
                        </ContainerImage>
                        
                        <ContainerDescription>
                            <h1>{item.name}</h1>
                            <p>{item.brand}</p>
                            <p id="price">R$ {item.price}</p>
                            <p id="points">Ganhe 190 pontos no <span>Clube Beauty</span>  com esse produto!</p>
                            <button>Compre</button>
                            <button>Adicionar ao Carrinho</button>
                        </ContainerDescription>
                    </ContainerMain>

                    <ItemDescription 
                        description={item.description}
                        productName={item.name}    
                    />

                    <Assessment />



                </ContainerItem>
            )
        })} 
        </>

    )
}