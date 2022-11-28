import React from 'react'
import LogoHamb from './logo'
import SearchHeader from './searchHeader'
import { StyleHeader, HeaderContainer } from './header'

const HeaderApp = () => {
  return (
    <StyleHeader>
      <HeaderContainer>
        <LogoHamb />
        <SearchHeader />
      </HeaderContainer> 
    </StyleHeader>
  )
}

export default HeaderApp