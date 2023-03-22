
const router = require('express').Router()
const booksModel = require('../models/booksModels')

router.get('/', booksModel.getAllBooks)
router.get('/:id', booksModel.getBookById)
router.post('/', booksModel.saveBook)


module.exports = router;








// const router = require('express').Router();

// const booksModel = require('../controllers/');


// router.post('/', booksModel.addAllbooks)



// module.exports = router