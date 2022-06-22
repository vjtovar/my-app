import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' size= {40}/>
              <h5>Experience</h5>
              <small>Internship</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' size= {40}/>
              <h5>Education</h5>
              <small>Master's degree</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' size= {40}/>
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>

          <p>
          I come from a Biotechnology background, but I have taken a career change to challenge myself to learn a new set of skills. I’m constantly striving to improve my techniques, expand my skillset and find new opportunities to grow. Please enjoy my portfolio, and feel free to get in touch with any questions.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About