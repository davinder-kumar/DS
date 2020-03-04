import React, { Component } from 'react'
import classes from './Linkedlist.module.css'
import Button from '../../Components/UI/Button'
class Linkedlist extends Component {
    state = {
        nodes : [],
        nodeVal = null
    }
    addNodeHandler = () => {
        
    }
    render() {
        console.log(classes)
        return (
            <div>
                <div id={classes.head}>

                </div>
                <input type='text' name='data' required></input>
                <Button  text="Add Node" class={classes.addButton} clicked={this.addNodeHandler}>Add Node</Button>
            </div>

        )
    }
}

export default Linkedlist