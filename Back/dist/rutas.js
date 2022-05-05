"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const querys_1 = require("./querys");
const ruta = (0, express_1.Router)();
//ruta.get('/test', (requ, resp) => resp.send('HOLA MUNDO'));
ruta.get('/instrumentos', querys_1.getInstrumentos);
ruta.get('/instrumentos/:id', querys_1.getInstrumentoXId);
// ruta.post('/insertar', crearInstrumento);
// ruta.put('/actualizar/:id', updateInstrumento);
// ruta.delete('/eliminar/:id', eliminarInstrumento);
exports.default = ruta;