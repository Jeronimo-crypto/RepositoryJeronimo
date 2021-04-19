const AccountRepository = module.exports;
const DB = require('../config/database')

AccountRepository.create = (account) => {
    return DB('accounts').insert(account)
}

AccountRepository.listAccoutsByCustomer = (customerId) => {
    return DB('accounts').where({customerid : customerId}).select('*')
}

AccountRepository.findById = (accountId) => {
    return DB('accounts').where({id : accountId}).select('*')
}

AccountRepository.edit = (accountId, account) => {
    return DB('accounts').where( { id:accountId } ).update(account)
}

AccountRepository.delete = (idCuenta) => {
    return DB('accounts').where( { id:idCuenta} ).del()
}