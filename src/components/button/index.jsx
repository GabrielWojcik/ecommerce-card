import React from "react";
import './styles.css';

export default function Button( props, cardNumber) {
    return(
            <button disabled={!cardNumber}>{props.children}</button>
    )
}