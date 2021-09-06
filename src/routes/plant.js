import express from 'express'
import db from '../../db/db.js'

const router = express.Router()

router.get('/:id', async (req, res, next) => {
    
    const id = req.params.id
    console.log(id)

    try {
        let [plant] = await db.execute(
            `SELECT * FROM Plants
             WHERE id=?`,
             [req.params.id]
        )

        plant.map(plant => {
           
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

        const [commentaries] = await db.execute(
            `SELECT * FROM Commentaries
            LEFT OUTER JOIN Users
                    ON Users.id=Commentaries.user
             WHERE plant=?`,
             [req.params.id]
        ) 

        res.format({
            html: () => res.render('com_plants', {plant: plant[0], commentaries})
        })

    } catch (error) {
        console.error(error)
        error.friendlyMessage = 'Não foi possível recuperar a planta desejada'
        next(error)
    }
})

router.post('/commentary/:id', async (req, res, next) => {
    
    var plantId = req.params.id
    
    console.log(req.body.comentario)
    
    try {
        res.redirect(`/plant/${plantId}`);

        const[insertResult] = await db.execute(
            `INSERT INTO Commentaries (id, plant, user, text) 
             VALUES (NULL, ?, ?, ?)`,
             [plantId, 1, req.body.comentario]
        )

        if (!insertResult || insertResult.affectedRows < 1) {
            console.log('comentario não pode ser adicionado.')
          } else {
            console.log('comentario adicionado com sucesso.')
          }

    } catch (error) {
        console.error(error)
        error.friendlyMessage = 'Não foi possível adicionar um comentário à planta desejada'
        res.redirect(`/users/${plantId}`);
    }
})


export default router;