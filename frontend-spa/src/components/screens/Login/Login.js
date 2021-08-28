import "./login.css"
import React from 'react'

function Login(){
  return (
    <div>
      <div id="cabecalho-section">
        <img id="login-img" src="../../../images/icon-login.png" alt="Símbolo de um boneco que representa o usuário">
        </img>
        <h1>Login do Usuário</h1>
      </div>
      <form action="" id="form-login">
        <label htmlFor="login-input" id="login-input-lbl">e-mail:
            </label>
        <input name="email" id="login-input" type="email" required></input>

        <label htmlFor="password-input" id="password-input-lbl">senha:<a href="algumaPagina"
                    target="_blank">Esqueceu?</a></label>
        <input name="password" id="password-input" type="password" minLength="8" required></input>

        <button type="submit" id="login-button">continuar</button>
      </form>
    </div>
  );
}

export default Login