import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contactos</h4>
      </Link>
      <Link to="/favs">
        <h4>Favoritos</h4>
      </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">
        <h4>Cambiar color</h4>
      </Link>
    </nav>
  );
}

export default Navbar