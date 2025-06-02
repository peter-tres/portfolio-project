import React from 'react'
import './SocialBtn.css';
import {logos} from '../assets/images'



function SocialBtn({link = "#", icon = logos.emailLogo, color = ""}) {
    return(
        <a class="btn btn-link px-0 py-0" href={link} target="_blank" rel="noopener noreferrer">
            <div class="social-btn" style={{color}}>
                {icon}
            </div>
        </a>

    )
}

export default SocialBtn