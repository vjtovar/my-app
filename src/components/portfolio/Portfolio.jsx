import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pig Latin Translator',
    github: 'https://github.com/vjtovar/pig-latin-pluto-team',
    demo: 'https://plutos-piglatin-translator.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tic Tac Toe',
    github: 'https://github.com/vjtovar/tic-tac-toe-radiator-springs',
    demo: 'https://tic-tac-toe-game-learn.netlify.app'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio