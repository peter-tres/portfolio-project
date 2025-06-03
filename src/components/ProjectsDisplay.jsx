import React, {useState,useEffect} from 'react';
import './ProjectsDisplay.css'
import ProjectCard from './ProjectCard';

const CardContainer = ({title="cardname", info=[], image=""}) =>(
        <div className="px-0 col-12 col-md-12 col-lg-6">
        <ProjectCard title={title} info={info} image={image}/>
    </div> 
)

function generateCards(card_datas){
    let cards = [];
    for (const r of card_datas){
        const {title,info,image} = r
        cards.push(<CardContainer key={title} title={title} info={info} image={image}/>)
    }

    return(
        <>{cards}</>
    )
}


function ProjectsDisplay({title = "Title"}){
    const [showcases, setShowcases] = useState([]);

    useEffect(()=>{
    fetch('/game_showcases.json')
    .then(response => response.json())
    .then(json => setShowcases(json.showcases))
    .catch(error => console.error('Error fetching JSON'))
    }, [])


    return(
        <div className="container py-5">
            <h2 className="text-uppercase">{title}</h2>
            <div className="row py-4">
                
                {generateCards(showcases)}

            </div>

            
        </div>
    )
}

export default ProjectsDisplay;