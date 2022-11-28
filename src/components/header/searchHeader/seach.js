import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    width: 22.8rem;
    height: 3.75rem;
    background-color: #ffffff;
    border: 2px solid #e0e0e0;  
    border-radius: 0.5rem;
    justify-content: space-between;
    padding: 0.3rem;

    input{
        border: none;
        color: #e0e0e0;
        padding: 1rem;
    }

    button{
        width: 7rem;
        border: none;
        background-color: #27AE60;
        border-radius: 0.5rem;
        color:#ffffff;
        
    }

    @media (max-width:800px){
        width: 100%;
        max-width: 22.8rem;
        
    }

`