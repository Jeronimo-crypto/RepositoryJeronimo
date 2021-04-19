const AccountController = module.exports

//Importando el modulo de la logica...
const AccountService = require('../services/AccountService');

AccountController.listAccoutsByCustomer = async (req, res, next) => {
    const params = req.params;

    try {
        const response = await AccountService.listAccountsByCustomer(params.id)

        //Enciando respuesta al cliente que retorna la logica
        res.send(response)
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next();
    }
}

AccountController.createAccount = async (req, res, next) => {
    const body = req.body;

    try {
        await AccountService.create(body)
        res.send({message: 'Account created'})
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.deleteAccount = async (req, res, next) => {
    const params = req.params;

    try {
        const response = await AccountService.delete(params.id)
        res.send({message: 'Account canceled'})
    } catch (error) {
        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.withdrawBalance = async (req, res, next) => {
    const params = req.params;

    const body = req.body;

    try {
        const response = await AccountService.withdrawBalance(params.id, body);
        res.send({message: 'Balance withdrawn'})
    } catch (error) {
        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.consignBalance = async (req, res, next) => {
    const params = req.params;

    const body = req.body;

    try {
        const response = await AccountService.consignBalance(params.id, body);
        res.send({message: 'Consigned balance'})
    } catch (error) {
        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);
    }

}

AccountController.transferFromOneAccountToAnother = async (req, res, next) => {
    const params = req.params;

    const body = req.body;

    try {
        const response = await AccountService.transferFromOneAccountToAnother(params.id, params.idTwo, body);
        res.send({message: 'Consigned balance'})
    } catch (error) {
        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);
    }
}