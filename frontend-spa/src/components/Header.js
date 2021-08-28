import logo from "../images/lotus.png"

function Header(){

    return (
      <header id="cabecalho">
          <button onClick={toggleSidebar} id="toggle-sidebar">
            ☰
          </button>
          <div className="logo">
              <img src={logo} alt="Ícone da comunidade de jardinagem" />
              <h1>Comunidade de jardinagem</h1>
          </div>
          <nav>
              <button className="botao-custom">
                  <a href="index.html">Página Inicial</a>
              </button>
              <button className="botao-custom">
                  <a href="user_profile.html">Perfil</a>
              </button>
              <button className="botao-custom">
                  <a href="fav_plants.html">Plantas favoritas</a>
              </button>
          </nav>
      </header>
    );
}

function toggleSidebar(){
  let bodyEl = document.querySelector("body");

  bodyEl.classNameList.toggle("menu-visivel");
}

export default Header;