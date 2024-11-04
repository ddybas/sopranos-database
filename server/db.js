const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Snerkie4587!",
    host: "localhost",
    port: 5432,
    database: "sopranos"
})

module.exports = pool;