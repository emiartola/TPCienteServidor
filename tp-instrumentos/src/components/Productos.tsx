import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getInstrumentosJSON } from './FuncionesApi';
import { Navigation } from './Navigation';
import Instrumento from './Instrumento';
import { ItemInstrumento } from './ItemInstrumento';

export const Productos = () => {
  
   const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    
    const getInstrumentosResto = () => {
      let datos:Instrumento[] = getInstrumentosJSON();
      setInstrumentos(datos);
    }

    useEffect(() => {
      getInstrumentosResto();
    }, []);

    
    return (
        <>
        <Navigation></Navigation>
          <Container fluid="md">
              <Row>  
               {instrumentos.map((instrumento:Instrumento) => 
                <ItemInstrumento key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} marca={instrumento.marca} modelo={instrumento.modelo} imagen={instrumento.imagen} precio={instrumento.precio} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida} descripcion={instrumento.descripcion} ></ItemInstrumento>
               )}
              </Row>
          </Container>
        </>
    )
 
}