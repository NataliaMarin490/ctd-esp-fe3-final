import React from "react";
import { Link } from "react-router-dom";
import DoctorImg from "../public/images/doctor.jpg";
import { useDoctorStates } from "./utils/global.context";

const Card = ({ name, username, id, hideFav }) => {
  const { dispatch, state: { favs } } = useDoctorStates();

  const favorites = favs.find((fav) => fav.id === id);

  const addFav = () => {
    if (favorites) return
    dispatch({ type: "ADD_FAV", payload: { name, username, id } });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src={DoctorImg} alt={`doctor-${id}`} />
        <h3>{name}</h3>
      </Link>
      <h4>{username}</h4>
      {!hideFav && (
        <button onClick={addFav} className="favButton">
          Fav
        </button>
      )}
    </div>
  );
};

export default Card;
