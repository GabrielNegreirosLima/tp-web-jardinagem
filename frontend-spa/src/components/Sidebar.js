function Sidebar(props){

  return (
    <div> 
      <aside id="barra-lateral">
          <img src="images/icon-user.png" alt="Foto do usuário" />
          <button className="botao-custom botao-sidebar">
              <a href="user_profile.html">Meu Perfil</a>
          </button>
          <button className="botao-custom botao-sidebar">
              <a href="add_plant.html">Adicionar nova planta</a>
          </button>
          <button className="botao-custom botao-sidebar">
              <a href="">Sair da conta</a>
          </button>
      </aside>
    </div>
  );
}

export default Sidebar;