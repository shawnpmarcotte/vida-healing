import React from 'react'
import { Link } from 'gatsby'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <h4>
          <a
            href="/jointeam"
          >
            <span className="label">JOIN OUR TEAM</span>
          </a>
        </h4>
        <h4>
          <a
            href="/mission"
          >
            <span className="label">MISSION</span>
          </a>
        </h4>
        <h4>
          <a
            href="/about"
          >
            <span className="label">ABOUT</span>
          </a>
        </h4>
      </ul>
      <ul className="copyright">
        <li>&copy; Copyright © 2018 Vida Healing, LLC</li>
      </ul>
    </div>
  </footer>
)

export default Footer
