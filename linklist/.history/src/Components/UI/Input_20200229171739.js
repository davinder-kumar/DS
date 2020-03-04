import React from 'react';
import { render } from '@testing-library/react';

const Input = (props) => {
    let inputLe = null
    switch (props.type) {
        case "input":
            inputLe = <input {...props.elementConfig} value={props.value}/>
            break;
    }
    console.log

    return(
       inputLe
    )

}


export default Input;