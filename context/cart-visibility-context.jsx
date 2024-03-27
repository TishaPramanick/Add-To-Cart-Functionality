import { createContext, useState } from "react";

const CartVisibilityContext = createContext({
    showCart : false , 
    handleHideCart  : ()=>{},
    handleShowCart : ()=>{}
})

export const CartVisibilityContextProvider = (props)=>{
    const [showCart , setShowCart] = useState(false);

    const handleHideCart = ()=>setShowCart(false);
   
    const handleShowCart = ()=>setShowCart(true);

    return(
        <CartVisibilityContext.Provider value={{showCart , handleHideCart , handleShowCart}}>
                {props.children}
        </CartVisibilityContext.Provider>
    )
}

export default CartVisibilityContext;