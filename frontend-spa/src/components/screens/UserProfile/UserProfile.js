import iconUser from "../../../images/icon-user.png";
import Header from "../../Header/Header.js"
import Sidebar from "../../Sidebar/Sidebar.js"
import "./user_profile.css"

function UserProfile(){
  return (
    <>
      <Header />
      <Sidebar />
      <main id="principal">
        <section>
          <h1 id="title">Perfil do Usuário</h1>
          <img src={iconUser} alt="Foto do usuário" />
        </section>
        <section>
          <button id="edit" className="botao-custom">Editar Perfil</button>
          <form action="/add_plant" method="post">
            <fieldset>
                <label>Nome e sobrenome: 
                  <input type="text" name="name" value="José da Silva" required disabled/>
                </label>
                <label>Seu email:
                  <input type="email" required disabled />
                </label>
                <label>Data de nascimento: 
                  <input type="date" id="data-de-nascimento" name="data-de-nascimento" max="2021-1-1" value="1997-1-1" required disabled />
                </label>
                <p>Gênero:
                  <label>
                    <input type="radio" name="gender" value="feminino"  required disabled />Feminino
                    <input type="radio" name="gender" value="masculino" required  checked disabled />Masculino
                    <input type="radio" name="gender" value="outro" required disabled />Outros
                  </label>           
                </p>
                <label>Telefone
                  <input type="tel" name="phone" id="phone" value="(31) 99999-9999" required disabled />
                </label>
                <button className="botao-custom" id="save-profile" disabled>Salvar</button>
            </fieldset>
          </form>
        </section>
      </main>
    </>
  );
}

export default UserProfile;