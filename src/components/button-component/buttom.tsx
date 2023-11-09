import { ReactNode } from "react";
import { Button } from "./styles";

interface ButtonProps {
    children: ReactNode;
    active?: boolean;
    disabled?: string;
    type?: string;
    text?: string;
}

export default function ButtonComponent( props: ButtonProps ) {
    return(
        <Button 
        active={props.active}
        >
            {props.children}
        </Button>
    )
}