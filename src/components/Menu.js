import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/abs">Applied Behavior Analysis</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/individual">Individual</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/family">Family</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/marriage">Marriage and Couples</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/mission">Mission</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About</Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get in Touch</a></li>
            </ul> */}
            <ul className="actions">
                <li><Link className="button next scrolly" onClick={props.onToggleMenu} to="/contact">Contact</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)
Menu.propTypes = {
    onToggleMenu: PropTypes.func,
}

export default Menu
