import { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartBtn.module.css';
import CartVisibilityContext from '../../context/cart-visibility-context';
import CartDataContext from '../../context/cart-data-context';
function HeaderCartBtn()
{
    let x = useContext(CartVisibilityContext);
  
    let cartCtx = useContext(CartDataContext);

    
    let numItems = cartCtx.items.reduce((intialValue , singleItem )=>{
            return (intialValue + singleItem.itemCount);
    } , 0)
//
    // console.log(cartCtx.items);

    return ( 
       <button className={classes.button} onClick={x.handleShowCart}>
            <span className={classes.icon}>
                <img src="cart.png" alt="add to cart img"/>
            </span>
            <span className={classes['cart-item-count']}>{numItems}</span>
       </button>
    )
}

export default HeaderCartBtn;