import "./styles.css";
import Button from "../button/index";

export default function  Pagameto( {cardNumber} ) {
    return(
        <div className="container-pagamento">
            <div className="pagamento-descricao">
                <div className="pagamento-titulo">
                    <p>Produtos: (3itens) </p>
                    <p>R$ 624,80</p>
                </div>
                
                <div className="pagamento-titulo">
                    <p>Frete:  </p>
                    <p>R$ 5,30</p>
                </div>

                <div className="pagamento-titulo">
                    <p>Desconto:  </p>
                    <p id="desconto">R$ 30.00</p>
                </div>

                <div id="subtotal" className="pagamento-titulo">
                    <p>Subtotal:  </p>
                    <p>R$ 600,10</p>
                </div>
                <Button cardNumber={cardNumber} >Seguir para o pagamento</Button>
            </div>
        </div>
    )
}