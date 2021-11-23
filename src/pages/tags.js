/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import PropTypes from "prop-types"
// Utilities
import kebabCase from "lodash/kebabCase"
// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"

const url = typeof window !== 'undefined' ? window.location.href : '';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout className="not-found-page">
    <Seo title="Tags Page" />
    <Helmet>
      title={title}
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Tags" />
      <meta property="og:description" content="Tags Page" />
      <meta property="twitter:title" content="Tags" />
      <meta property="twitter:description" content="Tags Page" />
    </Helmet>
    <div
      className="wrapper"
    >
      <h1>Tags</h1>
      <Box p={4} bg="primary"
        sx={{
          borderRadius: "12px",
        }}
      >
        <ul className='taglist field is-grouped is-grouped-multiline'>
          {group.map(tag => (
            <li key={tag.fieldValue} className='control'>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <div className='tags has-addons is-large'>
                  <span aria-label='Tag' className='tag is-primary'>
                    {tag.fieldValue}
                  </span>
                  <span aria-label='Tag Count' className='tag is-dark '>                            
                    {tag.totalCount}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`