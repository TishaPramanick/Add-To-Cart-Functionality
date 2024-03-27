import { useContext , useRef} from 'react';
import classes from './Cart.module.css';
import CartDataContext from '../../context/cart-data-context';

const AddOrRemoveItem = ({itemObj})=>{


    let cartCtx = useContext(CartDataContext);
    
    
    function cartAddItemHandler()
    {
        console.log(itemObj);
        cartCtx.addItems({...itemObj , itemCount : 1} , false);
    }

    function cartRemoveItemHandler()
    {
        console.log(itemObj);
        cartCtx.removeItems(itemObj.id);
    }
    
    
    return(<>
        <div>
            <button className={classes.addBtn} onClick={cartAddItemHandler}>+</button>
            <button className={classes.removeBtn} onClick={cartRemoveItemHandler}>-</button>
        </div>
    </>)
}

export default AddOrRemoveItem;