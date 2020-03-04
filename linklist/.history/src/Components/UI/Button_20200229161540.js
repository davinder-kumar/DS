import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.cliked}>{props.text}</button>
    )
}

export default Button