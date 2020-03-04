import React, { Component } from 'react'
import classes from './Linkedlist.module.css'
import Button from '../../Components/UI/Button'
import Input from '../../Components/UI/Input'
class Linkedlist extends Component {
    state = {
        nodes : [],
        nodeForm : {
            controls : {
                elementType : 
            }
        }
    }
    addNodeHandler = () => {
        
    }
    render() {
        console.log(classes)
        return (
            <div>
                <div id={classes.head}>

                </div>
                <Input inputType="text"></Input>
                <Button  text="Add Node" class={classes.addButton} clicked={this.addNodeHandler}>Add Node</Button>
            </div>

        )
    }
}

export default Linkedlist