import axios from 'axios';     // para manejar la comunicacion front-back
import { useState, useEffect } from 'react'  // para ver y modificar estado de acciones
//useState para ver estados y useEffect para modificar estado
import LogPage from '../home/logPage';
import NavPage from '../home/navPage';


const ListProducto = () => {
    //definimos el url ruta del del servidor backend
    const url = 'https://mitienda-backend-7u6f.onrender.com/'; // cuando despliega servido cambia esta ruta
    // hacemos un array para que reciba la info del los registros (bueno los documentos)
    //para llenar la tabla
    const [productos, setProductos] = useState([]);   // defino la variable - podia ser [datos,setDatos]
    // productos es un item, setProductos es el array???
    //const [categoria, setCategorias] = useState([]);

    //
    //Funcion para consultar los datos del producto y llenar la tabla+'
    //
    const listarProducto = async () => {
        await axios.get(url + 'producto') // completo la dirección como en postman
            //.then(res => console.log(res.data)) // asi para probar la conexion, muestra en la consola del navegador
            .then(res => setProductos(res.data))  // asi para tomar los datos del JSON
            .catch(err => console.log(err))
    }

    useEffect(() => {
        listarProducto()   // llamo la funcion creada con UseEffect para que solo se ejecute una vez
    }, [])


    /* asigno las variables a los campos del formulario */
    const [_id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
    const [costo, setCosto] = useState('')
    const [idCategoria, setIdCategoria] = useState('')
    const [imagen, setImagen] = useState('')

    /* funcion para guardar los campos del formulario de adicion */
    const guardar = (event) => {
        event.preventDefault();
        if (_id.length == 0) {
            axios.post(url + "producto", {
                nombre, cantidad, precio, costo, idCategoria, imagen
            })
                .then(res => limpiar())   //Borramos los campos y cerramos la ventana)
                .catch(err => console.log(err))
        }
        else {
            axios.put(url + "producto", {
                _id, nombre, cantidad, precio, costo, idCategoria, imagen
            })
                .then(res => limpiar())   //Borramos los campos y cerramos la ventana)
                .catch(err => console.log(err))

        }
    }

    /**
     * limpiar
     */
    const limpiar = () => {
        setNombre('')
        setCantidad('')
        setPrecio('')
        setCosto('')
        setIdCategoria('')
        setImagen('')
        const btnClose = document.getElementById('btnClose')
        btnClose.click()
        console.log("producto debio ser crerada")
        listarProducto()

    }

    /**
     * vamos ahacer el metodo para eliminar (borrar) los registros
     */
    const eliminar = async (id) => {
        await axios.delete(url + "producto/" + id)
            .then(res => listarProducto())
            .catch(err => console.log(err))
    }

    /**
     * vamos ahacer el metodo para editar los registros
     */
    const editar = (data) => {
        setId(data._id);
        setNombre(data.nombre);
        setCantidad(data.cantidad);
        setPrecio(data.precio);
        setCosto(data.costo);
        setIdCategoria(data.idCategoria);
        setImagen(data.imagen);

        const btnNuevo = document.getElementById('btnNuevo')
        btnNuevo.click();
    }

    /**
     * funcion buscar
     */
    const buscar = async (nom) =>{
        if (nom.length == 0){
            listarProducto()
        }
        else{
        await axios.get(url+'producto/nom/'+nom)     // el url definido en el router de buscar
        .then( res => setProductos(res.data))
        .catch(err =>console.log(err))
    }
}

    // ahora voy a hacer la página de listar productos
    return (
        <div>
            <LogPage />     {/*cargo barra logo*/}
            <NavPage />     {/* cargo barra menu*/}
            <div className="card m-2">      {/*// Defino margen Separación del contenido que viene*/}
                <div className='row'>       {/*// hago la primera fila con contenido titulo*/}
                    <div className='col-4'>
                        <div className="card-header text-bg-info">
                            Gestion de Productos
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
                            <input type="search" onKeyUp={(e)=>buscar(e.target.value)} className="form-control" placeholder="escribe nombre" />
                        </div>
                        <div className='col-2 text-end'> {/*Boton de buscar con icono lupa */}
                            <button type="button" className="btn btn-outline-primary" title='Buscar'>
                                <i className="fa-solid fa-magnifying-glass"></i> buscar
                            </button>
                        </div>
                        <div className='col-3 text-end'>{/* boton de agregar con icono mas*/}
                            <button type="button" id='btnNuevo' className="btn btn-outline-primary" title='crear' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                {/* definimos el modal para el pop screen de toma de datos, esta mas abajo
                                trajimos codigo del bootstrap para que cuando presionemos el boton guardar mande la informacion
                                de los campos*/}
                                <i className="fa-solid fa-plus"></i> crear
                            </button>
                        </div>

                        <div> {/*aca iniciamos la construccion de la tabla*/}
                            <hr />
                            <table className="table table-hover">{/* definimos la tabla con una opcion de 'hover' para las filas*/}
                                <thead className="table-info">{/* definimos los titulos de las columnas*/}
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Categoria</th>
                                        <th scope="col">precio</th>
                                        <th scope="col">Inventario</th>
                                        <th scope="col" className='text-center'>Opciones</th>
                                    </tr>

                                </thead>
                                <tbody>{/* aca iniciamos las filas de contenido*/}
                                    {
                                        productos.map((prod, index) => (  // aca voy a iterar para mostrarlos datos traidos en la linea 13*
                                            // mapiando productos (definido en al linea linea 13) en la variable prod
                                            <tr key={prod._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{prod.nombre}</td>      {/*// saco el elemento nombre del 'JSON' */}
                                                <td>{prod.idCategoria}</td>
                                                <td>{prod.precio}</td>
                                                <td>{prod.cantidad}</td>

                                                <td className='text-center '> {/*// Para la columna opciones defino dos botones con icono (editar y eliminar)*/}
                                                    <button type="button" onClick={() => editar(prod)} className="btn btn-outline-warning " title='Editar'>
                                                        <i className="fa-solid fa-pencil"></i>  {/*// icono de lapiz*/}
                                                    </button>
                                                    <button type="button" onClick={() => { eliminar(prod._id) }} className="btn btn-outline-danger" title='Eliminar'>
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
                            <form onSubmit={guardar}>
                                <div className='col-6'>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Nombre:_A</label>
                                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" required />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Categoria_A:</label>
                                        <input type="text" value={idCategoria} onChange={(e) => setIdCategoria(e.target.value)} className="form-control" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-4'>
                                        <div className="mb-1">
                                            <label htmlFor="recipient-name" className="col-form-label">Cantidad:</label>
                                            <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className="mb-1">
                                            <label htmlFor="recipient-name" className="col-form-label">Precio:</label>
                                            <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className="mb-1">
                                            <label htmlFor="recipient-name" className="col-form-label">Costo:</label>
                                            <input type="number" value={costo} onChange={(e) => setCosto(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <div className="mb-1">
                                        <label htmlFor="recipient-name" className="col-form-label">Imagen:</label>
                                        <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)} className="form-control" id="recipient-name6" />
                                    </div>
                                </div>

                                {/*
                                    <div className="mb-1">
                                        <label htmlFor="message-text" className="col-form-label">Message:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                */}

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id='btnClose'>Cerrar</button>
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

export default ListProducto