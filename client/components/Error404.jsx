import React from 'react'

import Nav from './Nav'

const Error404 = (props) => {
  return (
    <>
      <h1>404</h1>
      <p>This page doesn&apos;t exist. Even though you&apos;re reading it right now.</p>
      <p>Maybe you were looking for:</p>
      <Nav />
    </>
  )
}

export default Error404
