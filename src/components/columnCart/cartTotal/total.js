import styled from "styled-components";

export const StyleTotaly = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    height: 8rem;
    border-top: 2px solid #333333;

    
`

export const StyleTotalyDesc = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        color:#333333;
        font-weight: 800;
    }
`

export const StyleTotalyButton = styled.button`

    width: 100%;
    height: 50%;
    background-color: #e0e0f0;
    border: none;
    border-radius: 0.5rem;
    color: #333333;
    font-size: 1rem;
    font-weight: 800;

    :hover{
        background-color: #828282 ;
        color: #e0e0f0;
    }

`