import './App.css'


import { Routes, Route} from 'react-router';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blogpost' element={<BlogPost/>}/>
    </Routes>

    </>
  )
}

export default App
