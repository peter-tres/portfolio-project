import React from 'react'
import './ProjectsDisplay.css'
import ProjectCard from './ProjectCard';

const CardContainer = ({title="cardname"}) =>(
        <div className="col-12 col-md-12 col-lg-6">
        <ProjectCard title={title}/>
    </div> 
)

function generateCards(card_datas){
    let cards = [];
    for (const r of card_datas){
        const {title} = r
        cards.push(<CardContainer title={title}/>)
    }

    return(
        <>{cards}</>
    )
}


function ProjectsDisplay({display_title = "Title", showcases = []}){
    return(
        <div className="container py-5">
            <h2 className="text-uppercase">{display_title} - Displaying: {showcases.length} cards</h2>
            <div className="row py-4">
                
                {generateCards(showcases)}

            </div>

            
        </div>
    )
}

export default ProjectsDisplay;