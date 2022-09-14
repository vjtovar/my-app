import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Other Skills and </h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Qualifications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Microsoft ExCel - Advanced</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Microsoft Word - Advanced</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Power Point - Proficient</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adobe - Proficient</p>
            </li>
          </ul>
        </article>
        {/* END OF QUALIFICATIONS */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Fullstack Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Get in touch for a project you have in mind</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I enjoy exploring new opportunities</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Let's explore together</p>
            </li>
          
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Other Qualifications/Languages</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Dependable</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Attention to detail</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Self-motivated</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Spanish - Proficient</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>American Sign Language - Intermediate</p>
            </li>
          </ul>
        </article>
        {/* END OF OTHER QUALIFICATIONS */}
      </div>
    </section>
  )
}

export default Services