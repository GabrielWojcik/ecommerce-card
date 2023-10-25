import styled from 'styled-components';

export const StarContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15%;
`

export const TitleModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FF005C;
    padding-top: 10;
    height: 30px;

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100vh;

    #btn-avaliar {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    button {
        width: 100%;
        height: 40px;
        background-color: #FF006C;
        color: white;
        border: 1px solid;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 5px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    input {
        border: 1px solid;
        border-color: #FF005C;
        border-radius: 5px;
        height: 40px;
        outline: none;
        padding: 10;
    }

    textarea {
        border: 1px solid;
        border-color: #FF005C;
        border-radius: 5px;
        height: 200px;
        outline: none;
        padding: 10;
    }

`