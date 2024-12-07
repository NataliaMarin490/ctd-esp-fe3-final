import React from 'react'
import DHImg from "../public/images/DH.png"
import { useDoctorStates } from './utils/global.context'

const Footer = () => {
  const {
    state: { theme },
  } = useDoctorStates();

  return (
    <div className={!theme && "dark"}>
      <footer>
        <p>Powered by</p>
        <img src={DHImg} alt="DH-logo" />
        <span>Natalia Marin - FrontEnd III</span>
      </footer>
    </div>
  );
}

export default Footer
