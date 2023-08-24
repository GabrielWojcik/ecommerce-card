import styled from 'styled-components'

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    width: 300px;
    margin: 2.5rem;
    border: 1px solid transparent;
    border-radius: 6px;
    border-color: #FF005C;

    
    h2, p {
        line-height: 0.25rem;
        padding: 0 1.25rem;
    }

    p {
        color: #878787;
        font-size: 12px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1.25rem;
        gap: 1rem;

        label {
            width: 100%;
            height: 5px;
            line-height: 1rem;
        }

        input {
            width: 100%;
            height: 35px;
            outline: none;
            border: 1px solid;
            border-radius: 6px;
            border-color: #FF005C;
            padding: 1px;
            text-indent: 10px;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 35px;
            background-color: #FF005C;
            font-weight: bold;
            cursor: pointer;
        }

    }

    #option {
        text-align: center;
        line-height: normal;
    }

    #btn-google {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 35px;
        background-color: #878787;
        font-weight: bold;
        cursor: pointer;
    }

`