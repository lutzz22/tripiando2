const express = require('express')
const router = express.Router()

//controladores
const {allUsersController, updateUserController, usersByIdController, deleteUserController, createUserController, loginUserController} = require('../controlador/users')

//todos los usuarios
router.get('/', allUsersController)

//a cada perfil
router.get('/:id', usersByIdController)

router.post('/login', loginUserController)

//crear perfil
router.post('/create', createUserController)

//edicion del perfil
router.put('/update/:id', updateUserController)

//dar de baja
router.put('/baja/:id', deleteUserController)


module.exports = router