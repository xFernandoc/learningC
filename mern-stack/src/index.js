const express = require('express')
const morgan = require('morgan')
const rutas  = require('./routes/task')
const path = require('path')
const app = express()
const { mongoose } = require('./database')

// Configuracion
//establecemos el puerto, por defecto y ya establecidos

app.set('port',process.env.PORT || 4000)

// Middlewares
//Muestra los mensajes que le envian al usuario
//Metodo Ruta Cod_Error Tiempo respuesta Peso de la consulta
//Ex : GET / 404 2.4ms 139
app.use(morgan('dev'))
//Metodo para que haya la conexion de react con node mediante json en forma general
app.use(express.json())

//Routes
app.use('/api/tasks',rutas)
//Static File(html)
//path une ficheros en una direccion
app.use(express.static(path.join(__dirname,'public')))
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Conectado por el puerto ${app.get('port')}`)
})