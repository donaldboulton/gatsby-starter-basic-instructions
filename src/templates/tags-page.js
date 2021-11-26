/** @jsx jsx */
import { jsx, Container, Heading } from "theme-ui"
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { FaTags } from "@react-icons/all-files/fa/FaTags";
// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout className="not-found-page">
      <Seo />
      <Helmet>
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={tagHeader} />
        <meta property="og:description" content={tag} />
        <meta property="twitter:title" content={tagHeader} />
        <meta property="twitter:description" content={tag} />
      </Helmet>
      <div
        className="wrapper"
      >
        <div>
          <Container p={4} bg="primary"
            sx={{
              borderRadius: "12px",
            }}
          >
            <Heading as='h2'>{tagHeader}</Heading>
            <div>
              <ul className="tagsPage">
                {edges.map(({ node }) => {
                  const { slug } = node.fields
                  const { title } = node.frontmatter
                  return (
                    <li key={slug}>
                      <Link to={slug}>{title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <span className="icon -tags">
                <FaTags />
              </span>{" "} 
              <Link to="/tags">All Tags</Link>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          htmlAst
          fields {
            slug
          }
          frontmatter {
            title
            path
            description            
          }
        }
      }
    }
  }
`