import classes from './MenuItems.module.css';
const MenuItems = ({itemId , itemName , description , price})=>{
    return(
        <>
            <ul key = {itemId} className={classes['single-item-box']}>
                <li className={classes.itemName}>{itemName}</li>
                <li className={classes.description}>{description}</li>
                <li className={classes.price}>{`Rs ${price}`}</li>
            </ul>
        </>
    )
}
export default MenuItems;