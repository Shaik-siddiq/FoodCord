import React,{ useContext} from 'react';
import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';
import classes from './CartItem.module.css'
const CartItem = (props)=>{
    const cnxt = useContext(CartContext) 
    const hasitems = cnxt.items.length >0
    const totalAmount = `$${cnxt.totalAmount.toFixed(2)}`
    const cart=<ul className={classes['cart-items'] }>{cnxt.items.map((item)=>{
         return <li>{item.name}</li>
      })}
    </ul>
return(
    <Modal onClose={props.onClose} >
      {cart}
        <div className={classes.total}>
        <span>total Amount</span>
        <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
           {hasitems && <button className={classes.button}>order</button>}
        </div>
    </Modal>
)
}
export default CartItem