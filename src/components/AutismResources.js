import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const AutismResources = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleAutismMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleAutismMenu} to="/coresymptoms">Core Symptoms of Autism</Link></li>
                <li><Link onClick={props.onToggleAutismMenu} to="/autismfacts">Autism | Facts and Stats</Link></li>
                <li><Link onClick={props.onToggleAutismMenu} to="/Signsofautism">The Signs of Autism</Link></li>
                <li><Link onClick={props.onToggleAutismMenu} to="/autismcauses">Autism | Causes</Link></li>
                <li><Link onClick={props.onToggleAutismMenu} to="/autismadults">Autism In Adults</Link></li>
                <li><Link onClick={props.onToggleAutismMenu} to="/associatedmedical">Associated Medical Info</Link></li>
            </ul>
            <ul className="actions">
                <li><Link className="button next scrolly" onClick={props.onToggleAutismMenu} to="/contact">Contact</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleAutismMenu} href="AutismResources:;" >Close</a>
    </nav>
)
AutismResources.propTypes = {
    onToggleAutismMenu: PropTypes.func,
}

export default AutismResources
