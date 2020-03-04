import React, {Component} from 'react';
import Input from '../../Components/UI/Input'
import classes from './UserRegistration.module.css';

class UserRegistration extends Component {
    state = {
        userForm : {
            Name : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Name'
                }
            },
            Username : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter username'
                }
            },
            Email : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter email'
                }
            },
            Password : {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter password'
                }
            },
            'Confirm password' : {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm password'
                }
            }
        }
    }


    // let formData = form.map()
    render(){
        let form = []
        Object.keys(this.state.userForm).forEach(e=>{
            form.push({
                id: e,
                data : this.state.userForm[e]
            })
        })

        let formData = form.map(e => {
            return <Input type={e.data.elementType} elementConfig={e.data.elementConfig} label={e.id} key={e.id} value={e.data.value} />
        })
    
        return (
            <div className={class}>
                {formData}
            </div>
        );
    }
}

export default UserRegistration;