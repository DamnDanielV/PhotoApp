import mysql from 'promise-mysql';
import keys from './keys'

const pool = mysql.createPool(keys.database);

pool.getConnection().then((connection) => {
    pool.releaseConnection(connection);
    console.log("connected to database");
});

export default pool;

























// en la ultima actualizacion promise-mysql.createPool retorna una promesa
// por lo que las cosnultas deben manejarse de la siguiente forma
// const pool = mysql.createPool(keys.database);

// let con:any = null;

// pool.then((p) => {
//    return p.getConnection();
// }).then((connection) => {
//     con = connection;
//     console.log("conexion realizada");
//     return con.query('SELECT * FROM photos')
// }).then(rows => { 
//     con.release();
// });



// export default pool;