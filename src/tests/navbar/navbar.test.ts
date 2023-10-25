import { render, screen } from "@testing-library/react";
import {  describe, test } from "node:test";
import  MenuMain  from "../../components/navbar/index";

describe('<CheckNavBar />', () => {
    test('renders a text in navbar', () => {
        render(<MenuMain />)


        const textOne = screen.getByText('1 Compra');
        
        expect(textOne).toBeInTheDocument();
        
    });
});