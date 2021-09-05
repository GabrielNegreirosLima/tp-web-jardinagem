import express from 'express'
import db from '../../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const [plants] = await db.execute('SELECT * FROM Plants') 

        res.format({
            html: () => res.render('index', {plants})
        })
    } catch (error) {
        console.error(error)
        error.friendlyMessage = 'Não foi possível recuperar a lista de plantas'
        next(error)
    }
})

export default router