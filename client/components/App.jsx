import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Error404 from './Error404'
import Nav from './Nav'
import Home from './Home'
import ListPage from './ListPage'

const App = () => {
  return (
    <>
        <Nav />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:listpage" element={<ListPage />} />
        </Routes>
    </>
  )
}

export default App
