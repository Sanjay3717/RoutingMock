import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const LoginLogoImage = styled.img`
  height: 60px;
  width: 200px;
`
export const LoginForm = styled.form`
  padding-top: 20px;
`
export const LabelElement = styled.label`
  color: #475569;
  font-weight: 600;
`
export const InputElement = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 5px;
  padding: 10px;
  margin-bottom: 20px;
`
export const CheckBoxInput = styled.input`
  height: 20px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border-width: 0px;
  margin-top: 20px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: red;
`
