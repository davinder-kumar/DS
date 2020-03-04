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
        return(
            <div>
                Test
                <Button text="Add Node" clicked={this.addNodeHandler}>Add Node</Button>
            </div>
            
        )
    }
}

export default Linkedlist