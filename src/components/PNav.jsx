import React from 'react';
import './PNav.css'


function PNav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light pb-3">
        <div className="container-fluid d-flex justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 d-flex justify-content-end gap-2">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Games">Games</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#Software Projects">Software Projects</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}



export default PNav