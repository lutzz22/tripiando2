const express = require('express')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 5000

const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')

app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/posts', postRouter)

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`)
})