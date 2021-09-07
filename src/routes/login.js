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

  console.log('user');


  const userId = user[0].Users.id;
  console.log(userId);
  req.session.userId = userId;
  console.log(req.session)
  res.redirect('/');
});


export default router
