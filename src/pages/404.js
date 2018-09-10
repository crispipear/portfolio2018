import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <section className="notFound">
    <h1>&#x1F648; You seem lost &#x1F648;</h1>
    <p><Link to="/">Let me take you back</Link></p>
  </section>
)

export default NotFoundPage
