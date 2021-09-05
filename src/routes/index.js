import express from 'express'
import db from '../../db/db.js'

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        let [plants] = await db.execute('SELECT * FROM Plants') 

        plants.map(plant => {
           
            plant.star = []            
            
            for (let index = 0; index < 5; index++) {
                if(index < plant.facility){
                    plant.star.push('<button class="fa fa-star checked" disabled></button>')
                }
                else{
                    plant.star.push('<button class="fa fa-star" disabled></button>')
                }                  
            }           
        })       

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