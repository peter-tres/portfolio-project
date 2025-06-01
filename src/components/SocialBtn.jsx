import React from 'react'
import './SocialBtn.css';
import {logos} from '../assets/images'



function SocialBtn({link = "#", icon = logos.emailLogo}) {
    return(
        <a class="btn btn-link" href={link} target="_blank" rel="noopener noreferrer">
            <img class="social-btn" src={icon}></img>
        </a>

    )
}

export default SocialBtn