import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Welcome to Vida Healing!</h1>
      </header>
      <div className="content">
        <h4>
          At Vida Healing we specialize in Applied Behavior Analysis (ABA).
          Contact us if <br />you have a child or family member that you think will
          benefit from these services
        </h4>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
