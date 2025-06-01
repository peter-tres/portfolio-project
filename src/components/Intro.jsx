import React from 'react'
import './Intro.css'




function Intro(){

    return(
        <div class="container pt-5">
            <div class="row">
            <h1 class="text-center text-uppercase fw-bold p-title">Game <span class="text-primary">&</span> Web Developer</h1>
            </div>
            <div class="row my-0">
            <h2 class="text-center fs-6 fw-light fst-italic">Crafting experiences on browser, making worlds come to life</h2>
            </div>
            <div class="row justify-content-center pt-5">
                <div class="w-50">
                <p class>I’m <b>Peter M.</b> I’m a developer driven by creating memorable and interactive experiences— and by the systems working behind the curtain to make them possible.</p>
                <p>This passion for the user’s immersion fuels me in both <b>game development</b> and <b>web development</b>.</p>
                </div>
            </div>
        </div>
    )
}

export default Intro;