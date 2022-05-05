import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Productos } from './components/Productos';
import { DetalleInstrumento } from './components/DetalleInstrumento';
import { DondeEstamos } from './components/DondeEstamos';
import { Home } from './components/Home';


class App extends Component{
  
  render(){
    return (
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Productos" element={<Productos/>}/>
            <Route path="/detalle">
              <Route path=":idInstrumento" element={<DetalleInstrumento />} />
            </Route>
            <Route path="*" element={<Productos/>}/>
            <Route path="/DondeEstamos" element={<DondeEstamos/>}/>
          </Routes>
    );
  }
}

export default App;
