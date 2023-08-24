import { useParams } from "react-router-dom"


export default function Product() {
    const { id } = useParams()
    console.log('id', id)


    return(
        <div>
            <p>Essa é a pagina de produtos de id {id}</p>
        </div>
    )
}