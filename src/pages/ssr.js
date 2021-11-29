import * as React from 'react'
import fetch from 'node-fetch'
import { Link } from 'gatsby'

export default function SSR (props) {
  const { image } = props.serverData

  return (    
    <>
      <Layout className="not-found-page">
        <div
          className="wrapper"
        >
          <Link to='/posts/gatsby-version-four'>Back to Post</Link><br />
          <h1>SSR: Server Side Rendering</h1>

          You Should See Doggies Below
          <img
            alt='doggo'
            src={image}
          />
        </div>
      </Layout>
    </>
  )
}

export async function getServerData ({ params }) {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())

  return {
    props: {
     // data has the shape of "message", "status" where message is the image src
      image: data.message
    }
  }
}
