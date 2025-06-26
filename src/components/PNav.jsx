import React from 'react';
import {useEffect, useState} from 'react'
import './PNav.css'


function PNav({items}){

    const [scrolled, setScrolled] = useState(false);



    useEffect(()=>{
        const onScroll = () => {
            const isScrolled = window.scrollY > 50.0
            setScrolled(isScrolled);
            
        };

        window.addEventListener('scroll', onScroll);
        
        return () => window.removeEventListener('scroll', onScroll);

    },
    []);


    return(
        <nav className={"navbar sticky-top navbar-expand-lg navbar-light bg-light pb-3 " + (scrolled? "scroll-bg": "transparent-bg")}>
        <div className="container-fluid d-flex justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 d-flex justify-content-end gap-2">
                { items.map( item => 
                    <li className="nav-item" key={item}>
                    <a className="nav-link" aria-current="page" href={`#${item}`}>{item}</a>
                    </li>
                )}
 
            </ul>
            </div>
        </div>
        </nav>
    );
}



export default PNav