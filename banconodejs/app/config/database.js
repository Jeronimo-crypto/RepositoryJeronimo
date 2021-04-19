const knex = require('knex');

module.exports = knex({
    client: 'pg', //Indica que se usará postgres como motor de BD
    connection: 'postgres://postgres:postgres@localhost:5432/mibanco', //Cadena de conexión
    pool: { min: 1, max: 2},
    acquireConnectionTimeout: 5000,
});