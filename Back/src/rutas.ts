import { Router } from "express";
import { getInstrumentos, getInstrumentoXId } from "./querys";

const ruta = Router();

//ruta.get('/test', (requ, resp) => resp.send('HOLA MUNDO'));


ruta.get('/instrumentos', getInstrumentos);
ruta.get('/instrumentos/:id', getInstrumentoXId);
// ruta.post('/insertar', crearInstrumento);
// ruta.put('/actualizar/:id', updateInstrumento);
// ruta.delete('/eliminar/:id', eliminarInstrumento);

export default ruta;

