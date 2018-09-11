import React, { Component } from 'react';
import { AuthConsumer } from '../../contexts/AuthContext';

class UserDropDown extends Component {
    render(){
        return(
            <AuthConsumer>
                {(auth) => {

                }}
            </AuthConsumer>
        )
    }
}

export default UserDropDown;