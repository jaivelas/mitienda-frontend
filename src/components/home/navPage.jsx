const NavPage = () =>{
    return(
<nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary row m-0 row-cols-0 row-cols-md-2 g-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MarthaMartha</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

 
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Principal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Retablos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accesorios</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Otros
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/cliente">Clientes</a></li>
            <li><a className="dropdown-item" href="/producto">Productos</a></li>
            <li><a className="dropdown-item" href="/categoria">Categorias</a></li>

            <li><a className="dropdown-item" href="/factura">Facturas</a></li>
            <li><a className="dropdown-item" href="comentario">Comentarios</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default NavPage