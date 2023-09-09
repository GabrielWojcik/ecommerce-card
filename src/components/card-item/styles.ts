import { styled } from "styled-components";

export const ContainerCard = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
        border-radius: 5px;
    }
    img:hover { 
        transform: scale(1.1); 
        opacity: unset;
    
    }

`

export const ContainerDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: absolute;
    bottom: 0;

    p {
        height: 5px;
        color: #FF005C;
        font-weight: bold;
        font-family: arial!important;
    }



`

export const ContainerButton = styled.div`
    width: 100%;

    button {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        background-color: deeppink;
        color: white;
    }

    button:hover {
        transform: scale(1.1); 
    }
`