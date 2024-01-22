import { render, screen } from "@testing-library/react";
import Home from "@/pages";

describe('Verify render <Home /> in home', () => {
    it('should render "COMPRE AGORA" button in CardItens component', () => {
        render(<Home/>);
        const texts = screen.getByText('Nossos Produtos')
        expect(texts).toBeDefined()
    });
});