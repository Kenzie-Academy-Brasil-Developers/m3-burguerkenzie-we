import styled from "styled-components";

export const StyleCard = styled.li`
    width:17rem;
    min-width: 15rem;
    height: 21.625rem;
    border:  2px solid #e0e0e0;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;

    button{
        width: 8rem;
        height: 2.5rem;
        background-color:   #27AE60 ;
        color: #ffffff;
        border: none;
        border-radius: 8px;
    }

    button:hover{
        background-color:#93D7AF;
    }
`

export const StyleCardDesc = styled.div`
    width: 100%;
    height: 60%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3{
        color: #333333;
    }

    p{
        color:#828282;
    }

    h4{
        color: #27AE60;               
    }


`

export const StyleCardImgCont = styled.div`
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    justify-content: center;
    img{
     max-width: 10rem;
    }
`
