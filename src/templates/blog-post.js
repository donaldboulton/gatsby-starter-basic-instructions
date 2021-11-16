/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import rehypeReact from "rehype-react"
import Counter from "../components/counter"
import { RiTimerLine } from "@react-icons/all-files/ri/RiTimerLine"
import { RiArrowLeftLine } from "@react-icons/all-files/ri/RiArrowLeftLine"
import { RiArrowRightLine } from "@react-icons/all-files/ri/RiArrowRightLine"
import { FaTags } from "@react-icons/all-files/fa/FaTags"
import Layout from "../components/layout"
import Seo from "../components/seo"

require('prismjs')
require("prismjs/themes/prism-okaidia.css")

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "interactive-counter": Counter },
}).Compiler

const styles = {
  "article blockquote": {
    "background-color": "cardBg",
  },
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": { 
        color: "#918080",
      },
    },
  },
}

const Pagination = props => (
  <div className="pagination -post" sx={styles.pagination}>
    <ul>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        <li>
          <Link to={props.previous.frontmatter.path} rel="prev">
            <p
              sx={{
                color: "muted",
              }}
            >
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{" "}
              Previous
            </p>
            <span className="page-title">
              {props.previous.frontmatter.title}
            </span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li>
          <Link to={props.next.frontmatter.path} rel="next">
            <p
              sx={{
                color: "muted",
              }}
            >
              Next{" "}
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
            <span className="page-title">{props.next.frontmatter.title}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

const BlogPostTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, htmlAst, excerpt } = markdownRemark
  const postNode = data.markdownRemark
  const Image = frontmatter.featuredImage
    ? postNode.frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }

  const tags = frontmatter.tags || [];
    let taglist = 'Tags: ';
    if (tags.length > 0) {
        taglist += tags.join(', ');
    }


  return (
    <Layout className="page">
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        article={true}
      />
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <div>
              <time sx={{color: "muted"}}>{frontmatter.date}</time>
              &ensp;
              <span
                sx={{
                  color: "muted",
                }}
              >
                <span className="icon -timer">
                  <RiTimerLine size="0.8em" />                
                </span>{" "}  
                <small>{postNode.timeToRead} min read</small>
              </span>
            </div>
            {tags.length > 0 && 
              <div
                sx={{
                  color: "muted",
                }}
              >
                <Link aria-label='Tags' to='/tags/'>
                  <span className="icon -tags">
                    <FaTags />
                  </span>{" "}  
                  <small>{taglist}</small>
                </Link>
              </div>
            }
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
        <div
          className="blog-post-content"
          >
            {
              renderAst(htmlAst)
            }
        </div>
      </article>
      {(previous || next) && <Pagination {...props} />}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      excerpt(pruneLength: 148)
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
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

