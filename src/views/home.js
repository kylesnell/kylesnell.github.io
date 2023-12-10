import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Quick Witted Past Okapi</title>
        <meta property="og:title" content="Quick Witted Past Okapi" />
      </Helmet>
      <img
        src="/dark-abstract-5k-2b-3840x2400-1100h.jpg"
        alt="image"
        className="home-image"
      />
      <h1 className="home-heading">Laminar Innovation</h1>
    </div>
  )
}

export default Home
