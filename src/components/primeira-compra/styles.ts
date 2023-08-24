import { styled } from "styled-components";

export const ContainerPrimeiraCompra = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    
   

`

export const CupomContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    background-color: #ffe1ec;

`

export const Describe = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: right;
    
    p {
        font-size: 12px;
    }

    strong {
        font-size: 16px;
    }
`
export const Code = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    
    #btn-codigo {
        width: 69%;
        max-width: 220px;
        border: 1px dotted #FF005C;
        padding: 7px;
        border-radius: 4px;
        text-transform: uppercase;
        text-align: center;
        background: white;
        color: black;
    }

    #btn-copy {
        width: 69%;
        max-width: 220px;
        border: 1px solid #FF005C;
        padding: 8px;
        color: black;
        border-radius: 4px;
        text-transform: uppercase;
        text-align: center;
        background-color: #fff;
        cursor: pointer;
    }
`
export const ContainerDescribe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffe1ec;

    strong {
        text-align: center;
        font-size: 20px;
        color: #FF005C;
        width: 80%;
    }

    p {
        padding: 10px;
        font-size: 14px;
        text-align: justify;
    }
    
    img {
        width: 100px;
        height: 100px;
    }

    @media screen and (min-width: 1000px) {
        flex-direction: row;
        img {
            width: 350px;
            height: 350px;
        }
}

`

export const TextDescribe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: 1000px) {
        p {
            width: 50%;
        }
    }

`

export const ContainerCards = styled.div`
    display: flex;

    @media screen and (min-width: 1000px) {
        a {
        display: flex;
        align-items: center;
        justify-content: center;
        }  
    }
    
  
`