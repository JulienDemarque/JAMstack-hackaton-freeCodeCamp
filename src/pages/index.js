import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <p>
      My name is <strong>Julien Demarque</strong>
    </p>
    <p>This is my gatsby site for the freecodecamp hackaton</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
