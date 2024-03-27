import classes from './Cart.module.css';

const ItemList = ({itemName , price , itemCount})=>{
    return(<>
            <ul className={classes['single-item-list-ul']}>
                <li className={classes['single-item-name']}>{itemName}</li>
                <li className={classes['single-item-details']}>
                    <span className={classes['single-item-price']}>{`Rs ${price}`}</span>
                    <span className={classes['single-item-count']}>{`x ${itemCount}`}</span>
                </li>
            </ul>
    </>)
}

export default ItemList;