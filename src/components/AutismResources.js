import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const AutismResources = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.toggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.toggleMenu} to="/individual">The Signs of Autism</Link></li>
                <li><Link onClick={props.toggleMenu} to="/aba">Core Symptoms of Austim</Link></li>
                <li><Link onClick={props.toggleMenu} to="/marriage">Austism | Causes</Link></li>
                <li><Link onClick={props.toggleMenu} to="/family">Asperger's Syndrome</Link></li>
                <li><Link onClick={props.toggleMenu} to="/autismfacts">Austims: Facts and Stats</Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get in Touch</a></li>
            </ul> */}
            <ul className="actions">
                <li><Link className="button next scrolly" onClick={props.toggleMenu} to="/contact">Contact</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.toggleMenu} href="javascript:;">Close</a>
    </nav>
)
AutismResources.propTypes = {
    toggleMenu: PropTypes.func,
}

export default AutismResources
