import React from 'react'
import { StyleTotaly, StyleTotalyDesc, StyleTotalyButton } from './total'

const TotalCart = ({currentSale, someCart, setCurrentSale}) =>{
  return (
    <StyleTotaly>
      <StyleTotalyDesc>
      <h3>Total:</h3>
      <h3>{someCart(currentSale)}</h3>
      </StyleTotalyDesc>
      <StyleTotalyButton onClick={()=>setCurrentSale([])}>Remover Todos</StyleTotalyButton>
    </StyleTotaly>
  )
}

export default TotalCart