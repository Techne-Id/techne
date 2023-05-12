const knex = require('../database/db');


const tesCrud = async function () {


    const data = await knex.select('*')
      .from('materi');
    
    console.log("TAMPIL: ", data);


    
}

tesCrud()