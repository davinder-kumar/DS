import React, {Component} from 'react'
import classes from './Linkedlist.module.css'
import Button from '../../Components/UI/Button'
class Linkedlist extends Component{
    state = {

    }
    addNodeHandler = () => {

    }
    render(){
        return(
            <div className={classes.Node}>
                Test
            </div>
            <Button text="Add Node" clicked={this.addNodeHandler}>Add Node</Button>
        )
    }
}

export default Linkedlist