import dotenv from 'dotenv';
import express from 'express';
// eslint-disable-next-line import/extensions
import db from '../db/db.js';

dotenv.config();

const app = express();

app.get('/', async (req, res) => {
  const [people] = await db.execute({
    sql: 'SELECT * from Users',
    nestTables: true,
  });

  res.json({ people });
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log(`Listening at http://${host}:${port}`);
});
