import styled from 'styled-components';


export const ContainerFormAnddres = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    padding: 5vh;

    h1 {
        color: #FF005C;
        margin-bottom: 30px;
        font-family: 'Lobster', sans-serif;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Lobster', sans-serif;
    input {
        border: 1px solid #FF005C;
        border-radius: 5px;
        width: 100%;
        height: 38px;
        margin-bottom: 30px;
        outline: #FF005C;
        
    }
`