import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.cliked}>{props.label}</button>
    )
}

export default Button

