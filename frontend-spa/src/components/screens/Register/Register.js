import icon from "../../../images/icon-login.png"

function Register(){
  return (
    <div>
      <div id="cabecalho-section">
          <img id="login-img" src={icon} alt="Símbolo de um boneco que representa o usuário" />
          <h1>Cadastre-se</h1>
      </div>
      <form action="" id="form-register">
          <label htmlFor="login-input" id="login-input-lbl">E-mail:</label>
          <input className="common-input" name="email" id="login-input" type="email" placeholder="Ex: luanasilva@gmail.com" required />
          <label className="common-input" htmlFor="password-input" id="password-input-lbl">
            Senha:
          </label>
          <input className="common-input" name="password" id="password-input" type="password" minLength="8" required />
          <label className="common-input" htmlFor="nome-input" id="nome-input-lbl">Nome e Sobrenome</label>
          <input className="common-input" name="name" id="nome-input" type="text" placeholder="Ex: José Messias" required />
          <label htmlFor="data-nascimento-input" id="data-nascimento-input-lbl">Data de nascimento:</label>
          <input className="common-input" name="birth-date" id="data-nascimento-input" type="date" required />
          <div id="radio-div"> 
            <label id="radio-lbl-feminino">
              <input name="gender" type="radio" value="feminino" className="radio-btn" required defaultChecked />Feminino
            </label>
            <label id="radio-lbl-masculino">
              <input name="gender" type="radio" value="masculino" className="radio-btn" />Masculino
            </label>
          </div>
          <label htmlFor="phone" id="login-phone-lbl">Telefone: </label>
          <input onKeyUp={phoneValidation} className="common-input" name="phone" type="tel" id="phone" placeholder="Ex:(99) 9999-9999" pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}" required />
          <button type="submit" id="register-button">Registrar</button>
      </form>
    </div>
  );
}

function phoneValidation(e){
  let phoneNumber = e.currentTarget.value;
  let prefix = phoneNumber.substring(0, 2);
  if (phoneNumber.length === 2) {
      prefix = phoneNumber.substring(0, 2);
      phoneNumber = `(${prefix})`
  } else if (phoneNumber.length === 9) {
    phoneNumber = `${phoneNumber}-`
  }
  e.currentTarget.value = phoneNumber;
}

export default Register;