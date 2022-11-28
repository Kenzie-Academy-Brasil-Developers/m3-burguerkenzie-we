import React from 'react'
import { StyleCard, StyleCardDesc, StyleCardImgCont } from './cardprod'

const CardProduct = ({product, handleClick}) => {
  return (
   <StyleCard key={product.id}>
      <StyleCardImgCont>
      <img src={product.img} alt={product.name} />
      </StyleCardImgCont>
      <StyleCardDesc>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <h4>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
        <button onClick={()=>handleClick(product.id, product)}>Adicionar</button>
      </StyleCardDesc>
   </StyleCard>
  )
}
 
export default CardProduct