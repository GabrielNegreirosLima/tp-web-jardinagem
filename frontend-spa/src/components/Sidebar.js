import iconUser from "../images/icon-user.png";

function Sidebar(props){

  return (
    <div> 
      <aside id="barra-lateral">
          <img src={iconUser} alt="Foto do usuário" />
          <button class="botao-custom botao-sidebar">
              <a href="user_profile.html">Meu Perfil</a>
          </button>
          <button class="botao-custom botao-sidebar">
              <a href="add_plant.html">Adicionar nova planta</a>
          </button>
          <button class="botao-custom botao-sidebar">
              <a href="">Sair da conta</a>
          </button>
      </aside>
    </div>
  );
}

export default Sidebar;