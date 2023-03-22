const router = require('express').Router();
const dishModel = require('../models/dishModel')
const {validateApiKey} =require('../middleware/auth')

// CREATE
router.post('/', dishModel.createNewDish)

// READ
router.get('/', validateApiKey, dishModel.getAllDishes)
router.get('/random', dishModel.getRandomDishes)

// UPDATE
router.put('/:id', dishModel.updateDish)
// DELETE


router.delete('/:id', dishModel.deleteDish)

module.exports = router;