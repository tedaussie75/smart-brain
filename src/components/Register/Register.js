import React, { Component } from 'react'
import {SignInStyled} from '../SignIn/SignInStyled';

export class Register  extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            name : ''
        }
    }
    onNameChange = event => {
        this.setState({name : event.target.value})
    }   
    onEmailChange = event => {
        this.setState({email : event.target.value})
    }   
    onPasswordChange = event => {
        this.setState({password : event.target.value})
    }
    onSubmitRegister = () => {
        fetch('http://localhost:4000/register', {
            method : 'post',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name: this.state.name,
                password: this.state.password,
                email: this.state.email
            })
        })
        .then(response => response.json())
        .then( user => {
            if (user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }
    render() {
    return(
        <SignInStyled>
            <legend>Sign Up</legend>
            <label htmlFor="name">name</label>
            <input onChange={this.onNameChange} type="name" name="name" placeholder="Please enter your name" required/>
            <label htmlFor="email">Email</label>
            <input onChange={this.onEmailChange} type="email" name="email" placeholder="Please enter your email" required/>
            <label htmlFor="password">Password</label>
            <input onChange={this.onPasswordChange} type="password" name="password"  placeholder="Please enter your password" required/>
            <input type="submit" onClick={()=>this.onSubmitRegister()} value="Register"/>
        </SignInStyled>
    )
}
}