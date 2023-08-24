import "./styles.css";
import { useState } from 'react'
import Pagamento from "../pagamento/index"

export default function Cartao() {
    const [name, setName] = useState<string>()
    const [cardNumber, setCardNumber] = useState<string>('')
    const [cardDate, setCardDate] = useState<string>()
    const [cardCode, setCardCode] = useState<string>()


    return(
        <div className="main">
        <div className="container-main">
        <div className="container-dados">
            <div className="titulo-container">
                <p className="titulo">Cartão de Crédito</p>
            </div>
           <div className="container-campos">
                <label>Número</label>
                <input 
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="input-cartao" 
                type="number" 
                placeholder="xxxx xxxx xxxx xxxx"
                 />
           </div>
           <div className="container-campos">
                <label>Nome do titular do cartão</label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className="input-cartao" 
                type="text" 
                placeholder="Nome impresso no cartão"
                 />
           </div>
           <div className="container-campos-finais">
                <div className="data">
                    <label>Data de validade </label>
                    <input 
                    value={cardDate}
                    onChange={(e) => setCardDate(e.target.value)}
                    className="input-data" 
                    type="number" 
                    placeholder="dd/yy"
                     />
                </div>

                <div className="cvv">
                    <label>Código CVV:</label>
                    <input
                     value={cardCode}
                     onChange={(e) => setCardCode(e.target.value)}
                     className="input-cvv" 
                     type="number" 
                     placeholder="xxx"
                     maxLength={3}
                      />
                </div>
            
           </div>
        </div>
        </div>
        <Pagamento cardNumber={cardNumber} />
    </div>
    )
}