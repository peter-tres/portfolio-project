import React, {useState,useEffect} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PNav from './components/PNav'
import PFooter from './components/PFooter';
import Intro from './components/Intro';
import ProjectsDisplay from './components/ProjectsDisplay'
import GamesData from './assets/game_showcases.json'
import SoftwareData from './assets/software_showcases.json'
function App() {





  return (
    <>
    <PNav/>
    <main className="background">
      <Intro/>
      <hr className="mx-auto border-thickness"></hr>
      <ProjectsDisplay title="Games" json={GamesData}/>
      <hr className="mx-auto border-thickness"></hr>
      <ProjectsDisplay title="Software Projects" json={SoftwareData}/>
      </main>
      <PFooter/>
    </>
  )
}

export default App
