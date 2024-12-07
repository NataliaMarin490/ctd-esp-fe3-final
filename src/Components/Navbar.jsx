import React from 'react'
import { Link } from 'react-router-dom'
import { useDoctorStates } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {
    dispatch,
    state: { theme },
  } = useDoctorStates();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME", payload:!theme });
  };

  return (
    <div className={!theme && "dark"}>
      <nav>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/contact">
          <h4>Contacts</h4>
        </Link>
        <Link to="/favs">
          <h4>Favorites</h4>
        </Link>
        <h4 onClick={toggleTheme}>Change color</h4>
      </nav>
    </div>
  );
}

export default Navbar