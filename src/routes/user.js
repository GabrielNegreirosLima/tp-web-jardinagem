import express from 'express';
// eslint-disable-next-line import/extensions
import db from '../../db/db.js';
import '../helpers/register.js';

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

    console.log(user[0].birthday.toISOString().split('T')[0], typeof user[0].birthday);
    res.format({
      html: () => {
        res.render('user_profile', {
          id: user[0].id,
          name: user[0].name,
          birthday: user[0].birthday,
          email: user[0].email,
          tel: user[0].tel,
          sex: 'outro',
          pictureUrl: user[0].pictureUrl,
        });
      },
      json: () => res.json({ user }),
    });
  } catch (error) {
    console.log(error);
    error.friendlyMessage = 'Não foi possível recuperar a lista de usuários';
    res.redirect('../../');
  }
});

export default router;
