import axios from 'axios';     // para manejar la comunicacion front-back
import { useState, useEffect } from 'react'  // para ver y modificar estado de acciones
//useState para ver estados y useEffect para modificar estado
import LogPage from '../home/logPage';
import NavPage from '../home/navPage';


const ListComentario = () => {
    //definimos el url ruta del del servidor backend
    const url = 'http://localhost:5000/';
    // hacemos un array para que reciba la info del los registros (bueno los documentos)
    //para llenar la tabla
    const [comentarios, setComentarios] = useState([]);   // defino la variable - podia ser [datos,setDatos]
    // comentarios es un item, setComentarios es el array???
    //const [categoria, setCategorias] = useState([]);

    //
    //Funcion para consultar los datos del comentario y llenar la tabla+'
    //
    const listarComentario = async () => {
        await axios.get(url + 'comentario') // completo la dirección como en postman
            //.then(res => console.log(res.data)) // asi para probar la conexion, muestra en la consola del navegador
            .then(res => setComentarios(res.data))  // asi para tomar los datos del JSON
            .catch(err => console.log(err))
    }
    listarComentario()   // llamo la funcion creada

    // ahora voy a hacer la página de listar comentarios
    return (
        <div>
            <LogPage />     {/*cargo barra logo*/}
            <NavPage />     {/* cargo barra menu*/}
            <div className="card m-2">      {/*// Defino margen Separación del contenido que viene*/}
                <div className='row'>       {/*// hago la primera fila con contenido titulo*/}
                    <div className='col-4'>
                        <div className="card-header text-bg-info">
                            Gestion de Comentarios
                        </div>
                    </div>
                    <div className='col-3 text-end'>
                        <div className="card-header text-bg-info">
                            Hacer boton de regresar al principal
                        </div>
                    </div>
                </div>

                <div className="card-body">{/*// defino un marco para el siguiente contenido*/}
                    <div className='row'>{/*// defino una fila para contenido*/}
                        <div className='col-4'> {/*// un campo de captura de info (nombre)*/}
                            <input type="search" className="form-control" placeholder="escribe nombre" />
                        </div>
                        <div className='col-2 text-end'> {/*Boton de buscar con icono lupa */}
                            <button type="button" className="btn btn-outline-primary" title='Buscar'>
                                <i className="fa-solid fa-magnifying-glass"></i> buscar
                            </button>
                        </div>
                        <div className='col-3 text-end'>{/* boton de agregar con icono mas*/}
                            <button type="button" className="btn btn-outline-primary" title='crear' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                {/* definimos el modal para el pop screen de toma de datos, esta mas abajo*/}
                                <i className="fa-solid fa-plus"></i> crear
                            </button>
                        </div>

                        <div> {/*aca iniciamos la construccion de la tabla*/}
                            <hr />
                            <table className="table table-hover">{/* definimos la tabla con una opcion de 'hover' para las filas*/}
                                <thead className="table-info">{/* definimos los titulos de las columnas*/}
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Cliente</th>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Comentario</th>
                                        <th scope="col" className='text-center'>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>{/* aca iniciamos las filas de contenido*/}
                                    {
                                        comentarios.map((com, index) => (  // aca voy a iterar para mostrarlos datos traidos en la linea 13*
                                            // mapiando comentarios (definido en al linea linea 13) en la variable prod
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{com.idCliente}</td>      {/*// saco el elemento nombre del 'JSON' */}
                                                <td>{com.idProducto}</td>
                                                <td>{com.fecha.substring(0,10)}</td>
                                                <td>{com.comentario}</td>
                                                <td className='text-center '> {/*// Para la columna opciones defino dos botones con icono (editar y eliminar)*/}
                                                    <button type="button" className="btn btn-outline-warning " title='Editar'>
                                                        <i className="fa-solid fa-pencil"></i>  {/*// icono de lapiz*/}
                                                    </button>
                                                    <button type="button" className="btn btn-outline-danger" title='Eliminar'>
                                                        <i className="fa-solid fa-trash-can"></i> borrar {/*// icono de basura*/}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/*//aca viene l codigo del Pop screen para el boton crear - sacado de bootstrap*/}
            <div className="modal fade mosal-lg" id="exampleModal" tabIndex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Producto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className='col-6'>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                                        <input type="text" className="form-control" id="recipient-name1" />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Categoria:</label>
                                        <input type="text" className="form-control" id="recipient-name2" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-4'>
                                        <div className="mb-1">
                                            <label htmlFor="recipient-name" className="col-form-label">Cantidad:</label>
                                            <input type="number" className="form-control" id="recipient-name3" />
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className="mb-1">
                                            <label htmlFor="recipient-name" className="col-form-label">Precio:</label>
                                            <input type="number" className="form-control" id="recipient-name4" />
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className="mb-1">
                                            <label htmlFor="recipient-name" className="col-form-label">Valor:</label>
                                            <input type="number" className="form-control" id="recipient-name5" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Imagen:</label>
                                        <input type="text" className="form-control" id="recipient-name6" />
                                    </div>
                                </div>
                                {/*
                                    <div className="mb-1">
                                        <label htmlFor="message-text" className="col-form-label">Message:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                */}

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

export default ListComentario