import "./styles.css"
import { useEffect, useState } from "react"

export default function Produtos() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function dataFetch() {
         const data = await fetch('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd',{
            method: 'GET', 
        })
        const response =  await data.json()
        setData(response.items)
        }
        dataFetch()
    },[])

    return(
        <div className="container-main">
            <div className="container-produtos">
                <div className="container-item">
                    {
                        data?.map((item, index) => {
                            return(
                                <div key={index} className="container-itens">
                                    <img
                                    className="img-responsive" 
                                    src={item.product.imageObjects[0].thumbnail} 
                                    alt=""  
                                    />
                                    <p>
                                        {item.product.name}
                                    </p>
                                    <p className="valor">
                                        R$ {item.product.priceSpecification.price}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}