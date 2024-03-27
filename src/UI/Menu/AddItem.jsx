import { useContext } from 'react';
import React from 'react';
import classes from './AddItem.module.css';
import CartDataContext from '../../../context/cart-data-context';



const AddItem = ({itemObj}) => {

    // const [count , setCount] = React.useState(1);
    const cartCtx = useContext(CartDataContext);


    function handleAddItems()
    {
        // setCount(count + 1);
        cartCtx.addItems({...itemObj , itemCount :1} , true);
    }
    return (
        <>
            <ul key={itemObj.id} className={classes['add-item-box']}>
                <li><button className={classes['add-item-btn']} onClick={handleAddItems}>Add To Cart</button></li>
            </ul>
        </>
    )
}
export default AddItem;