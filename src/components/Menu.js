import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Applied Behavior Analysis</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/mission">Individual</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/mission">Family</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/mission">Marriage and Couples</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Mission</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">About</Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get in Touch</a></li>
            </ul> */}
            <ul className="actions">
                <li><a href="#one" className="button next scrolly">Get in Touch</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
