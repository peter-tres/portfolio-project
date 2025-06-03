import React from 'react'
import './Intro.css'
import SocialBtn from './SocialBtn';
import {logos} from '../assets/images'



function Intro(){

    return(
        <div className="container py-5">
            <div className="row">
            <h1 className="text-center text-uppercase fw-bold p-title">Games<span className="text-primary"> & </span>Software Developer</h1>
            </div>
            <div className="row my-0">
            <h2 className="text-center fs-6 fst-italic josefin fw-light">Crafting experiences across platforms, bringing ideas to life</h2>
            </div>
            <div className="row justify-content-center my-5 pt-5">
                <div className="intro-blurb w-50">
                <p>I’m <b>Peter M.</b> I’m a developer driven by creating memorable and interactive experiences— and by the systems working behind the curtain to make them possible.</p>
                <p>This passion for user immersion fuels me in both <b>game development</b> and <b>software development</b>.</p>
                <p>Below you will find some of my personal projects.</p>
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col d-flex flex-column justify-content-center">
                    <div className="d-inline-flex justify-content-center gap-2">
                        <SocialBtn
                        link="https://bsky.app/profile/petertres.bsky.social"
                        icon={logos.bskyLogo}
                        color="#1DD399"/>
                        <SocialBtn
                        link="https://www.linkedin.com/in/pedro-mota95/"
                        icon={logos.linkedinLogo}/>
                    </div>
                    <div className="d-inline-flex justify-content-center gap-2">
                        <SocialBtn
                        link="https://github.com/peter-tres"
                        icon={logos.githubLogo}/>
                        <SocialBtn
                        link="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=motap95@gmail.com"
                        icon={logos.emailLogo}
                        color="#1DD399"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;