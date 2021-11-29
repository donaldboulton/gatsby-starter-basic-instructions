/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import rehypeReact from "rehype-react"
import { GatsbyImage } from "gatsby-plugin-image"
import Counter from "../components/counter"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 
    "counter": Counter,
  },
}).Compiler

export const pageQuery = graphql`
  query PrivacyQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
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

const PrivacyPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, htmlAst, excerpt } = markdownRemark
  const postNode = data.markdownRemark
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const Image = frontmatter.featuredImage
    ? postNode.frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <Helmet>
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta name="twitter:image:alt" content={frontmatter.title} />
        <meta property="twitter:description" content={frontmatter.description} />
      </Helmet>
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
          <div
            className="blog-post-content"
          >
            {
              renderAst(htmlAst)
            }
          </div>
        </article>
    </Layout>
  )
}

export default PrivacyPage
