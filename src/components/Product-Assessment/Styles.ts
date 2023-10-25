import styled from "styled-components";

export const ContainerAssessment = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;

    button {
        background-color: transparent;
        padding: 22px 34px;
        border: 1px solid #FF005C;
        color: #FF005C;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;
    }

    &:hover button {
            background-color: #FF005C;
            color: #fff;
        }

    @media screen and (max-width: 999px) {
        flex-direction: column;
    }

`

export const ContainerStar = styled.div`

   
`