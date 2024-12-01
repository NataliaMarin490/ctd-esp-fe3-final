import React from 'react'
import DHImg from "../public/images/DH.png"

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src={DHImg} alt='DH-logo' />
        <span>Natalia Marin - FrontEnd III</span>
    </footer>
  )
}

export default Footer
