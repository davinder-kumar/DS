import React from 'react'

const Button = (props) => {
    return (
        <buttonclassName={classes.addButton} onClick={props.clicked}>{props.children}</button>
    )
}

export default Button

