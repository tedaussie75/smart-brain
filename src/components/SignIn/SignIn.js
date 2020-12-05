import React, { Component } from 'react';
import {SignInStyled} from './SignInStyled';

export class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            signInEmail : '',
            signInPassword : ''
        }
    }
    onEmailChange = (event) =>{
        this.setState({signInEmail : event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({signInPassword : event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('http://localhost:4000/signin', {
            method: "post",
            headers : {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({
                email : this.state.signInEmail,
                password : this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }
    render() {
        const {onRouteChange} = this.props;
    return(
        <SignInStyled>
            <legend>Sign In</legend>
            <label htmlFor="email">Email</label>
            <input onChange={this.onEmailChange} type="email" name="email" placeholder="Please enter your email" required/>
            <label htmlFor="password">Password</label>
            <input onChange={this.onPasswordChange} type="password" name="password"  placeholder="Please enter your password" required/>
            <input type="submit" onClick={()=>this.onSubmitSignIn()} value="Sign In"/>
            <p onClick={()=>onRouteChange('register')}>Register</p>
        </SignInStyled>
    )
}
}