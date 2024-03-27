import { createContext, useReducer, useState } from "react";
import cartItemData from "../data/cartItems";

const CartDataContext = createContext({
    items: [],
    totalAmount: 0,
    addItems: (newItem , confirmOn) => { },
    removeItems: (itemId) => { }
});



const defaultCartState = {
    items: [],
    totalAmount: 0,

}

function cartReducer(state, action) {
    if (action.type === 'ADD') {

        let updateItem, updateAmount;

        let index = state.items.findIndex((i) => i.id === action.item.id)

        let findItem = state.items.find((i) => { return i.id === action.item.id})
        
        if (index != -1) {

            console.log(findItem);

            let add = {...findItem};

            add.itemCount += 1;


            let stateCopy = [...state.items];
            

            stateCopy.splice(index, 1, add);


            updateItem = stateCopy;

            updateAmount = state.totalAmount + action.item.price;

        }
        else {
            updateItem = state.items.concat(action.item);
            updateAmount = state.totalAmount + (action.item.price * action.item.itemCount);
        }


        return ({
            items: updateItem,
            totalAmount: updateAmount
        })
    }

    // if (action.type === 'ADD_CART')
    // {

    // }





    // remove item -----------------------
    if (action.type == 'REMOVE') {
        let removeableItem = state.items.find((i)=>{ return i.id === action.itemId})
        let removeableItemIndex = state.items.findIndex((i)=>{ return i.id === action.itemId})

        let newItems , newTotalAmount;

        // console.log(removeableItem);
        if(removeableItem.itemCount > 1)
        {
          let rem = {...removeableItem};

            rem.itemCount -= 1;
            
            let stateCopy = [...state.items];
            stateCopy.splice(removeableItemIndex , 1 , rem);
            newItems = stateCopy;

            newTotalAmount = state.totalAmount - rem.price;


        }

        if(removeableItem.itemCount === 1)
        {
            let stateCopy = [...state.items];
            stateCopy.splice(removeableItemIndex , 1);
            newItems = stateCopy;

            newTotalAmount = state.totalAmount - removeableItem.price;
        }

        return ({
            items: newItems,
            totalAmount: newTotalAmount
        }) 
    }
    return defaultCartState;

}




export const CartDataContextProvider = (props) => {

    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

    function handleAddCartItems(newItem , confirmOn) {
        dispatch({ type: 'ADD', item: newItem , confirmation : confirmOn });
    }
    function handleRemoveCartItems(itemId) {
        dispatch({ type: 'REMOVE', itemId: itemId });
    }


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: handleAddCartItems,
        removeItems: handleRemoveCartItems
    }

    return (
        <CartDataContext.Provider value={cartContext}>
            {props.children}
        </CartDataContext.Provider>
    )
}


export default CartDataContext;