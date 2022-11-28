import React from 'react'
import { StyleCardCArt, StyleCardCArtImgCont, StyleCardCArtDesc, StyleCardCArtButton } from './cartCart'

const CardCart = ({product, removeProduct}) => {
  return (
    <StyleCardCArt key={product.id}>
      <StyleCardCArtImgCont>
        <img src={product.img} alt={product.name} />
      </StyleCardCArtImgCont>
      <StyleCardCArtDesc>
      <h4>{product.name}</h4>
      <p>{product.category}</p>
      </StyleCardCArtDesc>
      <button onClick={()=>removeProduct(product.id)}>Remover</button>
    </StyleCardCArt>
  )
}

export default CardCart