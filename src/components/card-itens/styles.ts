import styled from "styled-components"


export const CardItensContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ebebeb;;
    margin: 5px;

    @media screen and (max-width: 1000px) {
        width: 90%;
    }

`
export const ContainerFavorito = styled.div`
    width: 100%;
`

export const ContainerProduct = styled.div`
    display: flex;
    padding: 10px;
`

export const Star = styled.div`
    padding: 5px 10px;
    width: 50px;

`

export const Product = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    img {
        object-fit: cover;
    }


`
export const ProductDesc = styled.div`
    text-align: center;
    padding: 10px;

    #title {
        font-size: 18px;
    }
    .descricao {
        font-size: 13px;
    }

    #price {
        font-size: 15px;
    }

    #price-value {
        font-size: 12px;
        margin-top: 0;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        height: 45px;
        background-color: #00a470;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.2), inset 0 -2px 0 0 rgba(0,0,0,.2);
    }

`

export const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;

    button {
        background-color: #FF005C;
        color: #FFF;
        border: none;
        padding: 1rem;
        cursor: pointer;
        font-weight: bold;
    }
    :hover button {
    background: #ff1493;
}
    #text-add-item {
        cursor: pointer;
        font-size: 12px;
        text-decoration: underline;
    }
`