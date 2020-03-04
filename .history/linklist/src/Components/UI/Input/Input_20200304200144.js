import React, { Fragment } from 'react';
input classes from 
// import { render } from '@testing-library/react';

const Input = (props) => {
    let inputLe = null
    switch (props.type) {
        case "input":
            inputLe = <input onChange={props.onChangeHandler} {...props.elementConfig} value={props.value} />
            break;
        default:
            break;
    }

    return (
        <Fragment>
            <div className="Row">
            <label>{props.label}</label>
            {inputLe}
            </div>
        </Fragment>
    )

}


export default Input;


