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
                value: ""
            }
        }
    }
    addNodeHandler = () => {

    }
    onChangeHandler = (event) => {
        let val = event.target.value;
        let newNodeForm = {...this.state.nodeForm}
        newNodeForm.node.value = val;
        this.setState({
            nodeForm :newNodeForm
        })
        console.log(())
    }
    render() {
        let form = []
        for (let i in this.state.nodeForm) {
            form.push({
                id: i,
                data: this.state.nodeForm[i]
            })
        }

        let formData = form.map(element => {
            return <Input type={element.data.elementType}
                onChangeHandler={this.onChangeHandler}
                label="Add Node" value={element.data.value}
                elementConfig={element.data.elementConfig}
                key={element.id}
                 />
        })
        console.log(formData)
        return (
            <div>
                <div id={classes.head}>
                </div>
                {formData}

                <Button text="Add Node" class={classes.addButton} clicked={this.addNodeHandler}>Add Node</Button>
            </div>

        )
    }
}

export default Linkedlist