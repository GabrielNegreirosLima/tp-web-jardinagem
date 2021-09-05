// módulos da plataforma
import path from 'path'

// módulos npm
import hbs from 'hbs'
import dotenv from 'dotenv'
import express from 'express'

// a definição das rotas de cada "entidade" está isolada em seu próprio arquivo
// de forma a tornar o código do projeto organizado
import index from './routes/index.js';
import user from './routes/user.js';

dotenv.config();
+
const app = express();
const __dirname = new URL('.', import.meta.url).pathname;

app.use(express.json()); // necessário pra POST, PUT, PATCH etc.

// configura a pasta que contém as views e o handlebars como templating engine
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

// configura as rotas "de cada entidade" da aplicação (separadinho, organizado)
app.use('/', index)
app.use('/users', user)

app.use(express.static(path.join(__dirname, '')))   // serve arquivos estáticos

app.use(express.static(path.join(__dirname, ''))); // serve arquivos estáticos

const server = app.listen(3000, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log(`Listening at http://${host}:${port}`);
});

export default app;
