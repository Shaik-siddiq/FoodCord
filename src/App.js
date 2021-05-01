import React,{useState} from 'react'
import './App.css';
import CartItem from './components/cart/CartItem';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const ShowCartHandler = ()=>{
    setShowCart(true)
  }
  const HiddenCartHandler = ()=>{
    setShowCart(false)
  }

  return (
    <CartProvider>
    {showCart && <CartItem onClose={HiddenCartHandler} />}
    <Header onShow={ShowCartHandler} />
    <main>
      <Meals />
    </main>
    </CartProvider>
    
  );
}

export default App;
