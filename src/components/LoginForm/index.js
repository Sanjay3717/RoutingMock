import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}

    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
      console.log(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-component">
        <div className="app-container">
          <div className="image-bg-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png "
              alt="website login"
              className="login-image"
            />
          </div>
          <div className="form-container">
            <form onSubmit={this.submitForm}>
              <h1 className="welcome-heading">Welcome Back!</h1>
              <label htmlFor="id" className="label-item">
                User ID
              </label>{' '}
              <br />
              <input
                type="text"
                id="id"
                placeholder="Enter User ID"
                className="input-item"
                onChange={this.changeUserName}
              />{' '}
              <br />
              <label htmlFor="pin" className="label-item">
                PIN
              </label>{' '}
              <br />
              <input
                type="password"
                id="pin"
                placeholder="Enter PIN"
                className="input-item"
                onChange={this.changePassword}
              />{' '}
              <br />
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            {showErrorMsg ? <p>* {errorMsg}</p> : null}
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm
