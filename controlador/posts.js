const { allPosts, postsByUser, createPost, deletePost } = require("../modelo/posts")

module.exports.allPostsController = async(req, res) => {
    try{
        const posteos = await allPosts()
        return res.send(posteos)
    } catch(error){
        console.log(error)
        return res.send('se produjo un error al cargar los posteos')
    }
}

module.exports.postsByUserController = async(req, res) => {
    const {username} = req.body

    try{
        const posteos = await postsByUser(username)
        return res.status(200).send(posteos)
    } catch(error){
        console.log(error)
        return res.status(400).send('se prdodujo un error al cargar los posteos del usuario')
    }
}

module.exports.createPostController = async(req, res) => {
    const {category, username, tittle, post} = req.body

    try{
        const posteo = await createPost(category, username, tittle, post)
        console.log(posteo)
        return res.status(200).send('su posteo se creo con exito')
    } catch(error) {
        console.log(error)
        return res.status(400).send('se produjo un error al crear tu posteo')
    }
}

module.exports.deletePostController = async (req,res) => {
    const {id} = req.params

    try{
        const post = await deletePost(id)
        console.log(post)
        return res.status(200).send('post eliminado con exito')
    }catch(error){
        console.log(error)
        return res.status(400).send('se produjo un error al eliminar su post')
    }
}