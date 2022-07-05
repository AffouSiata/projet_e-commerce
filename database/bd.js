// let mysql = require('mysql');
// let connect = mysql.createConnection({
   
//    host:'192.168.64.2',
//    user: 'Affou',
//    password:'12345',
//    database:'projet_e-commerce'

// });

// module.exports=connect;


const { Client } = require('pg');

const connect = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
module.exports=connect