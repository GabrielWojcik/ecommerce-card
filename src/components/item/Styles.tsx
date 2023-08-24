import styled from 'styled-components'

export const ContainerMainItem = styled.div`

    padding: 1.5rem;

    @media screen and (min-width: 1000px) {
        display: flex;
    }
`

export const GridContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
    width: 500px;
    max-width: 1200px;
    height: 400px;
`

export const ImgMain = styled.div`
 img {
        width: 350px;
        height: 350px;
    }
`

export const GridContainerSecondary = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        height: 400px;
        margin-left: 25px;
    }


`

export const ImgSecondary = styled.div`
    cursor: pointer;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    
    img {
        width: 100px;
        height: 100px;
    }
`

export const ContinerTitle = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    padding-left: 5rem;

    h1 {
        width: 100%;
        text-align: left;
        font-weight: bold;
    }

    h2 {
        font-weight: bold;
        text-align: center;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        background-color: #FF005C;
    }
`