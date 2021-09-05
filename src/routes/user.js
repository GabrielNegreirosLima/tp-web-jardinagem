import express from 'express';
// eslint-disable-next-line import/extensions
import db from '../../db/db.js';

const router = express.Router();

router.get('/profile/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const [user] = await db.execute({
      sql: `SELECT *
      FROM Users
      WHERE id= ?`,
      values: [id],
    });

    res.render('user_profile', {
      user,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(501);
  }
});

export default router;
