/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import { GatsbyImage } from "gatsby-plugin-image"
import { RiSendPlane2Line } from "@react-icons/all-files/ri/RiSendPlane2Line"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query ContactQuery($id: String!) {
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
    site {
      siteMetadata {
        title
      }
    }
  }
`

function onSubmit(token) {
    document.getElementById("contact").submit();
}

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const postNode = data.markdownRemark
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const Image = frontmatter.featuredImage
    ? postNode.frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

  return (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <Helmet>
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta name="twitter:image:alt" content={frontmatter.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta property="twitter:description" content={frontmatter.description} />
      </Helmet>
      <div className="wrapper">
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
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>
              Subject
              <input type="text" name="subject" required />
            </label>
          </p>
          <p>
            <label>
              Message<textarea name="message" required></textarea>
            </label>
          </p>
          <p className="text-align-right">
            <button
              aria-label="Submit"
              class="button g-recaptcha" 
              data-sitekey="6LcE-000000000_000000_000000" 
              data-callback={onSubmit}
              data-action='submit'
              className="button g-recaptcha"
              sx={{
                variant: "variants.button",
              }}
              type="submit"
            >
              Send Message{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      color: "#777",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      color: "#777",
      outline: "none",
    },
  },
}
