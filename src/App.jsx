import { Fragment, useContext, useState } from 'react'
import Header from './Header/Header'
import './App.css'
import Cart from './Cart/Cart'
import FirstSection from './MainSection/FirstSection'
import SecondSection from './MainSection/SecondSection'
import Model from './UI/Model'
import CartVisibilityContext, { CartVisibilityContextProvider } from '../context/cart-visibility-context'
import { CartDataContextProvider } from '../context/cart-data-context'

function App() {
  
  let x = useContext(CartVisibilityContext);

  return (
   <Fragment>
   
   <CartDataContextProvider>
        <Header></Header>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        {x.showCart && <Cart></Cart>}
    </CartDataContextProvider>
    </Fragment>
   
  )
}

export default App
