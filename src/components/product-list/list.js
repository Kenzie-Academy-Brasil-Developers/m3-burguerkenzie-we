import styled from "styled-components";

export const StyleListProduct = styled.ul`
    display: flex;
    max-width: 72%;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media (max-width:800px){
        flex-wrap: nowrap;
        overflow-x: auto;
        width: 100%;
        max-width: 100%;
        padding-left: 4rem;
    }

`