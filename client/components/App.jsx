import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Error404 from './Error404'
import Nav from './Nav'
import Home from './Home'
import AbilityScores from './AbilityScores'
import Alignments from './Alignments'

const App = () => {
  return (
    <>
        <Nav />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ability-scores" element={<AbilityScores />} />
          <Route exact path="/alignments" element={<Alignments />} />
        </Routes>
    </>
  )
}

export default App
