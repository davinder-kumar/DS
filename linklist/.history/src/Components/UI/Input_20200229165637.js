import React from 'react';
import { render } from '@testing-library/react';

const Input = (props) => {
    return (<input type={props.inputType}></input>);
}


export default Input;