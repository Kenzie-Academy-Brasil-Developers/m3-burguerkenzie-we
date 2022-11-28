import styled from "styled-components";

export const StyleHeader = styled.header`
    width: 100vw;
    height:  5rem;
    background-color:  #F5F5F5;

    @media (max-width:800px){
       height:  8rem;
               
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 80rem;
    display: flex;
    justify-content: space-between;
    margin:  0 auto;
    height: 100%;
    align-items: center;
    background-color: transparent;

    @media (max-width:800px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
    }

`