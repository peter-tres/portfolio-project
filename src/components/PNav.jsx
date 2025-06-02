import React from 'react';
import './PNav.css'


function PNav(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light pb-3">
        <div class="container-fluid d-flex justify-content-end">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav w-100 d-flex justify-content-end gap-2">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Games</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Software Projects</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}



export default PNav