import React from 'react'
import classes from './'

const Button = (props) => {
    return (
        <button className={classes.addButton} onClick={props.clicked}>{props.children}</button>
    )
}

export default Button

