import express from 'express'
import hash from 'object-hash'
import db from '../../db/db.js';

const router = express.Router();

router.get('/new/', (req, res) => {
  res.render('register', {
  })
})

/* POST registra uma nova pessoa */
router.post('/', async (req, res) => {

  const name_raw = req.body.name;
  const name = name_raw.toUpperCase()
  const email_raw = req.body.email;
  const email = email_raw.toUpperCase()
  const sex = req.body.gender;
  const password = hash.sha1(req.body.password);
  const birthday = req.body.date;
  const tel = req.body.phone;
  const isAdmin = 0;
  const pictureUrl = 'teste/teste';



  if (!name || name.length < 1) {
    //req.flash('error', 'Por favor, entre com o nome da pessoa!')
    // res.redirect('/people/');
    console.log('error. Por favor, entre com o nome')
    return;
  }
  const transaction = await db.getConnection();
  try {
    await transaction.beginTransaction();
    //codigo aqui

    const [insertResult] = await transaction.execute(
      `INSERT INTO Users (id, name, email,sex,password,birthday,tel,isAdmin,pictureUrl)
       VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, sex, password, birthday, tel, isAdmin, pictureUrl]
    )
    await transaction.commit();
    //req.flash('success', 'Pessoa Inserida')
    console.log('success', 'Pessoa Inserida')
  } catch (error) {
    try {
      if (transaction) {
        await transaction.rollback()
      }
    } catch (transactionError) {
      // just ignore
    }
    console.error(error)
    error.friendlyMessage = 'Erro. Não foi possível inserir a pessoa';
  } finally {
    transaction.release();
    res.redirect('/register/new/');
  }
})


export default router
