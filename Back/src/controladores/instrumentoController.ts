import { Request, Response } from "express";
import { bd } from "../bdmysql";


export const getInstrumentos = (request: Request, response: Response) => new Promise((resolve, reject) => {
    bd.getConnection((err, connection) => {
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

export const getInstrumentoXId = (request: Request, response: Response) => new Promise((resolve, reject) => {
    const idEmpleado = parseInt(request.params.id);
    bd.getConnection((err, connection) => {
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