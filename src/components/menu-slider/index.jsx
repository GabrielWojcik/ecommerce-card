import "./styles.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Desconto from "../../assets/icons/desconto.svg"
import PrimeiraCompra from "../../assets/icons/plus.svg"
import Favorito from "../../assets/icons/favorito.svg"
import Home from "../../assets/icons/casa.png"
import Phone from "../../assets/icons/phone.png"
import { NavLink } from 'react-router-dom';

export default function MenuSlider() {
    const icons = [
        {
            "id": 1,
            "text" : "Serviços em Loja",
            "icon" : Home
        },

        {
            "id": 2,
            "text" : "Primeira Compra",
            "icon" : PrimeiraCompra
        },
        {
            "id": 3,
            "text" : "Promoções",
            "icon" :  Desconto
        },
        {
            "id": 4,
            "text" : "WhatsApp",
            "icon" : Phone
        },
        {
            "id": 5,
            "text" : "Mais Vendidos",
            "icon" : PrimeiraCompra
        },
        {
            "id": 6,
            "text" : "Lançamentos",
            "icon" : Favorito
        },
    ]

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
          origin: "center",
          perView: 2,
          spacing: 15,
        },
      })

    return(
    <div ref={sliderRef} className="keen-slider">
        {
            icons.map(item => {
                return(
                        <div key={item.id} className="keen-slider__slide number-slide1">
                            <NavLink to="/cupom-de-desconto/primeira-compra" >
                                <div className="container-slider">
                                    <img src={item.icon} />
                                    {item.text}
                                </div>
                            </NavLink>
                        </div>
                )
            })
        }
    </div>       
    )
}