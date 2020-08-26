import React from 'react';
import './register.css';
import { login } from '../autho/Repository'
import { isAuthenticated } from '../autho/Repository'
import {TextField } from '@material-ui/core';

export default class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }
componentDidMount() {
    if( isAuthenticated() )
    this.props.history.push("/home")
    else {}
}
handleSuccessfulAuth() {
  console.log('hi')
    window.location.reload(false)
}
  render() {
    return (
        <div className="container">
            <div className="box-controller">
                <div className="controller">
                    Login
                </div>
            </div>
            <div className="box-controller">
              <LoginBox  handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        </div> 
    )
  }
}
class LoginBox extends React.Component {
  constructor(props) {
    super(props);
       this.state = { 
           email: '', 
           password: '',
       };
       this.handleInputChange =this.handleInputChange.bind(this);
       this.submitLogin =this.submitLogin.bind(this);
       }
   
       handleInputChange(event) {
          this.setState({[event.target.name]: event.target.value})
          }
       submitLogin(e){
           e.preventDefault();
           login(this.state)
           .then(res => 
             this.props.handleSuccessfulAuth()
           )
           .catch(err => 
              err)
           }
  render() {
    return (
      <div className="inner-container">
          <div className="header">
            Login
          </div>
                <TextField 
                  id="standard-basic" 
                  label="email"
                  name="email"
                  onChange={ this.handleInputChange }
                />
                <TextField 
                  id="standard-basic" 
                  label="password"
                  name="password"
                  type="password"
                  onChange={ this.handleInputChange }
                />
              <p id="loginMessage"></p>
              <button 
                type="button" 
                className="login-btn" 
                onClick={ this
                .submitLogin
                .bind(this)}>Login</button>
          
      </div>
    )
  }
}