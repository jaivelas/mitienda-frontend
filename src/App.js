import logo from './logo.svg';
import './App.css';
//import LogPage from './components/home/logPage'
//import NavPage from './components/home/navPage'
//import CatPage from './components/home/catPage'
//import VidPage from './components/home/vidPage'
import HomePage from './components/home/homePage'
import ListCliente from './components/cliente/listCliente'
import ListProducto from './components/producto/listProducto'
import ListCategoria from './components/categoria/listCategoria'
import ListComentario from './components/comentario/listComentario'
import ListFactura from './components/factura/listFactura'
//import AddCategoria from './components/categoria/addCategoria'
//import AddProducto from './components/producto/addProducto'

import{Routes,Route} from 'react-router-dom'

function App() {
  return (
    //dentro del este div esta el llamado a cada page.
    //se cambia por el llamado a la homepage creada
    <Routes>
      
      <Route path='/' element = {<HomePage /> }/>
      <Route path='/cliente' element ={<ListCliente/>}/>
      <Route path='/producto' element ={<ListProducto/>}/>
      <Route path='/categoria' element ={<ListCategoria/>}/>
      <Route path='/comentario' element ={<ListComentario/>}/>
      <Route path='/factura' element ={<ListFactura/>}/>
      
      
    </Routes>
  );
}

export default App;
