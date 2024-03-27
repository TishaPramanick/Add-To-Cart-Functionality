import AddOrRemoveItem from './AddOrRemoveItem';
import classes from './Cart.module.css';
import ItemList from './ItemList';
import Model from '../UI/Model';
import { useContext, useEffect, useRef, useState } from 'react';
import CartVisibilityContext from '../../context/cart-visibility-context';
import CartDataContext from '../../context/cart-data-context';
const Cart = () => {

    const x = useContext(CartVisibilityContext);

    const cartCtx = useContext(CartDataContext);



    const cartItems = <ul className={classes['cart-item-ul']}>
        {cartCtx.items.map(item => <li key={item.id} className={classes['cart-item-lists']}>
            <ItemList itemName={item.itemName} price={item.price} itemCount={item.itemCount}></ItemList>
            <AddOrRemoveItem itemObj = {item}></AddOrRemoveItem>

        </li>)
        }
    </ul>




    return (
        <Model>
            <div className={classes['cart-box']}>
                <span className={classes.title}>Your Cart</span>
                <div className={classes['cart-item-box']}>
                    {cartItems}
                </div>
                <div className={classes['cart-amt-box']}>
                    <span className={classes.amtText}>Total Amount</span>
                    <span className={classes.amt}>{`Rs ${cartCtx.totalAmount}`}</span>
                </div>

                <div className={classes['cart-btns']}>
                    <button className={classes['close-btn']} onClick={x.handleHideCart}>Close</button>
                    {!!cartCtx.items.length && <button className={classes['proceed-btn']}>Proceed</button>}
                </div>
            </div>
        </Model>
    )
}

export default Cart;