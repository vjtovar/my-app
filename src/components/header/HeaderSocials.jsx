import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/valerie-tovar-167886106" target="_blank"><BsLinkedin size= {60}/></a>
        <a href="https://github.com/vjtovar" target="_blank"><FaGithub size= {60}/></a>
        
        
    </div>
  )
}

export default HeaderSocials