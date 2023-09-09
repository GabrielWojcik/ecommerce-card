import { ContainerDescription } from "./Styles"

interface propsDescription {
    description: string
    productName: string
}


export default function ItemDescription(props: propsDescription) {
    return(
            <ContainerDescription>
                <h2>Descubra mais sobre o produto</h2>
                <p id="productName">{props.productName}</p>
                <p id="textProduct">{props.description}</p>
            </ContainerDescription>
    )
}