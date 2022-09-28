const express = require('express')
const router = express.Router()


const { allPostsController, postsByUserController, createPostController, deletePostController } = require('../controlador/posts')


//todos los posteos
router.get('/', allPostsController)

//a cada perfil
router.get('/:username', postsByUserController)

//crear posteo
router.post('/create', createPostController)

//borrar un posteo
router.delete('/:id', deletePostController)

module.exports = router;