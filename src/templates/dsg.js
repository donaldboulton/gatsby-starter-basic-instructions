import * as React from 'react'
import { Link } from 'gatsby'

export default function DSG (props) {

  return (
    <>
      <Layout className="not-found-page">
        <div
          className="wrapper"
        >
          <Link to='/posts/gatsby-version-four'>Back to Post</Link><br />
          <h1>DSG: Deferred Static Generation</h1>
        </div>
      </Layout>
    </>
  )
}
