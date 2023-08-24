import styled from "styled-components"


export const CardItensContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    border: 1px solid #ebebeb;;
    margin: 5px;

    @media screen and (min-width: 1000px) {
        width: 50%;
    }

`
export const ContainerProduct = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
`

export const Star = styled.div`
    padding: 5px 10px;

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
    padding: 10px;

    #title {
        font-size: 11px;
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