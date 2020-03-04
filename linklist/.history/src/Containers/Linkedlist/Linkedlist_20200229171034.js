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
        let form = []
        for(let i in this.state.nodeForm){
            form.push({
                id : i,
                data : this.state.nodeForm[i]
            })
        }

        let formData =  form.map(element =>{
            return <Input type={element.elementType} value={element.value} elementConfig={element.elementConfig} key={element.id} />
        })

        console.log(form)
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