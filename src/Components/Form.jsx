import React, { useEffect, useState } from "react";
import { useDoctorStates } from "./utils/global.context";

const Form = () => {
  const {
    state: { theme },
  } = useDoctorStates();

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`Gracias ${formInfo.name}, te contactaremos cuando antes vía mail`)
  }, [show]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(formInfo.name.trim().length >= 5)
    if (
      formInfo.name.trim().length >= 5 &&
      regexEmail.test(formInfo.email)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={!theme && "dark"}>
      <div className="pages-container">
        {show ? (
          <h2>{message}</h2>
        ) : (
          <>
            {" "}
            <h1>Contact us</h1>
            <h4>Fill the form</h4>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Full name</label>
                <input
                  name="nombre completo"
                  type="text"
                  onChange={(event) =>
                    setFormInfo({ ...formInfo, name: event.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  onChange={(event) =>
                    setFormInfo({ ...formInfo, email: event.target.value })
                  }
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </>
        )}
        {error ? (
          <h4 style={{ color: "red" }}>
            Por favor verifique su información nuevamente
          </h4>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
