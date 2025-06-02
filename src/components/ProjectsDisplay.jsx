import React from 'react'
import './ProjectsDisplay.css'




function ProjectsDisplay({display_title = "Title"}){
    return(
        <div class="container py-5">
            <h2 class="text-uppercase">{display_title}</h2>
        </div>
    )
}

export default ProjectsDisplay;