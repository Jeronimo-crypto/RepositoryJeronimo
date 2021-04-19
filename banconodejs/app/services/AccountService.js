const AccountsService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountsRepository')

AccountsService.create = async (account) => {
    //Buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(account.customerid)

    //Si la lista de resultados su tamanio es cero es por que no existe un cliente con esa cédula
    if(customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    const accountFound = await AccountRepository.findById(account.id)

    if(accountFound.length > 0) {
        throw new Error('Account already exist')
    }

    //Consultando las cuentas del cliente
    const accountByCustomer = await AccountRepository.listAccoutsByCustomer(account.customerid)

    //verificando que solo tenga hastra tres
    if (accountByCustomer.length >= 3) {
        throw new Error('no more than 3 accounts...')
    }

    account.openedat = new Date();//Colocando la fecha de apertura
    account.amount = 0; //Colocando el saldo inicial
    await AccountRepository.create(account)
}

AccountsService.listAccountsByCustomer = async (customerId) => {
    //Buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(customerId)

    //Si la lista de resultados su tamanio es cero, es porque no existe un cliente con dicha cédula
    if(customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    //Cuando se retorna directamente el resultado de una funcion que haya que esperar el resultado, no es necesario usar wait
    return AccountRepository.listAccoutsByCustomer(customerId)
}

AccountsService.delete = async (accountId) => {
    const accountFound = await AccountRepository.findById(accountId);

    if (accountFound.length === 0) {
        throw new Error('Account does not exist');
    }
    
    const accountAmount = accountFound[0].amount;

    if(accountAmount > 0) {
        throw new Error('The account has a balance greater than zero');
    }

    await AccountRepository.delete(accountId)
}

AccountsService.withdrawBalance = async (accountId, account) => {
    const accountFound = await AccountRepository.findById(accountId);

    if(accountFound.length === 0) {
        throw new Error('Account does not exist');
    }

    const accountAmount = accountFound[0].amount;

    if(accountAmount < account.amount) {
        throw new Error('Insufficient balance');
    }

    account.amount = accountAmount - account.amount;

    await AccountRepository.edit(accountId, account)
}

AccountsService.consignBalance = async (accountId, account) => {
    const accountFound = await AccountRepository.findById(accountId);

    if(accountFound.length === 0) {
        throw new Error('Account does not exist');
    }

    account.amount = accountFound[0].amount + account.amount;

    await AccountRepository.edit(accountId, account)
}

AccountsService.transferFromOneAccountToAnother = async (accountIdOne, accountIdTwo, account) => {
    const accountFoundOne = await AccountRepository.findById(accountIdOne);

    if(accountFoundOne.length === 0) {
        throw new Error('Issuing account does not exist');
    }

    const accountFoundTwo = await AccountRepository.findById(accountIdTwo);

    if(accountFoundTwo.length === 0) {
        throw new Error('Receiving account does not exist');
    }
   
    accountAmountOne = accountFoundOne[0].amount;

    if(accountAmountOne < account.amount) {
        throw new Error('Insufficient balance');
    }

    accountFoundOne[0].amount = await accountAmountOne - account.amount;

    account.amount = await accountFoundTwo[0].amount + account.amount;

    await AccountRepository.edit(accountIdTwo, account)
    await AccountRepository.edit(accountIdOne, accountFoundOne[0])
}
