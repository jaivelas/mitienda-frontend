const NavPage = () =>{
    return(
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary row m-0 row-cols-2 row-cols-md-2 g-2">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MarthaMartha</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Principal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Retablos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Accesorios</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Otros
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Pinturas</a></li>
            <li><a class="dropdown-item" href="#">Madera</a></li>
            <li><a class="dropdown-item" href="#">OtrosMateriales</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default NavPage