import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/pages";
import CardItens from "@/src/components/card-itens";
import { ShopContext } from "@/src/context/ShopContext";

const mockSelectedItem = jest.fn()

const mockShopContext = {
    item: [],
    setItem: jest.fn(),
    selectedItem: jest.fn(),
    removeItem: jest.fn()
}

describe('Verify render <Home /> in home', () => {
    it('should render "Nossos Produtos" in component', () => {
        render(
        <ShopContext.Provider value={mockShopContext}>
            <Home/>
        </ShopContext.Provider>

        );
        const homeTitle = screen.getByText('Nossos Produtos')
        expect(homeTitle).toBeDefined()
    });

    it('should render CardItens in home component', () => {
        render(
            <ShopContext.Provider value={mockShopContext}>
                <CardItens />
            </ShopContext.Provider>
        )
    
        const botaoAdicionarAoCarrinho = screen.getByTestId('botao-1');
        expect(botaoAdicionarAoCarrinho).toBeDefined()

        fireEvent.click(botaoAdicionarAoCarrinho);

        expect(mockSelectedItem).toHaveBeenCalled();

    })
});