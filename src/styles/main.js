import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 4rem;
    gap: 0.5rem;

    ul{
        list-style: none;
    }

    @media (max-width:800px){
     flex-direction: column ;
    }


`