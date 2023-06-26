import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Home extends Component {
  onLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <div className="home-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <button type="button" className="logout-btn" onClick={this.onLogOut}>
            Logout
          </button>
        </div>
        <div className="bottom-container">
          <h1 className="quote-word">Your Flexibility, Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
            className="digital-card"
          />
        </div>
      </div>
    )
  }
}
export default Home
