import Card from "../Components/Card";
import { useDoctorStates } from "../Components/utils/global.context";

const Favorites = () => {
  const {
    state: { favs },
  } = useDoctorStates();

  return (
    <>
      <h1>Favorites</h1>
      <div className="card-grid">
        {favs.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
            hideFav={true}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
