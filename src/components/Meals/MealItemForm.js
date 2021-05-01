import React,{useRef, useState} from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'
const MealItemForm = (props)=> {
    const [amountisvalid, setAmountisValid]=useState(true)
    const amountInputRef = useRef();
    const submitHandler = (event)=>{
        event.preventDefault()
        const enteredAmount= amountInputRef.current.value
       const enteredNumber = +enteredAmount
        if(enteredAmount.trim().length === 0 || enteredNumber < 1 || enteredNumber > 5){
            setAmountisValid(false)
            return;
        }
        props.onAddtoCart(enteredNumber)
    } 
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" 
             ref={amountInputRef}
            input={{
                id:'amount',
                type:"number",
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }} 
            />
            <button>+Add</button>
            {!amountisvalid && <p>please order 1-5 only</p>}
        </form>
    )
}
export default MealItemForm