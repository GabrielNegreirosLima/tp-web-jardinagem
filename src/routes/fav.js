import express from 'express'
import db from '../../db/db.js'

const router = express.Router()

router.get('/:id', async (req, res, next) => {
    try {
        const [fav] = await db.execute({
            sql: `SELECT *
                  FROM Plants
                  LEFT OUTER JOIN FavPlants
                    ON FavPlants.plant=Plants.id
                  WHERE FavPlants.user=?`,
            values: [req.params.id],
            nestTables: true
          })    
          
          console.log(fav)

        res.format({
            html: () => res.render('fav_plants', {fav})
        })
    } catch (error) {
        console.error(error)
        error.friendlyMessage = 'Não foi possível recuperar a lista de plantas favoritas'
        next(error)
    }
})

export default router