const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

//configuracion

app.set('port', process.env.PORT || 3000)

//middlewares

app.use(morgan('dev'))
app.use(express.json())

//rutas


//archivos estaticos
console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))

//Inicio

app.listen(app.get('port'), () => {
    console.log(`Servidor en : ${app.get('port')}`)
})