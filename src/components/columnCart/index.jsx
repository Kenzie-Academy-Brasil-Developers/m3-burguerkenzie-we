import React from 'react'
import HeaderCart from './cartHeader'
import ListCart from './cartlist'
import TotalCart from './cartTotal'
import { StyleCart, StyleCartNoProducts, StyleCartProduts } from './cart'

const CartColunm = ({currentSale, removeProduct, someCart, setCurrentSale}) => {
  return (
    <StyleCart>
        <HeaderCart />
        <div>
          {currentSale.length===0?
            (<StyleCartNoProducts>
              <h3>Carrinho vazio</h3>
              <p>Adicione protutos</p>
            </StyleCartNoProducts>
            ):(
            <StyleCartProduts>
              <ListCart currentSale={currentSale} removeProduct={removeProduct} someCart={someCart}/>
              <TotalCart currentSale={currentSale} someCart={someCart} setCurrentSale={setCurrentSale} />
            </StyleCartProduts>
            
            )
          }
        </div>
        
    </StyleCart>
  )
}

export default CartColunm