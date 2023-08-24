import { useEffect, useState } from "react";
import { ContainerItens, ContainerSliderItens, Box } from "./styles";
import { MdFavoriteBorder } from 'react-icons/md'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function SliderItens() {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true
      })
    const [ data, setData ] = useState([])

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
        <ContainerSliderItens ref={ref} className="keen-slider">
            {
                data?.map((item, index) => {
                    return(
                        <ContainerItens key={index} className="keen-slider__slide number-slide1">
                            <Box>
                            <img
                            className="img-responsive" 
                            src={item.product.imageObjects[0].thumbnail} 
                            alt=""  
                            />
                                
                            <p>{item.product.name}</p>
                            
                            <button> 
                                R$ {item.product.priceSpecification.price} <MdFavoriteBorder size={15} />
                            </button>
                            </Box>
                        
                        </ContainerItens>
                            )
                        })
                    }
        </ContainerSliderItens>
    )
}