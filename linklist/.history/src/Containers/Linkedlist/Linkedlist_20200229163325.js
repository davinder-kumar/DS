import React, {Component} from 'react'
import classes from './Linkedlist.module.css'
import Button from '../../Components/UI/Button'
class Linkedlist extends Component{
    state = {

    }
    addNodeHandler = () => {
        console.log("add node");
    }
    render(){
        console.log(classes)
        return(
            <div>
                <div id={classes.head}>

                </div>
                <div id={a}
                <Button text="Add Node" clicked={this.addNodeHandler}>Add Node</Button>
            </div>
            
        )
    }
}

export default Linkedlist