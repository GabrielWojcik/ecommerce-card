import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import { ShopContext } from "@/src/context/ShopContext";

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
        const homeTitle = screen.getByText('Nossos Produtos');
        expect(homeTitle).toBeDefined();
    });

    it('Verify render brands card in Home', () => {
        render(
            <ShopContext.Provider value={mockShopContext}>
                <Home />
            </ShopContext.Provider>
        );

        const brandsSectionTitle = screen.getByText('Marcas');
        expect(brandsSectionTitle).toBeDefined();
    });
});