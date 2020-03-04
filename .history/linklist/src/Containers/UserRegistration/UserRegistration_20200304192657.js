import React, {Component} from 'react';
import Input from '../../Components/UI/Input'

class UserRegistration extends Component {
    state = {
        userForm : {
            name : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Name'
                }
            },
            username : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter username'
                }
            },
            email : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter email'
                }
            },
            password : {
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
        Object.keysthis.state.userForm.
    
        return (
            <div>

            </div>
        );
    }
}

export default UserRegistration;