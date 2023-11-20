import { styled } from "styled-components";



export const ContainerBanner = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    width: 100%;
    height: 45vh;
    margin: 0;
    padding: 0;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`

export const SectionTitle = styled.div`
    position: absolute;
    top: 25vh;
    left: 25vh;

    h1 {
        color: white;
        font-weight: bold;
    }

    span {
        color: #ffbe1a;
        font-weight: bold;
        font-size: 46px;
    }

    @media screen and (max-width: 999px) {
        left: 0vh;
        margin-left: 5px;
    }

`

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    h1 {
        color: #FF005C;
        font-weight: bold;
        font-size: 48px;
    }

    @media screen and (max-width: 999px) {
        h1 {
            font-size: 24px;
        }
    }



`