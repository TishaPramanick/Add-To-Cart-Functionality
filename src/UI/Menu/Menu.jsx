import { Fragment } from "react";
import { menuData } from "../../../data/foodiez";
import classes from "./Menu.module.css";
import MenuItems from "./MenuItems";
import AddItem from "./AddItem";
function Menu() {
    return (
        <Fragment>
            <ul key = "1" className={classes['menu-item-box']}>
                {
                    menuData.map(item =>
                    <>
                        <li key={item.id} className={classes['menu-items']} >
                            <MenuItems itemId = {item.id} itemName={item.itemName} description={item.description} price={item.price}></MenuItems>
                           
                            <AddItem itemObj = {item}></AddItem>  
                            
                        </li>
                    </>)
                }
            </ul>
        </Fragment>
    )
}

export default Menu;