import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Context from '../../Context/Context'

import {
  LoginPage,
  LoginForm,
  LoginLogo,
  LoginLabel,
  LoginInput,
  ShowPassInput,
  ShowPassLabel,
  LoginButton,
  ErrorMsg,
  ShowPassBox,
  ButtonErrorBox,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    error: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPass = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetail = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetail),
    }
    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {
        expires: 30,
        path: '/',
      })
      history.replace('/')
    } else {
      this.setState({error: true, errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, error, errorMsg, showPassword} = this.state

    const inputType = showPassword ? 'text' : 'password'

    const jsToken = Cookies.get('jwt_token')

    if (jsToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Context.Consumer>
        {value => {
          const {darkTheme} = value
          console.log(darkTheme)
          const logoUrl = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginPage backgroundColor={darkTheme ? '#212121' : '#ffffff'}>
              <LoginForm
                boxShadow={darkTheme ? '' : '0px 0px 15px 0px #d7dfe9'}
                backgroundColor={darkTheme ? '#0f0f0f' : '#ffffff'}
                onSubmit={this.onSubmitForm}
              >
                <LoginLogo src={logoUrl} alt="website logo" />

                <LoginLabel
                  color={darkTheme ? '#ffffff' : '#909090'}
                  htmlFor="username"
                >
                  USERNAME
                </LoginLabel>
                <LoginInput
                  placeholder="Username"
                  id="username"
                  type="text"
                  value={username}
                  onChange={this.onChangeUsername}
                />

                <LoginLabel
                  color={darkTheme ? '#ffffff' : '#909090'}
                  htmlFor="password"
                >
                  PASSWORD
                </LoginLabel>
                <LoginInput
                  placeholder="Password"
                  id="password"
                  type={inputType}
                  value={password}
                  onChange={this.onChangePassword}
                />

                <ShowPassBox>
                  <ShowPassInput
                    id="checkbox"
                    type="checkbox"
                    onChange={this.onChangeShowPass}
                  />
                  <ShowPassLabel
                    color={darkTheme ? '#ffffff' : '#000000'}
                    htmlFor="checkbox"
                  >
                    Show Password
                  </ShowPassLabel>
                </ShowPassBox>
                <ButtonErrorBox>
                  <LoginButton type="submit">Login</LoginButton>
                  {error && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </ButtonErrorBox>
              </LoginForm>
            </LoginPage>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Login
