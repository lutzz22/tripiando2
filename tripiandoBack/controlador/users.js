const {allUsers, usersById, updateUser, deleteUser, createUser, loginUser} = require('../modelo/users')

module.exports.allUsersController = async (req, res) => {
    try{
        const users = await allUsers()
         return res.send(users)
    } catch(error){
         console.log(error)
         return res.send('se produjo un error')
    }
}

module.exports.usersByIdController = async (req, res) => {
    const {id} = req.params
    try{
        const user = await usersById(id)
        return res.status(200).send (user)
    } catch(error){
        console.log(error)
        return res.status(400).send('se produjo un error')
    }
}

module.exports.createUserController = async (req,res) => {
    const {username, email, pasword} = req.body

    try{
        const user = await createUser(username, email, pasword)
        console.log(user)
        return res.status(200).send('usuario creado con exito')
        
    } catch(error){
        console.log(error)
        return res.status(400).send('se produjo un error al crear el usuario')
    }
}

module.exports.loginUserController = async (req, res) => {
    const {email, pasword} = req.body

    try{
        const user = await loginUser(email, pasword)
        if(user.existe){
            return res.status(200).send(user)
        } else{
            return res.status(204).send(user)
        }
    } catch(error){
        return res.status(500).send(error)
    }
}

module.exports.updateUserController = async (req, res) => {
    const {id} = req.params
    const {nombre} = req.body

    try{
        const user = await updateUser(id, nombre)
        
        return res.status(200).send(user)
    }catch(error){
        console.log(error)
        return res.status(400).send('Se produjo un error al editar el usuario')
    }
}

module.exports.deleteUserController = async (req, res) => {
    const {id} = req.params

    try{
        const user = await deleteUser(id)
        return res.status(200).send(user)
    }catch(error){
        console.log(error)
        return res.status(400).send('Se produjo un error al editar el usuario')
    }
}
