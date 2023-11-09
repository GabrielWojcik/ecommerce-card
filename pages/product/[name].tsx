import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { PRODUCTS } from "@/src/data/products"
import Assessment from "@/src/components/Product-Assessment"
import ItemDescription from "@/src/components/Item-Description/ItemDescription"
import { ContainerItem, CardImage, ContainerImage, ContainerDescription, ContainerMain } from "@/styles/product/styles"
import { ShopContext } from "@/src/context/ShopContext"
import { useContext } from "react"
import Link from "next/link"

export default function Product() {
    const {item, setItem} = useContext(ShopContext);



    const[data, setData] = useState<any>()
    const router = useRouter()
    const productRouter = router.query.name

    

    useEffect(() => {
        const filterProduct = PRODUCTS.filter(name => name.name === productRouter)
        setData(filterProduct)
        // console.log('item', item);
    },[data, productRouter])

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
                            <h1 id="title-name">{item.name}</h1>
                            <p>{item.brand}</p>
                            <p id="price">R$ {item.price}</p>
                            <p id="points">Ganhe 190 pontos no <span>Clube Beauty</span>  com esse produto!</p>
                            <button>Compre</button>

                            <Link href="carrinho">
                                    <p onClick={() => setItem(router.query.name)}>
                                        Adicionar ao Carrinho
                                    </p>
                                {/* <button onClick={() => setItem(router.query.name)}>
                                    Adicionar ao Carrinho
                                </button> */}
                            </Link>
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