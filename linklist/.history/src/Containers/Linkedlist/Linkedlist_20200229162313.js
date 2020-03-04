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
            <div className={classes.Node}>
                Test
            </div>
            
        )
    }
}

export default Linkedlist