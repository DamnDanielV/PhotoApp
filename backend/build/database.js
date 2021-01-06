"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection().then((connection) => {
    pool.releaseConnection(connection);
    console.log("connected to database");
});
exports.default = pool;
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
