import express from 'express';
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

    res.format({
      html: () => {
        res.render('user_profile', {
          id: user[0].id,
          name: user[0].name,
          birthday: user[0].birthday.toISOString().split('T')[0],
          email: user[0].email,
          tel: user[0].tel,
          sex: user[0].sex,
          pictureUrl: user[0].pictureUrl,
        });
      },
      json: () => res.json({
        id: user[0].id,
        name: user[0].name,
        birthday: user[0].birthday.toISOString().split('T')[0],
        email: user[0].email,
        tel: user[0].tel,
        sex: user[0].sex,
        pictureUrl: user[0].pictureUrl,
      }),
    });
  } catch (error) {
    error.friendlyMessage = 'Não foi possível recuperar o usuário/perfil.';
    console.log(error);
    res.redirect('../../');
  }
});

router.post('/profile/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { birthday } = req.body;
  const { sex } = req.body;
  const { tel } = req.body;

  try {
    await db.execute(
      `UPDATE Users
      SET name=?, birthday=?, sex=?, tel=?
      WHERE id=?`,
      [name, birthday, sex, tel, id],
    );

    res.redirect(`/users/profile/${id}`);
  } catch (error) {
    error.friendlyMessage = 'Não foi possível atualizar o usuário.';
    console.log(error);
    res.redirect('../../');
  }
});

export default router;
