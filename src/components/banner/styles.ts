import { styled } from "styled-components";



export const ContainerBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* position: relative; */
    margin: 0;
    padding: 0;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

export const ContainerTitle = styled.div`
    /* position: absolute; */
    /* top: 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
        color: #FF005C;
        font-weight: bold;
        font-size: 48px;
    }



`