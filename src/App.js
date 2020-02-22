import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabla  from  './Tabla';

class App extends React.Component{
  state = {
    trabajadores:  [
      {
        nombre : "Jose Perez",
        ocupacion: "Abogado"
      },
      {
        nombre : "María Rodriguez",
        ocupacion: "Ingeniera"
      },
      {
        nombre : "Antonio Galindez",
        ocupacion: "Jubilado"
      }
    ]
  }
  //constructor(){
   // super();
    //this.borrarTrabajador = this.borrarTrabajador.bind(this);
    
  //}
  borrarTrabajador = index => {
    const {trabajadores} = this.state;
    this.setState({
      trabajadores: trabajadores.filter((trabajador,i) => {
        return i !== index;
      })
    })
    console.log(this.state);
  }

  
  render(){
    return (
      <div id="clase">
        <div className="container">
        <h1>Listado de Personas</h1>
          <Tabla trabajadores={this.state.trabajadores} borrarTrabajador={this.borrarTrabajador} />
          {/* props.borrarTrabajador */}
        </div>
      </div>
    );
  }
}

export default App;
