import React from 'react'
import './ProjectCard.css'
import placeholder from '../assets/screenshot.png'



function ProjectCard({title="Placeholder Title"}){
    return(
        <div className="container">
        <h3>{title}</h3>
        <img src={placeholder} className="card w-100"></img>
        </div>
    )
}


export default ProjectCard;