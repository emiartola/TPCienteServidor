"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstrumentoXId = exports.getInstrumentos = void 0;
function getInstrumentos() {
    return __awaiter(this, void 0, void 0, function* () {
        const fetch = require('node-fetch');
        const response = yield fetch('http://localhost:3000/instrumentos');
        const data = yield response.json();
        let list = [];
        try {
            let instrumentos = JSON.parse(JSON.stringify(data));
            //console.log(instrumentos);
            instrumentos.map((emp) => {
                let { id, nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion } = emp;
                let instrumento = { id, nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion };
                list.push(instrumento);
            });
            //console.log(list);
            return list;
        }
        catch (error) {
            return console.log(error);
        }
    });
}
exports.getInstrumentos = getInstrumentos;
function getInstrumentoXId(instrumento) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetch = require('node-fetch');
        const response = yield fetch(`http://localhost:3000/instrumentos/${instrumento.id}`);
        const data = yield response.json();
        let list = [];
        try {
            let instrumentos = JSON.parse(JSON.stringify(data));
            //console.log(instrumentos);
            instrumentos.map((emp) => {
                let { id, nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion } = emp;
                let instrumento = { id, nombre, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion };
                list.push(instrumento);
            });
            //console.log(list);
            return list;
        }
        catch (error) {
            return console.log(error);
        }
    });
}
exports.getInstrumentoXId = getInstrumentoXId;
