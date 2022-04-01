import React from 'react'
import { Link } from 'gatsby'
import Stars from "../components/Stars"

export default function DSG (props) {

  return (
    <>
      <div className="not-found-page">
        <Stars />
        <div
          className="wrapper"
          style={{
            marginTop: "40px",
            alignText: "center"
          }}
        >
          <Link to='/posts/gatsby-version-four'>Back to Post</Link><br />
          <h1>DSG: Deferred Static Generation</h1>
        </div>
      </div>
    </>
  )
}
