import React from 'react'
import './ProjectsDisplay.css'




function ProjectsDisplay({display_title = "Title"}){
    return(
        <div className="container py-5">
            <h2 className="text-uppercase">{display_title}</h2>
        </div>
    )
}

export default ProjectsDisplay;