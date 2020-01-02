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
            <div className="login-form">
                <h1 className="intro">SportsScraper</h1>
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
      {/* <img className="login-image" alt="hello" src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9956aeaf-2c66-41ac-85e8-1423f66ad703/da3m158-7e85b9d5-c511-455a-b5e1-e3571c1f9fdf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5NTZhZWFmLTJjNjYtNDFhYy04NWU4LTE0MjNmNjZhZDcwM1wvZGEzbTE1OC03ZTg1YjlkNS1jNTExLTQ1NWEtYjVlMS1lMzU3MWMxZjlmZGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yubn-dya0rErDPiLO1VH4RDXVXeRMWG98YL_YOqMmsk' /> */}
            {/* <h2>My Decent App</h2> */}
            {/* <form onSubmit={(event) => this.handleOnSubmit(event)}> */}
        {/* <p>
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
      </form> */}
        </div>
    )
}

}

export default connect(null, {login})(Login)