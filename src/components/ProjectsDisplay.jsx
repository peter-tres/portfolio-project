import React from 'react'
import './ProjectsDisplay.css'
import ProjectCard from './ProjectCard';

const CardContainer = ({title="cardname"}) =>(
        <div className="col-12 col-md-12 col-lg-6">
        <ProjectCard title={title}/>
    </div> 
)

function generateCards(array){
    let cards = [];
    for (const r of array){
        cards.push(<CardContainer title={"Card" + r}/>)
    }

    return(
        <>{cards}</>
    )
}


function ProjectsDisplay({display_title = "Title", response_array = []}){
    return(
        <div className="container py-5">
            <h2 className="text-uppercase">{display_title} - Displaying: {response_array.length} cards</h2>
            <div className="row py-4">
                
                {generateCards(response_array)}

            </div>

            
        </div>
    )
}

export default ProjectsDisplay;