import Instrumento from "./Instrumento";

export async function getInstrumentosJSON() {
	let urlServer = "http://localhost:3000/instrumentos/";
	let datos = await fetch(urlServer, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: 'cors'
	});
	console.log(datos);
	return await datos.json();
}


export async function getInstrumentoXId(id: number) {
	let urlServer = 'http://localhost:3000/instrumentos/' + id;
	let datos = await fetch(urlServer, {
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		},
		mode: 'cors'
	});
	console.log(datos);
	return await datos.json();
}