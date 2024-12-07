import { useParams } from "react-router-dom";
import { useDoctorStates } from "../Components/utils/global.context";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";

const Detail = () => {
  const {
    state: { theme },
  } = useDoctorStates();
  // useEffect(() => {
  //   const doctor = data.filter(doc => String(doc.id) === id)
  //   setDetail(doctor);
  //   console.log(id)
  // }, [id]);

  const { id } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios(url).then((res) => {
      setDetail(res.data);
    });
  }, []);

  return (
    <div className={!theme && "dark"}>
      <div className="pages-container">
        <h1>Detail</h1>
        <div className="card-grid">
          <Card
            key={detail.id}
            name={detail.name}
            username={detail.username}
            id={detail.id}
            phone={detail.phone}
            website={detail.website}
            hideFav={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
