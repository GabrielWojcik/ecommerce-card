import "./styles.css";
import Produtos from "../produtos/index";
import Pagameto from "../pagamento";


export default function Confirmacao() {
    return(
        <>
            <div className="container-main-sucesso">
                <div className="container-dados-sucesso">
                <div className="titulo-sucesso">
                        <p id="titulo">Compra efetuada com sucesso</p>
                        <div className="informacoes-extras">
                            <p>****.****.****.4545</p>
                            <p>Bruce Wayne</p>
                            <p>02/2027</p>
                        </div>
                </div>
                
                    
                </div>
            </div>
            <div className="container-main-confirmacao">
                <Produtos />
                <Pagameto />
            </div>
        </>
    )
}