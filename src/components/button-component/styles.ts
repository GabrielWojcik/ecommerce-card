import { styled } from "styled-components";

interface ButtonProps {
    active?: boolean;
}



export const Button = styled.button<ButtonProps>`
    height: 40px;
    width: 60px;
    border-radius: 5px;
    background-color: ${props => props.active ? '#FF005C' : 'white'};
    border-color: ${props => props.active ? '#FF005C' : '#FF005C'};;
    color: ${props => props.active ? 'white' : 'black'};
    cursor: pointer;
    outline: none;
`