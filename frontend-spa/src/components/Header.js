import logo from "../images/lotus.png"

function Header(){

    return (
      <header id="cabecalho">
          <button onClick={toggleSidebar} id="toggle-sidebar">
            ☰
          </button>
          <div class="logo">
              <img src={logo} alt="Ícone da comunidade de jardinagem" />
              <h1>Comunidade de jardinagem</h1>
          </div>
          <nav>
              <button class="botao-custom">
                  <a href="index.html">Página Inicial</a>
              </button>
              <button class="botao-custom">
                  <a href="user_profile.html">Perfil</a>
              </button>
              <button class="botao-custom">
                  <a href="fav_plants.html">Plantas favoritas</a>
              </button>
          </nav>
      </header>
    );
}

function toggleSidebar(){
  let bodyEl = document.querySelector("body");

  bodyEl.classList.toggle("menu-visivel");
}

export default Header;