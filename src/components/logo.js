import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = props => (
  <>
    <Link to="/">
      <StaticImage src='../../static/assets/logo.png' alt='PubliusLogic'
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </Link>
  </>
)

export default Logo
