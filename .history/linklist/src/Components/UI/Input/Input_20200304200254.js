import React, { Fragment } from 'react';
import classes from './input.module.css';
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
            <div className={classes.Row}>
            <label>{props.label}</label>
            {inputLe}
            </div>
        </Fragment>
    )

}


export default Input;


