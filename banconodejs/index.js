const express = require('express'); //Importanto libreria

//Definir el path inicial de todos los endpoints
const routes = require('./app/controllers/routes')

const app = express(); //Creando servidor
app.use(express.json()) //Configurando el servidor para envio y recepcion de JSON

const PORT = 3000;

app.use('/banco', routes);

//Corriendo el servidor
app.listen(PORT, () => {
    console.log('Escuchando puerto: ', PORT);
});