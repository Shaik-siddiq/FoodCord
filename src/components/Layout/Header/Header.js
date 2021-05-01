import React from 'react'
import Mealsimage from '../../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Headerstyle.module.css'
const Header = (props)=>{
    return(
        <React.Fragment>
            <header className={classes.header}>
            <h2>Meals</h2>
               <HeaderCartButton onShow={props.onShow} />
            </header>
            <div className={classes['main-image']}>
                <img src={Mealsimage} alt="delicions food items" />
            </div>
        </React.Fragment>
    )
}
export default Header