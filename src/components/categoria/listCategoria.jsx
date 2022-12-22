import axios from 'axios';     // para manejar la comunicacion front-back
import { useState, useEffect } from 'react'  // para ver y modificar estado de acciones
//useState para ver estados y useEffect para modificar estado
import LogPage from '../home/logPage'
import NavPage from '../home/navPage'


const ListCategoria = () => {
    //definimos el url ruta del del servidor backend
    const url = 'http://localhost:5000/';
    // hacemos un array para que reciba la info del los registros (bueno los documentos)
    //para llenar la tabla
    const [categorias, setCategorias] = useState([]);   // defino la variable - podia ser [datos,setDatos]
    // categorias es un item, setCategorias es el array???
    //const [categoria, setCategorias] = useState([]);

    //
    //Funcion para consultar los datos del producto y llenar la tabla+'
    //
    const listarCategoria = async () => {
        await axios.get(url + 'categoria') // completo la dirección como en postman
            //.then(res => console.log(res.data)) // asi para probar la conexion, muestra en la consola del navegador
            .then(res => setCategorias(res.data))  // asi para tomar los datos del JSON
            .catch(err => console.log(err))
    }

    useEffect(() => {
        listarCategoria()   // llamo la funcion creada
    }, [])


    /* asigno las variables a los campos del formulario */
    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')



    const [imagen, setImagen] = useState('')

    /* funcion para guardar los campos del formulario de adicion */
    const guardar = (event) => {
        event.preventDefault()
        axios.post(url+"categoria", {
            nombre, tipo, imagen
        })
            .then(res => {   //Borramos los campos y cerramos la ventana)
                setNombre('')
                setTipo('')



                setImagen('')
                const btnClose = document.getElementById('btnClose')
                btnClose.click()
                console.log("categoria debio ser crerada")
                listarCategoria()
            })
            .catch(err => console.log(err))
    }

    /**
     * vamos ahacer el metodo para eliminar (borrar) los registros
     */
    const eliminar = async (id) => {
        await axios.delete(url + "categoria/" + id)
            .then(res => listarCategoria())
            .catch(err => console.log(err))
    }

    // ahora voy a hacer la página de listar productos
    return (
        <div>
            <LogPage />
            <NavPage />
            <div className="card m-2">
                <div className='row'>
                    <div className='col-4'>
                        <div className="card-header text-bg-info">
                            Gestion de Categorias
                        </div>
                    </div>
                    <div className='col-3 text-end'>
                        <div className="card-header text-bg-info">
                            Hacer boton de regresar a principal
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className='row'>
                        <div className='col-4'>
                            <input type="search" className="form-control" placeholder="escribe nombre" />
                        </div>
                        <div className='col-2 text-end'>
                            <button type="button" className="btn btn-outline-primary" title='Buscar'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                        <div className='col-6 text-begin'>
                            <button type="button" className="btn btn-outline-primary" title=' Crear' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                {/* definimos el modal para el pop screen de toma de datos, esta mas abajo
                                trajimos codigo del bootstrap para que cuando presionemos el boton guardar mande la informacion
                                de los campos*/}
                                <i className="fa-solid fa-plus"></i> crear
                            </button>
                        </div>

                        <div> {/*aca iniciamos la construccion de la tabla*/}
                            <hr />
                            <table className="table table-hover">
                                <thead className="table-info">
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Tipo</th>
                                        <th scope="col">Imagen</th>

                                        <th scope="col" className='text-center '>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>{/* aca iniciamos las filas de contenido*/}
                                    {
                                        categorias.map((cat, index) => (  // aca voy a iterar para mostrarlos datos traidos en la linea 13*
                                            // mapiando productos (definido en al linea linea 13) en la variable prod
                                            <tr key={cat._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{cat.nombre}</td>
                                                <td>{cat.tipo}</td>

                                                <td>{cat.imagen}</td>
                                                <td className='text-center '>
                                                    <button type="button" className="btn btn-outline-warning " title='Editar'>
                                                        <i className="fa-solid fa-pencil"></i>
                                                    </button>
                                                    <button type="button" onClick={() => { eliminar(cat._id) }} className="btn btn-outline-danger" title='Eliminar'>
                                                        <i className="fa-solid fa-trash-can"></i>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Categoria</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={guardar}>
                                <div className='col-6'>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                                        <input type="text" onChange={(e) => setNombre(e.target.value)} className="form-control" required />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Tipo:</label>
                                        <input type="text" onChange={(e) => setTipo(e.target.value)} className="form-control" required />
                                    </div>
                                </div>





















                                <div className='col-6'>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Imagen:</label>
                                        <input type="text" onChange={(e) => setImagen(e.target.value)} className="form-control" id="recipient-name6" />
                                    </div>
                                </div>

                                {/*
                                    <div className="mb-1">
                                        <label htmlFor="message-text" className="col-form-label">Message:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                */}

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"id='btnClose'>Cerrar</button>
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListCategoria