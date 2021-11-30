import * as React from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from 'gatsby'

function SSR (props) {
  const { image } = props.serverData

  return (    
    <>
      <div className="not-found-page">
        <div
          className="wrapper"
          style={{
            marginTop: "40px",
            alignText: "center"
          }}
        >
          <Link to='/posts/gatsby-version-four'>Back to Post</Link><br />
          <h1>SSR: Server Side Rendering</h1>
          <div>You Should See Doggies Below</div>
          <div>Refresh The Page for More Doggies</div>
          <div>
            <img
              className='cover'
              alt='doggo'
              src={image}
            />
          </div>          
        </div>
      </div>
    </>
  )
}

export default SSR

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
