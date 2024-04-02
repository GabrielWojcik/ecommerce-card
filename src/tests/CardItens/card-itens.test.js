import { render, fireEvent } from '@testing-library/react';
import CardItens from "../../components/card-itens/index";
import { ShopContext } from "@/src/context/ShopContext";

const mockShopContext = {
    item: [],
    setItem: jest.fn(),
    selectedItem: jest.fn(),
    removeItem: jest.fn()
}

it('check if likeProduct is true or false', () => {
    const { getByTestId } = render(
        <ShopContext.Provider value={mockShopContext}>
            <CardItens /> 
        </ShopContext.Provider>
    );

    const likeProductFalse = getByTestId('like-product-false');
    expect(likeProductFalse).toBeInTheDocument();

    fireEvent.click(likeProductFalse);

    const likeProductTrue = getByTestId('like-product-true');
    expect(likeProductTrue).toBeInTheDocument();

})