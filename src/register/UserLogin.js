import React from 'react';
import './register.css';
import { BrowserRouter as Redirect } from 'react-router-dom';
import { login, getUserInfo } from '../autho/Repository'
import { isAuthenticated } from '../autho/Repository'
import {TextField } from '@material-ui/core';

export default class UserLogin extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        
      }
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }
handleSuccessfulAuth(data) {
  this.props.handleLogin(data)
  window.scrollTo(0,0)
  this.props.history.push("/notes")
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
              getUserInfo()
              .then(res => {
                  this.props.handleSuccessfulAuth(res)
              })
              .catch(err => {
                  console.log(err);
              })
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
            <div className="row space-under">
                <TextField 
                  id="email" 
                  label="email"
                  name="email"
                  onChange={ this.handleInputChange }
                />
            </div>
            <div className="row space-under">
                <TextField 
                  id="password" 
                  label="password"
                  name="password"
                  type="password"
                  onChange={ this.handleInputChange }
                />
            </div>
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