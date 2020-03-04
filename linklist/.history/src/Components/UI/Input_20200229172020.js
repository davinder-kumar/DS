import React from 'react';
import { render } from '@testing-library/react';

const Input = (props) => {
    console.log(props)
    let inputLe = null
    switch (props.type) {
        case "input":
            inputLe = <input {...props.elementConfig} value={props.value}/>
            break;
    }
    console.log(inputLe)

    return(
        <>
    <label>{props.label}</label>
       inputLe
       <>
    )

}


export default Input;