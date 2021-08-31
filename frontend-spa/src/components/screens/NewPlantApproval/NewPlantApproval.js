import "./new_plant_approval.css"
import Header from "../../Header/Header.js"
import Sidebar from "../../Sidebar/Sidebar.js"

function NewPlantApproval(){

  // eslint-disable-next-line
  {/* As imagens vão ser passsadas dinamicamente
        Existirão outras aprovações então é preciso subir nested routes:
        - new_plant_approval/1
        - new_plant_approval/200
    */}
  
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <section id="section-one">
          <h2>Aprovação de solitações para incluir novas plantas</h2>
          <article className="article-novas-plantas">
            <div className="div-novas-plantas">
              <figure>
                <img className="img-inseridas" src="images/margarida.jpg" alt="Uma margarida de cor branca" />
              </figure>
              <p>
                By Jose On Jun 20, 2021<time>10:11 pm</time>Lorem ipsum dolor sit amet, consectetur adipisciLorem ipsum dolor sit amet, consectetur adipisci
              </p>
            </div>
            <form>
              <button type="submit" id="confirm-button">Confirmar</button>
              <button type=" submit" id="excluir-button">Excluir</button>
            </form>
          </article>
          <article className="article-novas-plantas">
            <div className="div-novas-plantas">
              <figure>
                <img className="img-inseridas" src="images/marguerite_yellow.jpg" alt="Uma margarida de cor amarela" />
              </figure>
              <p>
                By Jose On Jun 20, 2021<time>10:11 pm</time>Lorem ipsum dolor sit amet, consectetur adipisciLorem ipsum dolor sit amet, consectetur adipisci
              </p>
            </div>
            <form>
              <button type="submit" id="confirm-button">Confirmar</button>
              <button type=" submit" id="excluir-button">Excluir</button>
            </form>
          </article>
      </section>
      <section id="section-two">
          <div id="div-edicao">
            <h2>Edição</h2>
            <form id="form-pesquisa">
              <input id="search-input" type="search" name="search-plants"/>
              <button type="submit">buscar</button>
            </form>
          </div>
          <article id="article-descricao">
              <div id="div-descricao-img">
                <h1>Margarida</h1>
                <figure>
                  <img id="img-descricao" src="images/margarida.jpg" alt="Uma margarida cor branca" />
                </figure>
              </div>
              <div id="div-descricao-txt">
                <h1>Descrição</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
          </article>
          <article id="article-facilidade-cuidado">
              <div id="div-estrelas">
                <button type="button" className="star1 fa fa-star checked"></button>
                <button type="button" className="star2 fa fa-star "></button>
                <button type="button" className="star3 fa fa-star "></button>
                <button type="button" className="star4 fa fa-star"></button>
                <button type="button" className="star5 fa fa-star"></button>
              </div>
              <h1 id="h-facilidade-cuidar">Facilidade de cuidar</h1>
          </article>
          <article id="article-consumo-agua">
            <input id="input-consumo-agua" name="consumo-agua" type="range" min="0" max="100" step="10" />
            <label for="input-consumo-agua" id="lbl-consumo-agua ">
              <h1>Consumo de água</h1>
            </label>
          </article>
          <div id="div-mais-fotos-planta ">
            <h1>Mais fotos de Margarida</h1>
            <article className="article-mais-fotos-planta">
              <img className="img-mais-plantas" src="images/marguerite_yellow.jpg" alt="Uma margarida amarela "/>
              <img className="img-mais-plantas" src="images/margaride_pink.jpg" alt="Uma margarida rosa " />
            </article>
          </div>

          <form id="form-salvar-edicao">
            <button type="submit">Salvar edição</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default NewPlantApproval;