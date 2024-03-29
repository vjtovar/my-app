import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Valerie Tovar</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/vjtovar"><BsGithub/></a>
        <a href="https://linkedin.com/in/valerie-j-tovar"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Valerie Tovar</small>
      </div>
    </footer>
  )
}

export default Footer