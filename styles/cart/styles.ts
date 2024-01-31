import styled from 'styled-components';

interface ButtonProps {
    active?: boolean;
}


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    padding-top: 5rem;
    width: 70%;

    @media screen and (max-width: 999px) {
        width: 100%;
    }

   
`
export const SectionTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;

    .container-cep {
        display: flex;
        gap: 1rem;
        align-items: center;
        width: 100%;
        padding-top: 1rem;
    }

    .container-address {
            margin-top: 1rem;
        }

    @media screen and (max-width: 999px) {
        .container-address {
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-top: 1rem;
            gap: 1rem;
        }
    
        .address {
            font-size: 14px;
        }
        
    }

`

export const Body = styled.div`
    display: flex;

    @media screen and (max-width: 999px) {
        flex-direction: column;
    }

`
export const ContainerBox = styled.div`
    width: 70%;
    background-color: #FFF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.12);

    @media screen and (max-width: 999px) {
        width: 100%;
    }

`

export const ContainerImage = styled.div`
    width: 25%;

    @media screen and (max-width: 999px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0px;
    }
`

export const Box = styled.div`
    display: flex;
    padding: 24px;

    #img-item {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    @media screen and (max-width: 999px) {
        width: 100%;
        flex-direction: column;
        padding: 0px;
    }


`

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 22px;
    
    #title-product {
        font-weight: bold;
    }

    @media screen and (max-width: 999px) {
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0px;
        padding-left: 0px;

        #title-product {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
    }
`
export const ContainerOptionItem = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
    gap: 1rem;
    color: #3483fa;
    cursor: pointer;
`

export const ProductAmount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;

    input {
        width: 50%;
    }

    @media screen and (max-width: 999px) {
        width: 100%;
    }
`
export const PriceItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    line-height: 18px;
    text-align: right;

    @media screen and (max-width: 999px) {
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        
    }
`

export const ContainerInput = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    input {
        height: 30px;
        border: 1px solid;
        border-radius: 5px;
        border-color: #FF005c;
        outline: none;
        padding: 5px;
    }

    @media screen and (max-width: 1000px) {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

`

export const Value = styled.div`
    width: 30%;
    height: 100vh;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.12);
    position: absolute;
    right: 0;
    top: 4.5rem;

    @media screen and (max-width: 999px) {
        position: relative;
        width: 100%;
    }


    
`
export const ValueContainer = styled.div`
    padding: 1rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.12);


    .title {
        font-weight: bold;
        font-size: 20px;
        color: #FF005C;;
        margin: 15px;
    }

    .container-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text-box {
        font-size: 12px;
        color: #000000;
        margin: 15px;
    }

    span {
        color: lightslategray;
    }
`

export const PixBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxPayment = styled.div`
    padding: 1rem;
    background-color: rgb(229, 255, 241);
    border-radius: 5px;
    text-align: center;

    p {
        color: rgb(31, 144, 80);
        font-size: 18px;
    }

    span {
        color: rgb(31, 144, 80);
        font-weight: bold;
        font-size: 24px;
    }
`



export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;
`

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.active ? '#FF005C' : 'white'};
    border-color: ${props => props.active ? '#FF005C' : '#FF005C'};;
    color: ${props => props.active ? 'white' : 'black'};
    width: 100%;
    height: 40px;
    border: none;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    padding: 15px;
`

