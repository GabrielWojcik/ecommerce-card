import { createContext, useState } from "react";
import { PRODUCTS } from "../data/products";

export const ShopContext = createContext()

export default function ShopContextprovider(props) {
    const [item, setItem] = useState([]);

    const product = PRODUCTS

    function selectedItem(itemSelected) {
        setItem([...item, itemSelected])
    }

    function removeItem(itemRemove) {
        const findItems = item.filter(value => !itemRemove.includes(value))

        const objetosFiltrados = product.filter(produto => findItems.includes(produto.id));
        console.log(objetosFiltrados);


        setItem([objetosFiltrados])
    }

    return (
        <ShopContext.Provider
            value={{item, setItem, selectedItem, removeItem}}>
            {props.children}
        </ShopContext.Provider>
    )
}