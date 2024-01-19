// import { ReactNode } from "react";
// import { Button } from "./styles";

interface ButtonProps {
    // children: ReactNode;
    active?: boolean;
    disabled?: string;
    type?: string;
    text?: string;
    onClick?: () => void
}

export default function ButtonComponent( props: ButtonProps ) {
    return(
        <button>ok</button>
        // <Button
        // onClick={props.onClick}
        // active={props.active}
        // >
        //     {props.children}
        // </Button>
    )
}