import React, {Component} from 'react';
import Input from '../../Components/UI/Input'

class UserRegistration extends Component {
    state = {
        userForm : {
            name : {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ''
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