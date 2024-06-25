import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

`
export const MainContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }

`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`