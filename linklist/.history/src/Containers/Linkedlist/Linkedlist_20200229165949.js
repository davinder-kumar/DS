import React, { Component } from 'react'
import classes from './Linkedlist.module.css'
import Button from '../../Components/UI/Button'
import Input from '../../Components/UI/Input'
class Linkedlist extends Component {
    state = {
        nodes : [],
        nodeForm : {
            controls : {
                elementType : "input",
                elementConfig :{
                    type : "text",
                    placeholder : "",
                },
                value : null
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
                
                {this.state.nodeForm.controls.map(elemenet)}

                <Button  text="Add Node" class={classes.addButton} clicked={this.addNodeHandler}>Add Node</Button>
            </div>

        )
    }
}

export default Linkedlist