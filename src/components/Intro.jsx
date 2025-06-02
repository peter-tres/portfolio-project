import React from 'react'
import './Intro.css'
import SocialBtn from './SocialBtn';
import {logos} from '../assets/images'



function Intro(){

    return(
        <div class="container py-5">
            <div class="row">
            <h1 class="text-center text-uppercase fw-bold p-title">Games<span class="text-primary"> & </span>Software Developer</h1>
            </div>
            <div class="row my-0">
            <h2 class="text-center fs-6 fw-light fst-italic">Crafting experiences across platforms, bringing ideas to life</h2>
            </div>
            <div class="row justify-content-center pt-5">
                <div class="intro-blurb">
                <p class>I’m <b>Peter M.</b> I’m a developer driven by creating memorable and interactive experiences— and by the systems working behind the curtain to make them possible.</p>
                <p>This passion for user immersion fuels me in both <b>game development</b> and <b>software development</b>.</p>
                </div>
            </div>
            <div class="row justify-content-center pt-5">
                <div class="col d-flex flex-column justify-content-center">
                    <div class="d-inline-flex justify-content-center gap-2">
                        <SocialBtn
                        link="https://bsky.app/profile/petertres.bsky.social"
                        icon={logos.bskyLogo}
                        color="#1DD399"/>
                        <SocialBtn
                        link="https://www.linkedin.com/in/pedro-mota95/"
                        icon={logos.linkedinLogo}/>
                    </div>
                    <div class="d-inline-flex justify-content-center gap-2">
                        <SocialBtn
                        link="https://github.com/peter-tres"
                        icon={logos.githubLogo}/>
                        <SocialBtn
                        link="https://google.com"
                        icon={logos.emailLogo}
                        color="#1DD399"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;