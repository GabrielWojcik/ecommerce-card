import { render, screen } from "@testing-library/react";
import CardItens  from "../../components/card-itens/index";

describe('Verify render <CardItens /> in home', () => {
    it('should render "COMPRE AGORA" button in CardItens component', () => {
        render(<CardItens />);
        
        const buyButton = screen.getByTestId('price');
        expect(buyButton).toBeInTheDocument();
    });
});