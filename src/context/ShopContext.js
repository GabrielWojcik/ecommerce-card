import { createContext, useState } from "react";

export const ShopContext = createContext()

export default function ShopContextprovider(props) {
    const [item, setItem] = useState();
    return (
        <ShopContext.Provider
            value={{item, setItem}}>
            {props.children}
        </ShopContext.Provider>
    )
}