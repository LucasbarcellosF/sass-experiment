import React from 'react'
import Github from './img/Github.svg'
import Linkedin from './img/Linkedin.svg'


import './styles/style.css'

function App() {
  return (
    <div>

      <header class="navbar">
        <nav>
          <li><a href="/about">About</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/contact">Contact</a></li>
        </nav>
      </header>

      <section class="first_section">
        <div>
          <h1>Hey I am Luke</h1>
          <p>Front End Developer</p>
        </div>
      </section>

      <section class="second_section">
        <h2>These are some of my projects</h2>
        <div class="card_grid">
          <Card image="https://github.com/LucasbarcellosF/NLW/raw/master/example/1.png" label="Ecoleta" description="Next Level Week - Ecoleta" />
          <Card image="https://raw.githubusercontent.com/LucasbarcellosF/alertrack/master/public/aletrack.png" label="Aletrack" description="SPA Challenge - Alertrack" />
        </div>
      </section>

      <section class="third_section">
        <div>
          <h3>Let's work together...</h3>
          <p>How do you take your coffee?</p>
        </div>
        <div class="section_list">
          <li><img src={Github} alt="github" /><a href="https://github.com/LucasbarcellosF">Github</a></li>
          <li><img src={Linkedin} alt="linkedin" /><a href="https://www.linkedin.com/in/lucasbarcellosf/">Linkedin</a></li>
        </div>
      </section>

    </div>
  )
}

function Card(props) {
  const { image, label, description} = props
  return (
    <div class="card">
      <img src={image} alt={label} />
      <div class="card_description">
        <p>{description}</p>
      </div>
    </div>


  )
}

export default App
