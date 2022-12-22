import axios from 'axios';
import { useState, useEffect } from 'react';
import LogPage from '../home/logPage';
import NavPage from '../home/navPage';

const ListCliente = () => {
    //url ruta del backend
    const url = 'http://localhost:5000/';
    //Array para almacenar la informacion de los registros para mostrar en la tabla
    const [clientes, setClientes] = useState([]);

    /**
     * Funcion para listar los datos del cliente
     */
    const listarCliente = async () => {
        await axios.get(url + 'cliente')
            .then(res => setClientes(res.data))
            .catch(err => console.log(err))
    }

    listarCliente()




    return (
        <div>
            <LogPage />
            <NavPage />
            <div className="card m-2">
                <div className="card-header text-bg-info">
                    Gestión de clientes
                </div>
                <div className="card-body">

                    <div className='row'>
                        <div className='col-5'>
                            <input type="search" className="form-control" placeholder='Digite un nombre' />
                        </div>
                        <div className='col-1'>
                            <button type="button" className="btn btn-outline-primary" title='Buscar'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button></div>
                        <div className='col-6 text-end'>
                            <button type="button" className="btn btn-outline-primary" title='Nuevo' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="fa-solid fa-address-book"></i>
                            </button>
                        </div>
                    </div>
                    <hr />

                    <table className="table table-hover table-bordered">
                        <thead className="table-info">
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Identificación</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.map((cliente, index) => (
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{cliente.identificacion}</td>
                                        <td>{cliente.nombre}</td>
                                        <td>{cliente.correo}</td>
                                        <td>{cliente.celular}</td>
                                        <td className='text-center'>
                                            <button type="button" className="btn btn-outline-warning buttonOpc" title='Editar'>
                                                <i className="fa-solid fa-pen"></i>
                                            </button>

                                            <button type="button" className="btn btn-outline-danger buttonOpc" title='Eliminar'>
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )

                                )
                            }


                        </tbody>
                    </table>

                </div>
            </div>


            <div className="modal fade modal-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Cliente</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className='row'>
                                    <div className="col mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Identificación:</label>
                                        <input type="number" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="col mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                </div>


                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Correo:</label>
                                    <input type="email" className="form-control" id="recipient-name" />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Celular:</label>
                                    <input type="number" className="form-control" id="recipient-name" />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Fecha nacimiento:</label>
                                    <input type="date" className="form-control" id="recipient-name" />
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="recipient-name" className="col-form-label">Genero:</label>
                                    <select className='form-select'>
                                        <option>Femenino</option>
                                        <option>Masculino</option>
                                    </select>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ListCliente