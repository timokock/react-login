import React, { Component } from 'react'
import './Login.css'
import { PostData } from '../../services/PostData'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.login = this.login.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  login = () => {
    PostData('login', this.state).then ((result) => {
      let responseJSON = result
      console.log(responseJSON);
    })
  }
  

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})   
    console.log(this.state);
    
  }

  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column">
          <h3>Login Component</h3>
          <label htmlFor="username">Username</label>
          <input type="text" className="" name="username" placeholder="Username" onChange={this.onChange}/>
          <label htmlFor="password">Password</label>
          <input type="password" className="" name="password" placeholder="Password" onChange={this.onChange}/>
          <input type="submit" value="Login" className="button" onClick={this.login}/>
        </div>
      </div>
    )
  }
}

export default Login;
