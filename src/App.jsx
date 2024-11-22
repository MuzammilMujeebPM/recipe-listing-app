import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/view" element={<View/>} />
      </Routes>
    </>
  )
}

export default App