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
            }
        }
    }
    let formData = form.map()
    render(){
        return (
            <div>

            </div>
        );
    }
}

export default UserRegistration;