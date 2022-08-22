import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Stars from '../components/Stars'

export default function DSG(props) {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <>
      <Stars />
      <Layout>
        <Seo title="DSG" description="Differed Static Generation" url={url} />

        <div className="not-found-page">
          <div
            className="wrapper"
            style={{
              marginTop: '40px',
              alignText: 'center',
            }}
          >
            <Link to="/posts/gatsby-version-four">Back to Post</Link>
            <br />
            <h1>DSG: Deferred Static Generation</h1>
          </div>
        </div>
      </Layout>
    </>
  )
}
