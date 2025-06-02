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
    <main class="vh-100 background">
      <Intro/>
      <hr class="w-75 mx-auto border-thickness"></hr>
      <ProjectsDisplay/>
      <hr class="w-75 mx-auto border-thickness"></hr>
      </main>
      <PFooter/>
    </>
  )
}

export default App
