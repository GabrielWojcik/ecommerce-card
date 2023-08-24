import styled from "styled-components"

export const ContainerSliderItens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerItens = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .keen-slider__slide number-slide1 {
        height: 500px;
        /* background: rgb(64, 175, 255);
        background: linear-gradient(
            128deg,
            rgba(64, 175, 255, 1) 0%,
            rgba(63, 97, 255, 1) 100%
        ); */
    }
   
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 1rem;
    color: #FF005C;
    font-weight: bold;
    font-size: .875rem;

    height: 200px;

    img {
        width: 60px;
        height: 60px;
    }

    button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        font-weight: bold;
        color: #FF005C;

        width: 50%;
        height: 35px;
        border-radius: 5px;
        background-color: rgba(210, 238, 130);
    }

`