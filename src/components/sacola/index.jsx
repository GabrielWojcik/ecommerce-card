import Pagameto from "../pagamento";
import Produtos from "../produtos";
import './styles.css';

export default function Sacola() {
    return(
        <div className="container-main">
            <Produtos />
            <Pagameto />
        </div>
    )
}