"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstrumentoXId = exports.getInstrumentos = void 0;
const bdmysql_1 = require("../bdmysql");
const getInstrumentos = (request, response) => new Promise((resolve, reject) => {
    bdmysql_1.bd.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        console.log('bd MySql: ', connection.threadId);
        connection.query('SELECT * FROM Empleado', (err, resultado) => {
            if (err) {
                console.error(err);
            }
            response.send(resultado);
        });
    });
});
exports.getInstrumentos = getInstrumentos;
const getInstrumentoXId = (request, response) => new Promise((resolve, reject) => {
    const idEmpleado = parseInt(request.params.id);
    bdmysql_1.bd.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            response.send(err);
            return;
        }
        console.log('bd MySql: ', connection.threadId);
        connection.query('SELECT * FROM empleado WHERE id =?', [idEmpleado], (err, resultado) => {
            if (err) {
                console.error(err);
            }
            response.send(resultado);
        });
    });
});
exports.getInstrumentoXId = getInstrumentoXId;
