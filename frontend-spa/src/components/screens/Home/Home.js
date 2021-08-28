
function Home(){
  return (
    <div>
      <main id="principal">
            <section>
                <div class="banner">
                    <h1>Comunidade de jardinagem</h1>
                </div>
                <h2>Plantas</h2>
            </section>
            <section class="box-plantas">
                <article class="post-plantas">
                    <a href="com_plants.html">
                        <h3>Margarida</h3>
                        <img src="images/margarida.jpg" class="foto-planta" alt="Imagem de uma margarida, com pétalas brancas e centro amarelo" />
                        <label>Facilidade de cuidar:
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star" disabled></button>
                        </label>
                        <p>
                            A flor margarida significa inocência, juventude, virgindade, sensibilidade, pureza, paz, bondade e afeto.
                        </p>
                    </a>
                </article>
                <article class="post-plantas">
                    <a href="com_plants.html">
                        <h3>Gardênia</h3>
                        <img src="images/gardenia.jpg" class="foto-planta" alt="Imagem de uma gardênia, que tem pétalas brancas" />
                        <label>Facilidade de cuidar:
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star" disabled></button>
                            <button class="fa fa-star" disabled></button>
                        </label>
                        <p>
                            Gardênia é uma flor originária da China, que pode significar pureza, sinceridade, doçura e também
                             pode ser o símbolo de um amor secreto.
                        </p>
                    </a>
                </article>
                <article class="post-plantas">
                    <a href="com_plants.html">
                        <h3>Flor de Lis</h3>
                        <img src="images/flor-de-lis.jpg" class="foto-planta" alt="Imagem de uma flor de lis, com pétalas finas na cor vermelha" />
                        <label>Facilidade de cuidar:
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star" disabled></button>
                            <button class="fa fa-star" disabled></button>
                        </label>
                        <p>
                            Flor-de-lis é a representação de um lírio utilizado antigamente nos brasões e escudos da realeza francesa, associada
                            em especial ao rei Luis VIII, quem a utilizou primeiramente em um sinete.
                        </p>
                    </a>
                </article>  
                <article class="post-plantas">
                    <a href="com_plants.html">
                        <h3>Orquidea</h3>
                        <img src="images/orquidea.jpg" class="foto-planta" alt="Imagem de uma orquidea rosa" />
                        <label>Facilidade de cuidar:
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                        </label>
                        <p>
                            Orquídeas são flores que podem significar amor, autoridade, poder,
                             desejo e sedução, dependendo da cor em questão.
                        </p>
                    </a>
                </article>  
                <article class="post-plantas">
                    <a href="com_plants.html">
                        <h3>Ora-pro-nóbis</h3>
                        <img src="images/ora_pro_nobis.jpg" class="foto-planta" alt="Imagem de ora-pro-nóbis, uma planta comestível que tem folhas verdes" />
                        <label>Facilidade de cuidar:
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star checked" disabled></button>
                            <button class="fa fa-star" disabled></button>
                        </label>
                        <p>
                            A ora-pro-nóbis, é uma planta comestível não convencional, mas que é considerada uma planta nativa
                             e abundante em solo brasileiro.
                        </p>
                    </a>
                </article>                 
            </section>
        </main>
    </div>
  );  
}

export default Home;