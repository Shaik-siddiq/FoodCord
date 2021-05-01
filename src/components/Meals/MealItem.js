import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
const MealItem = (props) =>{
    const price = `$${props.price}`
    const ctx = useContext(CartContext);

    const AdditemtoCartHandler = (amount)=>{
        ctx.additem={
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount
        }
    }
    return(  
        <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
             <div className={classes.description}>{props.description}</div>
             <div className={classes.price}>{price}</div>
        </div>
            <div>
                <MealItemForm onAddtoCart={AdditemtoCartHandler} />
            </div>
        </li>
    )
}
export default MealItem