// Codigo de servidor para debuggear.
// Los modos de historia.
const express = require('express')

const app = express()

app.use(express.static('dist'))

app.listen(8080, () => {
    console.log('localhost:8080 en linea')
})