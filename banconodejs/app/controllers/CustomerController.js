const CustomerController = module.exports

//Importando el modulo de la logica
const CustomerService = require('../services/CustomerService');

CustomerController.create = async (req, res, next) => {
    const body = req.body;

    try {
        await CustomerService.create(body);
        res.send({message: 'Customer created'})
    } catch (error) {
        console.log({error})
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

/*
Los parametros req,res y next siempre son requeridos para el correcto funcionamiento del controlador. 
Aca no va definido el path, se hace en otra parte
*/
CustomerController.delete = async (req, res, next) => {
    //Extrayendo los PathParams de la peticion
    const params = req.params;

    try {
        //Se supone que el id llega asi: /customers/:id ( -> aca no es con '{}' sino con ':' )
        //awair(ya que el metodo es async) para esperar que termine
        await CustomerService.delete(params.id)

        //Enviando respuesta al cliente (postman por ejemplo)
        res.send({message: 'customer deleted'})
    } catch (error) { //Manejando las excepciones
        console.log({error});

        //Retornando al cliente(postman por ejemplo) el error...
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

// PUT /customers/:id Body: datos a editar...
CustomerController.edit = async (req, res, next) => {
    const params = req.params;

    //Extrayendo el body de la peticion
    const body = req.body;

    try {
        await CustomerService.edit(params.id, body)

        res.send({message: 'Customer updated'})
        
    } catch (error) {
        console.log({error})
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}