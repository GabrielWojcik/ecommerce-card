import styled from 'styled-components';

export const MenuMobileContainer = styled.div`
    top: 0;
    z-index: 1000;
    
    position: absolute;

    background-color: #FF005C;

    width: 200px;
    height: 100vh;

    padding: 10px 15px;

    strong {
        font-weight: bold;
        font-size: 22px;
        color: #FFF;

    }
`

export const MenuList = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    ul {
        list-style: none;
        color: #FFF;
        font-weight: bold;
    }
`