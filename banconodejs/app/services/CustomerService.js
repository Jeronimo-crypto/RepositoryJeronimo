const CustomerService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountsRepository')

CustomerService.create = async (customer) => {
    //Buscamos el cliente por el id para verificar si existe
    const customerFound = await CustomerRepository.findById(customer.id)

    //Si la lista de resultados su tamanio es mayor de cero es porque ya existe un cliente con esa cedula
    if (customerFound.length > 0) {
        throw new Error('Customer already exist')
    }

    //Se crea el cliente
    await CustomerRepository.create(customer)
}

CustomerService.edit = async (id, customer) => {
    //Buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(id)

    //Si la lista de resultados su tamanio es cero es porque no existe un cliente con esa cedula
    if (customerFound.length === 0) {
        throw new Error('Customer does not exist')
    }

    //Se actualiza el cliente
    await CustomerRepository.edit(id, customer)
}

CustomerService.delete = async (idCustomer) => {
    //Se consultan las cuentas del cliente, se usa await porque debemos esperar ese resultado para poder seguir
    const customerAccounts = await AccountRepository.listAccoutsByCustomer(idCustomer)

    //Si el tamanio de la lista es mayor a cero es porque tiene cuentas y se lanza la excepcion
    if (customerAccounts.length > 0) {
        throw new Error('Customer with accounts, can not be deleted')
    }

    //Se alimina el cliente...
    await CustomerRepository.delete(idCustomer)
}

CustomerService.findCustomer = async (idCustomer) => {
    const customers = await CustomerRepository.findById(idCustomer)

    if (customers.length === 0) return undefined;

    return customers[0];
}