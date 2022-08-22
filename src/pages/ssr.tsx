import * as React from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Stars from '../components/Stars'

function SSR(props) {
  const { image } = props.serverData
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <>
      <Stars />
      <Layout>
        <Seo title="SSR" description="Serve Side Generation" url={url} />
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
            <h1>SSR: Server Side Rendering</h1>
            <div>You Should See Doggies Below</div>
            <div>Refresh The Page for More Doggies</div>
            <div>
              <img className="cover" alt="doggo" src={image} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default SSR

export async function getServerData({ params }) {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`).then(res => res.json())

  return {
    props: {
      // data has the shape of "message", "status" where message is the image src
      image: data.message,
    },
  }
}
