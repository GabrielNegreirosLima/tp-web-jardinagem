import express from 'express'
import hash from 'object-hash'
import db from '../../db/db.js';

const router = express.Router();
/* GET formulario de registro de nova pessoa */
router.get('/', async (req, res) => {

  const [people] = await db.execute({
    sql: 'SELECT * from Users',
    nestTables: true
  });
  res.json({ people });

});


router.get('/new/', (req, res) => {
  res.render('login', {
  })
})

/* POST login de uma pessoa*/
router.post('/', async (req, res) => {

  const email = req.body.email;
  const password = hash.sha1(req.body.password);
  console.log(req.body);
  console.log(password);

  const [user] = await db.execute({
    sql: `SELECT * from Users where email=? and password=?`,
    values: [email, password],
    nestTables: true
  });
  res.json({ user });
  console.log('user');
  console.log(user);
});


export default router
