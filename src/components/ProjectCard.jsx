import React from 'react'
import './ProjectCard.css'
import { useId } from 'react';

function InfoRow( {title = "Placeholder", text="Placeholder"}){
    return(
        <div className="row pb-4">
            <h4 className="fst-italic fs-5">{title}</h4>
            <p>{text}</p>
        </div>
    );
}

function generateRows(rows){
    let info_rows = [];
    info_rows = rows.map(row=> {
        const {title, summary} = row;
        return(
            <InfoRow key={useId()} title={title} text={summary}/>
        );
    });

    return(
        info_rows

    );
}

function ProjectCard({title="Placeholder Title", info=[], image=""}){
    return(
        <div className="container">
        <h3 className="mb-4">{title}</h3>
        <img src={"/src/assets/" + image} className="card mb-4"></img>
        
        {generateRows(info)}

        </div>
    )
}


export default ProjectCard;