import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DomToImage from 'dom-to-image'
import { saveAs } from 'filesaver';
import Filesaver from 'filesaver'
import TikTok from '../public/images/tiktok.png'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </>
  )
}

export default App
