import React, {useState,useEffect} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PNav from './components/PNav'
import PFooter from './components/PFooter';
import Intro from './components/Intro';
import ProjectsDisplay from './components/ProjectsDisplay'


function App() {





  return (
    <>
    <PNav/>
    <main className="min-vh-100 background">
      <Intro/>
      <hr className="mx-auto border-thickness"></hr>
      <ProjectsDisplay title="Games" json="game_showcases.json"/>
      <hr className="mx-auto border-thickness"></hr>
      <ProjectsDisplay title="Software Projects" json="game_showcases.json"/>
      </main>
      <PFooter/>
    </>
  )
}

export default App
