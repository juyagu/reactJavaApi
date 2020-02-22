import React from 'react';
import './App.css';

function HeaderTabla() {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Trabajo</th>
                <th></th>
            </tr>
        </thead>
    )
}

const BodyTabla = props => {
    const filas = props.trabajadores.map((fila,index) => {
        return(
            <tr key={index}>
                <td>{index}</td>
                <td>{fila.nombre}</td>
                <td>{fila.ocupacion}</td>
                <td><button className="btn btn-danger" onClick={() => props.borrarTrabajador(index)}>
                    Eliminar</button></td>
            </tr>
        )
    });
return <tbody>{filas}</tbody>
} 
/*
function saludar(){
    ...
}

document.querySelector("#boton").addEventListener('click',saludar)


saludar
saludar()

function saludar(event){ ... }

function saludar(nombre){
    ...
}

() => {

}

const funct = nombre => {
...
}



*/

/*function BodyTabla() {
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>Jose Perez</td>
                <td>Abogado</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Maria Rodriguez</td>
                <td>Ingeniera</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Pedro Ramirez</td>
                <td>Taxista</td>
            </tr>
        </tbody>
    )
}*/




class Tabla extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props;
    }
    
    render() {
        //const {trabajadores} = this.props;
        const {trabajadores,borrarTrabajador} = this.props;
        /*
        this.state.trabajadores
        const {trabajadores} = this.state => const t = this.state.trabajadores
        */ 
        return (
            <table className="table table-hover table-bordered">
                <HeaderTabla />
                <BodyTabla trabajadores={trabajadores} borrarTrabajador={borrarTrabajador} />
            </table>
        )
    }
}

export default Tabla;