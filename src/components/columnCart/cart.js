import styled from "styled-components";

export const StyleCart = styled.div`
    min-width: 22.75rem;
    display: flex;
    flex-direction: column;

    @media (max-width:800px) {
        width: 70%;
        margin: 2rem;
        margin: 0 auto;
        margin-top: 2rem;
        
    }

`

export const StyleCartNoProducts = styled.div`
    width: 100%;
    height: 10rem;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 0 0 0.5rem 0.5rem;

    h3{
        color: #333333 ;
        font-weight: 800;
    }

    p{
        color: #333333;
        font-weight: 600;
    };

   

`

export const StyleCartProduts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color:#f5f5f5;
    border-radius: 0 0 0.5rem 0.5rem;

`