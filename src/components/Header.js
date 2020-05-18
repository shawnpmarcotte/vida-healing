import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Vida Healing</strong> </Link>
        <nav>
            <a className="autism-link" onClick={props.onToggleAutismMenu} href="AutismResources:;">AUTISM RESOURCES</a>
        </nav>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="Menu:;">MENU</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleAutismMenu: PropTypes.func,
    onToggleMenu: PropTypes.func,
}

export default Header
