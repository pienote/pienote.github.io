import React from 'react';
import AppBar from '@mui/material/AppBar';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="Footer">
        <footer style={{backgroundColor: "orange", width: "100%"}}>
            Contacts:
            <br/>
            <a href="https://www.linkedin.com/in/philip5chang" style={{color: "#0A66C2", textDecoration: "none", textAlign: "center"}}>
                <FontAwesomeIcon icon={faLinkedin}/>    
            </a>
            <a href="https://github.com/pienote" style={{color: "#000000", textDecoration: "none", textAlign: "center"}}>
                <FontAwesomeIcon icon={faGithub}/>    
            </a>
        </footer>
        </div>
    );
}