import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am a learner developer currently learning about JS, React, and Gatsby
      </p>
      <p>
        You can contact me <Link to="/contact">here</Link>, for all your
        developmental needs.
      </p>
    </div>
  )
}

export default AboutPage
