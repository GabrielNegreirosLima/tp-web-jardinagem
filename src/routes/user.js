import express from 'express';
// eslint-disable-next-line import/extensions
import db from '../../db/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const [people] = await db.execute({
    sql: 'SELECT * from Users',
    nestTables: true,
  });

  res.json({ people });
});

export default router;
