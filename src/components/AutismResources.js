import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const AutismResources = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.toggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.toggleMenu} to="/coresymptoms">Core Symptoms of Autism</Link></li>
                <li><Link onClick={props.toggleMenu} to="/autismfacts">Autism | Facts and Stats</Link></li>
                <li><Link onClick={props.toggleMenu} to="/signsofautism">The Signs of Autism</Link></li>
                <li><Link onClick={props.toggleMenu} to="/autismcauses">Autism | Causes</Link></li>
                <li><Link onClick={props.toggleMenu} to="/autismadults">Autism In Adults</Link></li>
                <li><Link onClick={props.toggleMenu} to="/associatedmedical">Associated Medical Info</Link></li>
            </ul>
            <ul className="actions">
                <li><Link className="button next scrolly" onClick={props.toggleMenu} to="/contact">Contact</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.toggleMenu} href="/">Close</a>
    </nav>
)
AutismResources.propTypes = {
    toggleMenu: PropTypes.func,
}

export default AutismResources
