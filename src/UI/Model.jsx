import { createPortal } from 'react-dom';
import { Fragment, useContext } from 'react';
import classes from './Model.module.css';
import CartVisibilityContext from '../../context/cart-visibility-context';

const modelPortalElement = document.getElementById('modal-overlays');

const BackDrop = () => { 
    let x = useContext(CartVisibilityContext);
    return <div className={classes.backdrop} onClick={x.handleHideCart} >
    </div>
}

const ModelOverlay = props => {
    return <div className={classes.model}>
            {props.children}
    </div>
}

const Model = (props) =>{
    
    return(
        <>
            {createPortal(<BackDrop></BackDrop> , modelPortalElement)}
            {createPortal( <ModelOverlay>{props.children}</ModelOverlay> , modelPortalElement)}
        </>
    )
}

export default Model;