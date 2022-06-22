import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {DiRuby} from 'react-icons/di'
import {SiRubyonrails} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon' size= {40} />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' size= {40} />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon' size= {40}/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiBootstrap className='experience__details-icon' size= {40}/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' size= {40}/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <DiRuby className='experience__details-icon' size= {40}/>
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiRubyonrails className='experience__details-icon' size= {40}/>
              <div>
                <h4>Ruby on Rails</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon' size= {40}/>
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
        
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience