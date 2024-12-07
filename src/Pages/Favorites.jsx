import Card from "../Components/Card";
import { useDoctorStates } from "../Components/utils/global.context";

const Favorites = () => {
  const {
    state: { favs, theme },
  } = useDoctorStates();

  return (
    <div className={!theme && "dark"}>
      <div className="pages-container">
        <h1>Favorites</h1>
        <div className="card-grid">
          {favs.length !== 0 ? (
            favs.map((dentist) => (
              <Card
                key={dentist.id}
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
                hideFav
              />
            ))
          ) : (
            <h3>You do not have favorite dentists.</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
