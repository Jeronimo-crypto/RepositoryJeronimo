//Importando el repositorio
const ClientRepository = require('./app/repositories/CustomerRepository')

const AccountRepository = require('./app/repositories/AccountsRepository')

const CustomerService = require('./app/services/CustomerService')

const AccountService = require('./app/services/AccountService')

console.log('probando...')

/*
//Probando el crear Cliente a nivel de repositorio, llamando el metodo crear del repositorio directamente
ClientRepository.create({
    name:'juan',
    lastname: 'ferrer',
    id:'4321',
    email: 'juan@juan.com'
}).then(console.log) //Para que el programa espere a que la operacion termine...
*/

/*
//Probando el buscar Cliente a nivel de repositorio, llamando el metodo buscar del repositorio directamente
async function probandoElBuscar() {
    const cliente = await ClientRepository.findById('4321')
    console.log(cliente)
}

probandoElBuscar()
.then(console.log('OK'))
*/

/*
// async, siempre que haya un await dentro de una funcion, la factura debe de llevar async
//Probando el editar Cliente a nivel de repositorio, llamando el metodo editar del repositorio directamente
async function probandoElEditar() {
    //await es para que nodejs espere que termine la ejecucion antes de pasara a la siguiente instruccion
    await ClientRepository.edit('4321',{
        name:'jose',
        lastname: 'perez',
    })
}
probandoElEditar()
.then(console.log('OK'))//Para que el programa espere a que la operacion termine...
*/

/*
//Probando el eliminar Cliente a nivel de repositorio, llamando el metodo eliminar del repositorio directamente
async function probandoEliminar() {
    await ClientRepository.delete('4321')
}
probandoEliminar()
.then(console.log('OK'))
*/

/*
//Probando el crear Cuenta a nivel de repositorio, llamando el metodo crear del repositorio directamente
AccountRepository.create({
    id:'4444',
    amount:0,
    customerid:'4321',
    openedat:'2021-03-24T05:00:00.000Z'
}).then(console.log) //Para que el programa espere a que la operacion termine...
*/

/*
//Probando el listarCuentas a nivel de repositorio, llamando el metodo crear del repositorio directamente
async function probandolistarCuentas() {
    const list = await AccountRepository.listAccoutsByCustomer('4321')
    console.log(list)
}

probandolistarCuentas()
.then(console.log('OK'))
*/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// * * * * * * PRUEBAS DE LOS SERVICES * * * * * * //

/*
//Probando el crear Cliente a nivel de service con todas las validaciones requeridas
async function probarCrearCliente() {
    await CustomerService.create({
        id: '1111',
        lastname: 'Nicaragua',
        name: 'Oscar',
        email: 'Osc@gmail.com'
    })
}

probarCrearCliente().then(console.log('OK'))
*/

/*
//Probando el crear Cliente a nivel de service con id de Cliente ya existente
async function probarCrearCliente() {
    await CustomerService.create({
        id: '2345',
        lastname: 'baca',
        name: 'fabian',
        email: 'Fabian@gmail.com'
    })
}

probarCrearCliente().then(console.log('OK'))
*/

/*
//Probando el editar Cliente a nivel de service con todas las validaciones requeridas
async function probarEditar() {
    await CustomerService.edit('2345', {
        lastname: 'quitian',
        name: 'obdulio'
    })
}

probarEditar().then(console.log('OK'))
*/

/*
//Probando el editar Cliente a nivel de service con id de cliente que no existe
async function probarEditar() {
    await CustomerService.edit('5646512', {
        lastname: 'quitian',
        name: 'obdulio'
    })
}

probarEditar().then(console.log('OK'))
*/

/*
//Probando el eliminar Cliente a nivel de service con todas las validaciones requeridas
async function probarEliminar() {
    await CustomerService.delete('2345')
}

probarEliminar().then(console.log('OK'))
*/

/*
//Probando el eliminar Cliente a nivel de service teniendo el cliente cuentas relacionadas
async function probarEliminar() {
    await CustomerService.delete('2345')
}

probarEliminar().then(console.log('OK'))
*/

/*
//Probando el buscar Cliente a nivel de service con todas la validaciones requeridas
async function probarBuscar() {
    const customer = await CustomerService.findCustomer('4321')
    console.log(customer)
}

probarBuscar().then(console.log('OK'))
*/

/*
//Probando el buscar Cuentas de un Cliente
async function probar() {
    const result = await AccountService.listAccountsByCustomer('4321')
    console.log(result)
}

probar().then(console.log('OK'))
*/

/*
//Probando el buscar Cuentas de un Cliente que no existe
async function probar() {
    const result = await AccountService.listAccountsByCustomer('88548')
    console.log(result)
}

probar().then(console.log('OK'))
*/

/*
//Creando cuenta para cliente
async function probar() {
    const result = await AccountService.create({
        id: '4364',
        customerid: '2345',
    })
    console.log(result)
}

probar().then(console.log('OK'))
*/

/*
//Crenado cuenta para cliente que no existe
async function probar() {
    const result = await AccountService.create({
        id: '4364',
        customerid: '846545',
    })
    console.log(result)
}

probar().then(console.log('OK'))
*/

/*
//Creando cuenta para cliente que ya tiene 3 o mas cuentas.
async function probar() {
    const result = await AccountService.create({
        id: '4364',
        customerid: '4321',
    })
    console.log(result)
}

probar().then(console.log('OK'))
*/

// TEST PARA Controladores o capa de exposición

async function eliminarAccount() {
    await AccountService.delete('1165846')
}

eliminarAccount().then(console.log('OK'))


