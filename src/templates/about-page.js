/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { GatsbyImage } from "gatsby-plugin-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        path
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const postNode = data.markdownRemark
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const Image = frontmatter.featuredImage
    ? postNode.frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <Helmet>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta property="og:image" content={Image} />
        <meta name="twitter:image:alt" content={frontmatter.title} />
        <meta property="twitter:description" content={frontmatter.description} />
      </Helmet>
      <div className="wrapper">
        <article className="blog-post">
          <header className="featured-banner">
            <section className="article-header">
              <h1>{frontmatter.title}</h1>
            </section> 
              {Image ? (
              <GatsbyImage
                image={Image}
                alt={frontmatter.title + " - Featured image"}
                className="cover"
              />
            ) : (
              ""
            )}      
          </header>
          <Bio />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </Layout>
  )
}

export default AboutPage
