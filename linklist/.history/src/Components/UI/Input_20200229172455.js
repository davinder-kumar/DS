import React, { Fragment } from 'react';
import { render } from '@testing-library/react';

const Input = (props) => {
    let inputLe = null
    switch (props.type) {
        case "input":
            inputLe = <input onChange={props.onChangeHandler} {...props.elementConfig} value={props.value} />
            break;
    }
    console.log(inputLe)

    return (
        <Fragment>
            <label>{props.label}</label>
            {inputLe}
        </Fragment>
    )

}


export default Input;


