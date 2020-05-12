import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Vida Healing</strong> </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleAutismMenu} href="javascript:;">AUTISM RESOURCES</a>
        </nav>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">MENU</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleAutismMenu: PropTypes.func,
    onToggleMenu: PropTypes.func,
}

export default Header
