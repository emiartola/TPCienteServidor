"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instrumentoController_1 = require("./controladores/instrumentoController");
const ruta = (0, express_1.Router)();
//ruta.get('/test', (requ, resp) => resp.send('HOLA MUNDO'));
ruta.get('/instrumentos', instrumentoController_1.getAllInstrumentos);
ruta.get('/instrumentos/:id', instrumentoController_1.getInstrumentoById);
// ruta.post('/insertar', crearInstrumento);
// ruta.put('/actualizar/:id', updateInstrumento);
// ruta.delete('/eliminar/:id', eliminarInstrumento);
exports.default = ruta;
