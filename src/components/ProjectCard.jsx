import React from 'react'
import './ProjectCard.css'
import { useId } from 'react';

function InfoRow( {title = "Placeholder", text="Placeholder", is_link=false}){
    let ele = null

    if (is_link){
        ele =   <div className="row pb-4">
                <h4 className="fst-italic fs-5 fw-light"><a className="text-danger" href={text}><span className="fst-normal">{title}</span></a></h4>
                </div>
    }
    else{
        ele =   <div className="row pb-4">
                <h4 className="fst-italic fs-5 fw-light">{title}</h4>
                <p>{text}</p>
                </div>
    }

    return(
        ele
    );
}

function generateRows(rows){
    let info_rows = [];
    info_rows = rows.map(row=> {
        const {title, summary, link} = row;
        return(
            <InfoRow key={useId()} title={title} text={summary} is_link={link}/>
        );
    });

    return(
        info_rows

    );
}

function ProjectCard({title="Placeholder Title", info=[], image=""}){
    return(
        <div className="container">
        <h3 className="mb-4 fw-light">{title}</h3>
        <img src={"/src/assets/" + image} className="card mb-4"></img>
        
        {generateRows(info)}

        </div>
    )
}


export default ProjectCard;