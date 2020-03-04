import React, { Component } from 'react'
import classes from './Linkedlist.module.css'
import Button from '../../Components/UI/Button'
import Input from '../../Components/UI/Input'
import Node from '../../Node';
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
        let obj = Node(this.state.nodeForm.node.value)
        this.setState({
            nodes : 
        })
    }
    onChangeHandler = (event) => {
        let val = event.target.value;
        let newNodeForm = { ...this.state.nodeForm }
        newNodeForm.node = {...this.state.nodeForm.node}
        newNodeForm.node.value = val
        this.setState({
            nodeForm: newNodeForm
        })

        // this.setState({
        //     ...this.state.nodeForm,
        //     nodeForm : {
        //         ...this.state.nodeForm,
        //         node : {
        //             ...this.state.nodeForm.node,
        //             value : event.target.value
        //         }
        //     } 
        // })
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