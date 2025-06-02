import React from 'react';
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
      <ProjectsDisplay response_array={["test","test2", "test3"]}/>
      <hr className="mx-auto border-thickness"></hr>
      <ProjectsDisplay/>
      </main>
      <PFooter/>
    </>
  )
}

export default App
