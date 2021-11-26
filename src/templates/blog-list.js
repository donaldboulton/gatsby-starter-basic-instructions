/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Helmet } from 'react-helmet'
import { Link, graphql } from "gatsby"
import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine"
import { RiArrowRightLine } from "@react-icons/all-files/ri/RiArrowRightLine"
import Layout from "../components/layout"
import PostCard from "../components/post-card"
import Seo from "../components/seo"

const styles = {
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "text",
      },
    },
  },
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            description
            category
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  breakpoints: [250, 345, 576, 720]
                  placeholder: DOMINANT_COLOR
                  quality: 90
                )
              }
            }
          }
        }
      }
    }
  }
`
const Pagination = props => (
  <div className="pagination" sx={styles.pagination}>
    <ul>
      {!props.isFirst && (
        <li>
          <Link to={props.prevPage} rel="prev">
            <span className="icon -left">
              <RiArrowLeftLine />
            </span>{" "}
            Previous
          </Link>
        </li>
      )}
      {Array.from({ length: props.numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <Link
            to={`${props.blogSlug}${i === 0 ? "" : i + 1}`}
            className={props.currentPage === i + 1 ? "is-active num" : "num"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!props.isLast && (
        <li>
          <Link to={props.nextPage} rel="next">
            Next{" "}
            <span className="icon -right">
              <RiArrowRightLine />
            </span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const blogSlug = "/posts/"
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? blogSlug : blogSlug + (currentPage - 1).toString()
    const nextPage = blogSlug + (currentPage + 1).toString()

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
    let props = {
      isFirst,
      prevPage,
      numPages,
      blogSlug,
      currentPage,
      isLast,
      nextPage,
    }

    return (
      <Layout className="blog-page">
        <Seo
          title={"Blog " + currentPage + " of " + numPages}
          description={
            "Bibwoe base blog page " + currentPage + " of " + numPages
          }
        />
        <Helmet>
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
          <meta property="og:title" content="Blog" />
          <meta property="og:description" content="Blog Posts Lists" />
          <meta property="twitter:title" content="Blog" />
          <meta property="twitter:description" content="Blog Posts Lists" />
        </Helmet>
        <h1>Blog</h1>
        <div className="grids col-1 sm-2 lg-3">{posts}</div>
        <Pagination {...props} />
      </Layout>
    )
  }
}

export default BlogIndex
