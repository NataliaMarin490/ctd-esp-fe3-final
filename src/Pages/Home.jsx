
import Card from "../Components/Card";
import { useDoctorStates } from "../Components/utils/global.context";

const Home = () => {
  const { state: { data } } = useDoctorStates();

  return (
    <div className="pages-container">
      <h1>Dentistas</h1>
      <div className="card-grid">
        {data.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;