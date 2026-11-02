const express = require('express')
const colors = require('colors')
require('dotenv').config()
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorMiddleware')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tareas', require ('./routes/tareasRoutes'))
app.use('/api/users', require ('./routes/usersRoutes'))
app.use(errorHandler)

const startServer = async () => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is required. Add it to your .env file.')
    }

    await connectDB()

    app.listen(port, ()=> {
        console.log(`Servidor Iniciado en el puerto ${port}`)
    })
}

startServer().catch((error) => {
    console.error(`No se pudo iniciar el servidor: ${error.message}`)
    process.exit(1)
})