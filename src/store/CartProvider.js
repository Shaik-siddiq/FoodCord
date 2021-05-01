import React ,{useReducer} from 'react'
import CartContext from './CartContext'

const defaultState = {
    items:[],
    totalAmount:0
}
const CartReducer = (state, action)=>{
    if(action.type === "ADD"){
        const updateitems = state.items.concat(action.item)
        const updatetotalAmount = state.totalAmount + action.item.amount * action.item.price
        return{
            items:updateitems,
            totalAmount:updatetotalAmount
        }
    }
    return defaultState
}
const CartProvider =(props)=>{
    const [CartState, dispatchCartAction] = useReducer(CartReducer, defaultState)
    const AddItemHandler = (item)=>{
        dispatchCartAction({type:"ADD", item:item})
    }
    const RemoveItemHandler = (id)=>{}
    const cartcontext ={
        items:CartState.items,
        totalAmount:CartState.totalAmount,
        addItem:AddItemHandler,
        removeItem:RemoveItemHandler,
    }
    return(
        <CartContext.Provider value={cartcontext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider