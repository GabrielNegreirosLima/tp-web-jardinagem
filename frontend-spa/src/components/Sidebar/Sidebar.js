import iconUser from "../../images/icon-user.png";
import "./sidebar.css"

function Sidebar(props){

  return (
    <aside id="barra-lateral">
        <img src={iconUser} alt="Foto do usuário" />
        <button className="botao-custom botao-sidebar">
          <a href="user_profile">Meu Perfil</a>
        </button>
        <button className="botao-custom botao-sidebar">
          <a href="add_plant">Adicionar nova planta</a>
        </button>
        <button className="botao-custom botao-sidebar">
          <a href="/logout">Sair da conta</a>
        </button>
    </aside>
  );
}

export default Sidebar;