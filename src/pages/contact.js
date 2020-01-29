import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>
        You can contact me directly on my Twitter handle{" "}
        <a
          href="https://twitter.com/@tabiso"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tabiso
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
