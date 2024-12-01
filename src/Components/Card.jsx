import React from "react";
import { Link } from "react-router-dom";
import DoctorImg from "../public/images/doctor.jpg"

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img src={DoctorImg} alt={`doctor-${id}`} />
        <h3>{name}</h3>
      </Link>
      <h4>{username}</h4>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
