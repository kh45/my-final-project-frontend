import React from 'react'
import { connect } from 'react-redux';
import { login } from '../actions/login';

class Login extends React.Component {
    
    state = {
        username: '',
        password: ''
    }

    handleOnUsernameChange = event => {
        event.preventDefault();
        this.setState({
            username: event.target.value
        })
        
    }

    handleOnPasswordChange = event => {
        event.preventDefault();
        this.setState({
            password: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.logIn(event)
    }

    logIn = (event) => {
        event.preventDefault()
        // debugger
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                "username" : `${event.target.username.value}`,
                "password" : `${event.target.password.value}`,
            })
          })
        .then(resp => resp.json())
        .then(user => {
            console.log(user)
            localStorage.setItem('user', user.id)
            this.props.login(user)})
        .catch(() => alert("Please enter a valid username."))
      }


render() {
    return(
        <div className="login-container">
            <div className="login-image-container">
                <img className="login-image" alt="hello" src={require('../assets/login1.jpg')} />
                {/* <img className="login-image" src={require('../assets/login2.jpg')} /> */}
                {/* <img className="login-image" src={require('../assets/login3.jpg')} /> */}
            </div>
            <h2>My Decent App</h2>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnUsernameChange(event)}
            id="username"
            placeholder="Username" />
        </p>
        <p>
          <input
            type="password"
            onChange={(event) => this.handleOnPasswordChange(event)}
            id="password"
            placeholder="Password" />
        </p>
        <input type="submit" />
      </form>
        </div>
    )
}

}

export default connect(null, {login})(Login)