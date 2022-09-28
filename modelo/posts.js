const {request} = require('../db/config')

const allPosts = async () => {
    const data = await request('SELECT * FROM posteos')

    return data
    
}

const postsByUser = async (username) => {
    const data = await request(`SELECT * FROM posteos WHERE username = ('${username}')`)

    return data
    
}

const createPost = async (category, username, tittle, post) => {
    const data = await request(`
    INSERT INTO posteos (category, username, tittle, post) VALUES('${category}', '${username}', '${tittle}', '${post}')
    `)

    const newData = await request(`SELECT * FROM posteos`)

    return{
        data,
        newData,
        msg: "post creado con exito"
    }
}

const deletePost = async(id) => {
    const data = await request(`DELETE FROM posteos WHERE id = ('${id}')`)

    return{
        msg: 'posteo eliminado'
    }
}

module.exports = {
    allPosts,
    postsByUser, 
    createPost,
    deletePost
}

