import styled from "styled-components";

export const StyleCardCArt = styled.li`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    
    button{
        background-color: transparent;
        border: none;
        color: #bdbdbd;
        height: 1rem;
    }
    
`

export const StyleCardCArtImgCont = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: #e0e0e0;
    img{
        width:100%;
    }
`

export const StyleCardCArtDesc = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1rem;
    padding: 0.2rem;

    h4{
        color: #333333;
    }

    p{
        color: #bdbdbd;
    }


`