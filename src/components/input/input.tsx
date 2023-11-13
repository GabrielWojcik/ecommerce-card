import { Input } from "./styles";


interface InputProps {
    active?: string;
    disabled? : string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: any;

}


export default function InputComponent( props: InputProps ) {
    return(
        <Input 
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )

}