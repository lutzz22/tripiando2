const {request} = require('../db/config')

const allUsers = async () => {
    const data = await request('SELECT * FROM usuarios')

    return{
        users: data
    }
}

const usersById = async (id) => {
    const data = await request(`SELECT * FROM usuarios WHERE id = ('${id}')`)

    return {
        user: data[0]
    }
}

const createUser = async (username, email, pasword) => {
    const data = await request(`
    INSERT INTO usuarios(username, email, pasword, nombre, active) 
    VALUES('${username}', '${email}', '${pasword}', '${username}', 1)
    `)

    return{
        data
    }
}

const loginUser = async (email, pasword) => {
    const data = await request(
        `SELECT * FROM usuarios WHERE email = '${email}'`)
    
    if(data.length > 0 && pasword === data[0].pasword){
        
        return {usuario: data[0], existe : true} 
    } else{
        return {existe : false, msg: 'usuario no encontrado, email o contraseña incorrecta'}
    }
}

const updateUser = async(id, nombre) => {
    const data = await request(`
    UPDATE usuarios
    SET nombre = '${nombre}'
    WHERE id = ${id}`)

    return {
        nombre,
        msg: "cambio realizado con exito"
    }
}

const deleteUser = async(id) => {
    const data = await request(`
    UPDATE usuarios
    SET active = 0 
    WHERE id = ${id}`)

    return{
        msg: 'usuario dado de baja'
    }
}

module.exports = {
    allUsers,
    usersById,
    createUser,
    loginUser,
    updateUser,
    deleteUser
}