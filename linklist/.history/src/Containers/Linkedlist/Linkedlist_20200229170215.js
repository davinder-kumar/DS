import React, { Component } from 'react'
import classes from './Linkedlist.module.css'
import Button from '../../Components/UI/Button'
import Input from '../../Components/UI/Input'
class Linkedlist extends Component {
    state = {
        nodes: [],
        nodeForm: {
            node: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "",
                },
                value: null
            }
        }
    }
    addNodeHandler = () => {

    }
    render() {
        console.log(classes)
        const form = []
        for(let i in this.state.nodeForm){
            form.push({
                id : node,
                data : this.state.nodeForm[]
            })
        }
        return (
            <div>
                <div id={classes.head}>
                </div>
                <Button text="Add Node" class={classes.addButton} clicked={this.addNodeHandler}>Add Node</Button>
            </div>

        )
    }
}

export default Linkedlist