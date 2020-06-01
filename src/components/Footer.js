import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <h3>
          <a href="/jointeam">
            <span className="label">JOIN OUR TEAM</span>
          </a>
        </h3>
        <h3>
          <a href="/mission">
            <span className="label">MISSION</span>
          </a>
        </h3>
        <h3>
          <a href="/about">
            <span className="label">ABOUT</span>
          </a>
        </h3>
      </ul>
      <ul className="copyright">
        <li>
          &copy; Copyright © 2018 Vida Healing, LLC - Website Powered by{' '}
          <a href="https://prophecywebsolutions.com/" target="blank">
            Prophecy Web Solutions
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
