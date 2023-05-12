const { Pool } = require('pg');

const client = new Pool({
    user: "postgres",
    host: "localhost",
    database: "techne",
    password: "root",
    port: "5432",
})

client.connect();

class Crud {
    get(tabel, column, where='', ext='') {
        return new Promise((resolve, reject) => {
            client.query(`SELECT ${column} FROM ${tabel} ${where}`, (err, res) => {
                const { rows } = res; // ini sama aja kaya res.rows
                if (err) {
                    console.error(err);
                    reject(err);
                }
                client.end();
                resolve(rows)
            })
        })
    }

    input(tabel, column, value, where='', ext='') {
        return new Promise((resolve, reject) => {
            let debug = `INSERT INTO ${tabel} (${column}) VALUES (${value}) ${where}`
            console.log(debug)
            client.query(`INSERT INTO ${tabel} (${column}) VALUES (${value}) ${where}`, (err, res) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                // client.end();
                resolve("Berhasil")
            })
        })
    }
}

module.exports = new Crud();