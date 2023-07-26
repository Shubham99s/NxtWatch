import styled from 'styled-components'

export const LoginPage = styled.div`
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
  box-shadow: ${props => props.boxShadow};
  font-family: 'Roboto';
  width: 500px;
`

export const LoginLogo = styled.img`
  width: 220px;
  margin: 0px 0px 40px 0px;
`

export const LoginLabel = styled.label`
  font-size: 13px;
  color: ${props => props.color};
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 6px;
  margin-left: 4px;
  align-self: flex-start;
`

export const LoginInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid #606060;
  border-radius: 5px;
  font-family: 'Roboto';
  color: #424242;
  padding: 13px;
  font-size: 15px;
  outline: none;
`

export const ShowPassBox = styled.div`
  align-self: flex-end;
  margin: 10px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ShowPassInput = styled.input`
  background-color: transparent;
  width: 16px;
  height: 18px;
  cursor: pointer;
`

export const ShowPassLabel = styled.label`
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 300;
  margin: 0;
`

export const ButtonErrorBox = styled.div`
  width: 100%;
  margin: 40px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  border: 0;
  border-radius: 10px;
  background-color: #1b82f9;
  width: 100%;
  padding: 12px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ff0000;
  margin: 10px;
`
