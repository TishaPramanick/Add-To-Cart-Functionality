import HeaderCartBtn from '../UI/HeaderCartBtn';
import ThemeMode from '../UI/ThemeMode';
import classes from './Header.module.css';

const Header = ({setcartItemCount})=>{
    return(
        <div className={classes.header}>
            <ThemeMode></ThemeMode>
            <div className={classes.appName}>Food!ez</div>
            <HeaderCartBtn></HeaderCartBtn>
        </div>
    )
}
export default Header;