import React, { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import CartIcon from '../../cart/CartIcon';
import classes from './HeadercartButton.module.css'
const HeaderCartButton = (props)=>{
    const cartcnxt = useContext(CartContext)

    const numberofCartItems = cartcnxt.items.reduce((curntnum, item)=>{
        return curntnum + item.amount
    },0)
    return(
        <React.Fragment>
            <button className={classes.button} onClick={props.onShow}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Cart</span>
                <span className={classes.badge}>{numberofCartItems}</span>
            </button>
        </React.Fragment>
    )
}
export default HeaderCartButton