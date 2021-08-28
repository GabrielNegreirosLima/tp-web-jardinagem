import "./login.css"
import iconLogin from "../../../images/icon-login.png"

function Login(){
  return (
    <main>
      <section>
        <div>
          <div id="cabecalho-section">
            <img id="login-img" src={iconLogin} alt="Símbolo de um boneco que representa o usuário">
            </img>
            <h1>Login do Usuário</h1>
          </div>
          <form action="" id="form-login">
            <label htmlFor="login-input" id="login-input-lbl">E-mail:</label>
            <input name="email" id="login-input" type="email" required />
            <label htmlFor="password-input" id="password-input-lbl">
              Senha:
            </label>
            <input name="password" id="password-input" type="password" minLength="8" required />
            <button type="submit" id="login-button">Entrar</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login