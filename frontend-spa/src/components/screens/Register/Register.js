import icon from "../../../images/icon-login.png"

function Register(){
  return (
    <div>
      <div id="cabecalho-section">
          <img id="login-img" src={icon} alt="Símbolo de um boneco que representa o usuário" />
          <h1>Cadastre-se</h1>
      </div>
      <form action="" id="form-register">
          <label for="login-input" id="login-input-lbl">E-mail:</label>
          <input class="common-input" name="email" id="login-input" type="email" placeholder="Ex: luanasilva@gmail.com" required />
          <label class="common-input" for="password-input" id="password-input-lbl">
            Senha:
          </label>
          <input class="common-input" name="password" id="password-input" type="password" minlength="8" required />
          <label class="common-input" for="nome-input" id="nome-input-lbl">Nome e Sobrenome</label>
          <input class="common-input" name="name" id="nome-input" type="text" placeholder="Ex: José Messias" required />
          <label for="data-nascimento-input" id="data-nascimento-input-lbl">Data de nascimento:</label>
          <input class="common-input" name="birth-date" id="data-nascimento-input" type="date" required />
          <div id="radio-div"> 
            <label id="radio-lbl-feminino">
              <input name="gender" type="radio" value="feminino" class="radio-btn" required checked />Feminino
            </label>
            <label id="radio-lbl-masculino">
              <input name="gender" type="radio" value="masculino" class="radio-btn" />Masculino
            </label>
          </div>
          <label for="phone" id="login-phone-lbl">Telefone: </label>
          <input class="common-input" name="phone" type="tel" id="phone" placeholder="Ex:(99) 9999-9999" pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}" required />
          <button type="submit" id="register-button">Registrar</button>
      </form>
    </div>
  );
}

export default Register;