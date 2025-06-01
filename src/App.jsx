import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PNav from './components/PNav'
import PFooter from './components/PFooter';
import Intro from './components/Intro';




function App() {

  return (
    <>
    <PNav/>
    <main class="vh-100">
    <Intro/>
    </main>
    <PFooter/>
    </>
  )
}

export default App
