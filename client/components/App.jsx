import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Error404 from './Error404'
import Nav from './Nav'
import Races from './Races'

const App = () => {
  return (
    <>
        <h1>Dungeons and Dragons API</h1>
        <Races />
        <Nav />
    </>
  )
}

export default App
