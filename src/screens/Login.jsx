import React, { useState } from 'react'
import { Container, TextField, Button } from "@material-ui/core"
import { login } from "../services"
import { SELLER } from "../constants/roles"
import { COLABORATOR_SCREEN, SELLER_SCREEN } from "../constants/routes"

import { setUserData, setToken } from "../redux/user/actions"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { isValidEmail } from "../helpers/validator"


const Login = ({ dispatchSetToken, dispatchSetUserData, history }) => {
  const [email, setEmail] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")

  const [password, setPassword] = useState("")


  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setErrorEmail("Debe ingresar un email válido")
    }
    if (password.length < 6) {
      setErrorPassword("el password debe tener al menos 6 caracteres");
    }
    login({ email, password }, successLogin, errorLogin)
  }
  const successLogin = (data) => {

    const { user_name, email, rol, jwt } = data
    dispatchSetUserData({ user_name, email, rol })
    dispatchSetToken(jwt.access_token)
    rol === SELLER ? history.push(SELLER_SCREEN) : history.push(COLABORATOR_SCREEN)


  }
  const errorLogin = (err) => {
  }

  return (
    <Container className="login">
      <h3> Login</h3>
      <TextField
        variant="outlined"
        className="email"
        type="email"
        error={errorEmail.length > 0}
        helperText={errorEmail}
        placeholder="Ingresa tu email"
        onChange={(e) => { setEmail(e.target.value); setErrorEmail("") }}
        fullWidth
      ></TextField>
      <TextField
        error={errorPassword.length > 0}
        helperText={errorPassword}
        variant="outlined"
        className="password"
        placeholder="Ingresa tu email"
        type="password"
        fullWidth

        onChange={(e) => { setPassword(e.target.value); setErrorPassword("") }}
      ></TextField>

      <Button value="Login" onClick={handleLogin}>Login</Button>

    </Container>
  )
}
const mapStateToProps = (state) => {
  const { user, token } = state.user;
  return {
    user,
    token,
  };
};
const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(
    {
      dispatchSetUserData: setUserData,
      dispatchSetToken: setToken,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);

