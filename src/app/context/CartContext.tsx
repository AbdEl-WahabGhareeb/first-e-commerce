import { createContext, useContext, useEffect, useState } from "react";
import { getUserCart } from "../serveractions/cart.action";
import { CartData } from "../types/cart.model";

interface CartContextType {
    cartDetails: CartData | null;
    getCartDetails: () => Promise<void>;
}

const CartContext = createContext<CartContextType>({
    cartDetails: null,
    getCartDetails: async () => {},
});
export default function CartContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cartDetails, setCartDetails] = useState(null);

    async function getCartDetails() {
        const response = await getUserCart();


        setCartDetails(response?.data);
    }

    useEffect(() => {
        getCartDetails();
    }, []);
    
    return (
        <CartContext.Provider value={{ cartDetails, getCartDetails }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const myCart = useContext(CartContext);
    return myCart;
}
