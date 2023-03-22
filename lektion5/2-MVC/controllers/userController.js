const router = require('express').Router()
const userModel = require('../models/userModels')


router.get('/', userModel.getAllUsers);
router.get('/:id', userModel.createUserById );
router.post('/', userModel.createNewUser);
// router.post('/', userModel.getNewUser)



// router.post()


module.exports = router