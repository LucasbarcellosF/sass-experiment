import React from 'react'
import './styles/style.scss'

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

        <div>
          <h2>These are some of my projects</h2>
        </div>

        <div>
          <Card image="" label="" description="" />
          <Card image="" label="" description="" />
          <Card image="" label="" description="" />
          <Card image="" label="" description="" />
          <Card image="" label="" description="" />
          <Card image="" label="" description="" />

          <button type="button">
            Show all
          </button>

        </div>
      </section>

      <section>
        <div>
          <h3></h3>
          <p></p>
        </div>
        <div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
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
      <p>{description}</p>
    </div>


  )
}

export default App
