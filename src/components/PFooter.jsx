import React from 'react';
import './PFooter.css';
import './SocialBtn'
import SocialBtn from './SocialBtn';
import {logos} from '../assets/images'

function PFooter(){
    return(
        <div class="footer">
            <div class="container-fluid d-flex justify-content-center gap-4 py-3">
                <SocialBtn
                link="https://bsky.app/profile/petertres.bsky.social"
                icon={logos.bskyLogo}/>
                <SocialBtn
                link="https://www.linkedin.com/in/pedro-mota95/"
                icon={logos.linkedinLogo}/>
                <SocialBtn
                link="https://github.com/peter-tres"
                icon={logos.githubLogo}/>
                <SocialBtn
                link="https://google.com"
                icon={logos.emailLogo}/>
            </div>
        </div>


    );
}




export default PFooter