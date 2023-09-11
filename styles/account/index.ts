import styled from 'styled-components';

export const ContainerMainAccount = styled.div`
    margin: 0;
    padding: 0;

    display: flex;
    

`

export const AcconuntLogged = styled.div`
    width: 50vh;
    height: 100vh;
    border-right: 1px solid #FF005C;
    font-family: 'Lobster', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF005C;



    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 15px;
        list-style: none;
        height: 25vh;
        width: 100%;
        
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        height: 100px;
        width: 100%;
        
        background-color: #FF005C;
        color: #fff;
        font-weight: bold;
        font-size: 26px;

        cursor: pointer;

        &:hover {
            background-color: #fff;
            color: #FF005C;
        }
    }
`

export const AccountInfomation = styled.div`
    width: 100%;

`