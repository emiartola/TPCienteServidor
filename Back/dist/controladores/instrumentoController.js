"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstrumentoXId = exports.getInstrumentos = void 0;
const dbmysql_1 = require("../dbmysql");
const getInstrumentos = (request, response) => new Promise((resolve, reject) => {
    dbmysql_1.bd.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        console.log("bd MySql: ", connection.threadId);
        connection.query("SELECT * FROM instrumento", (err, resultado) => {
            if (err) {
                console.error(err);
            }
            console.log(resultado);
            response.send(resultado);
        });
    });
});
exports.getInstrumentos = getInstrumentos;
const getInstrumentoXId = (request, response) => new Promise((resolve, reject) => {
    const id = parseInt(request.params.id);
    dbmysql_1.bd.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        console.log("bd MySql: ", connection.threadId);
        connection.query("SELECT * FROM instrumento WHERE id=?", [id], (err, resultado) => {
            if (err) {
                console.error(err);
            }
            console.log(resultado);
            response.send(resultado);
        });
    });
});
exports.getInstrumentoXId = getInstrumentoXId;
