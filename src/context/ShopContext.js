import { createContext, useState } from "react";

export const ShopContext = createContext()

export default function ShopContextprovider(props) {
    const [item, setItem] = useState([]);

    function selectedItem(itemSelected) {
        setItem([...item, itemSelected])
    }

    function removeItem(itemRemove) {
        const findItems = item.filter(value => !itemRemove.includes(value.id))
        setItem([])
    }

    return (
        <ShopContext.Provider
            value={{item, setItem, selectedItem, removeItem}}>
            {props.children}
        </ShopContext.Provider>
    )
}