import React from 'react'
import CardProduct from './product-card'
import { StyleListProduct } from './list'

const ProductList = ({products, handleClick}) => {
  return (
    <StyleListProduct>
        {
         products.map((product)=><CardProduct product={product} handleClick={handleClick}/>)
        }
    </StyleListProduct>
  )
}

export default ProductList