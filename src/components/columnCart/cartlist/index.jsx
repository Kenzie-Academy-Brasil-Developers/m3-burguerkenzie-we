import React from 'react'
import CardCart from './cartcard'
import { StyledCartList } from './cartlist'

const ListCart = ({currentSale, removeProduct}) => {
  return (
    <StyledCartList>
      {
        currentSale.map((product)=><CardCart product={product} removeProduct={removeProduct}/>)
      }
    </StyledCartList>
  )
}



export default ListCart