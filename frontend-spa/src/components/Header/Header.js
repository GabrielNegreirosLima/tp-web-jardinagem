import logo from "../../images/lotus.png"
import "./header.css"

function Header(){

  function toggleSidebar(){
    const bodyEl = document.querySelector("body");
    const sidebarEl = document.getElementById('barra-lateral')

    bodyEl.classList.toggle("menu-visivel");
    sidebarEl.classList.toggle("barra-lateral-visivel");
  }

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
                <a href="/">Página Inicial</a>
            </button>
            <button className="botao-custom">
                <a href="user_profile">Perfil</a>
            </button>
            <button className="botao-custom">
                <a href="fav_plants">Plantas favoritas</a>
            </button>
        </nav>
    </header>
  );
}


export default Header;