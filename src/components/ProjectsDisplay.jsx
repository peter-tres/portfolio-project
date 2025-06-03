import React, {useState,useEffect} from 'react';
import './ProjectsDisplay.css'
import ProjectCard from './ProjectCard';

const CardContainer = ({title="cardname", info=[], image=""}) =>(
        <div className="col-12 col-md-12 col-lg-6">
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


function ProjectsDisplay({title = "Title", json=""}){
    const [showcases, setShowcases] = useState([]);

    let json_name = '/' + json;
    useEffect(()=>{
    fetch(json_name)
    .then(response => response.json())
    .then(json => setShowcases(json.showcases))
    .catch(error => console.error('Error fetching JSON'))
    }, [])


    return(
        <div className="container py-5">
            <h2 id={title}className="text-uppercase">{title}</h2>
            <div className="row py-4">
                
                {generateCards(showcases)}

            </div>

            
        </div>
    )
}

export default ProjectsDisplay;