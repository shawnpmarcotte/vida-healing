import React from 'react'
import { Link } from 'gatsby'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <h5>
          <a
            href="/jointeam"
            target="blank"
          >
            <span className="label">JOIN OUR TEAM</span>
          </a>
        </h5>
        <h5>
          <a
            href="/mission"
            target="blank"
          >
            <span className="label">MISSION</span>
          </a>
        </h5>
        <h5>
          <a
            href="/about"
            target="blank"
          >
            <span className="label">ABOUT</span>
          </a>
        </h5>
      </ul>
      <ul className="copyright">
        <li>&copy; Copyright © 2018 Vida Healing, LLC</li>
      </ul>
    </div>
  </footer>
)

export default Footer
