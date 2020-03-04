import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.cliked}>{props.children}</button>
    )
}

export default Button