import React, { Component } from 'react'
import classes from './Linkedlist.module.css'
import Button from '../../Components/UI/Button'
import Input from '../../Components/UI/Input'
import Node from '../../Node';
class Linkedlist extends Component {
    state = {
        head: "",
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
        let obj = "";
        if (this.state.nodes.length < 1) {
            let obj = new Node(this.state.nodeForm.node.value)
            this.setState({ head: obj })
        } else {
            let current = this.state.head
            while (current) {
                current = current.next
            }
            current.next = obj
        }
        this.setState({
            nodes: [...this.state.nodes, obj]
        })
    }
    onChangeHandler = (event) => {
        let val = event.target.value;
        this.setState({
            ...this.state,
            nodeForm: {
                ...this.state.nodeForm,
                node: {
                    ...this.state.nodeForm.node,
                    value: val
                }
            }

        })

    }
    render() {

        const va = {
            state : {
                first :{
                    secondtest : {
                        s: f
                    }
                }
            }
        }

        const dsdsa = {...va,
            state : {
                ...va.state,
                first : {
                    ...va.state.first,
                    [secondtest] : {
                        ...va.state.first.secondtest,
                        s : {
                            ...va.state.first.secondtest.s
                        }
                    }
                }
            }
            }
        console.log(
            
        )

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