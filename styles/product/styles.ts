import styled from "styled-components";


export const ContainerItem = styled.div`
    margin: 1.5rem;
`

export const CardImage = styled.div`
    width: 350px;
    height: 55vh;
    max-width: 1330px;


    img {
        height: 100%!important;
        width: 100%!important;
        border-radius: 5px;
    }

`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`

export const ContainerMain = styled.div`
    display: flex;
`

export const ContainerDescription = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    flex-direction: column;
    align-items: center;
    width: 50%;
    border-left: 1px solid #efefef;
    gap: 5px;


    #price {
        font-size: 2.25rem;
        line-height: 1.5;
        color: #212121;
        font-weight: 700;

        
    }
    span {
        text-decoration: underline;
        font-weight: 700;
        cursor: pointer;
    }

    #points {
        color: #4a4a4a;
        margin: 0 0 20px;
        padding-left: 20px;
        font-size: .75rem;
    }

    button {
        font-size: 1rem;
        height: 64px;
        width: 50%;
        border: none;
        border-radius: 5px;
        background-color: #FF005C;
        outline: none;
        color: #FFF;
        cursor: pointer;
    }

    &:hover span {
        color: #FF005C;
    }

    &:hover button {
        background-color: #FF006C;
    }

`