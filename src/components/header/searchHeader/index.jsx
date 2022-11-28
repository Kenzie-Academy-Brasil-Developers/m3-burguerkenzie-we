import React from 'react'
import { StyledForm } from './seach'

const SearchHeader = () => {
  return (
    <StyledForm>
        <input type="search" name="src-product" id="src" placeholder='Digitar pesquisa'/>
        <button>Procurar</button>
    </StyledForm>
  )
}

export default SearchHeader               