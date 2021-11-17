/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Seo from "../components/seo"
import Layout from '../components/layout'

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout className="not-found-page">
    <Seo title="Categories Page" />
      <Helmet title={title} />
    <div
      className="wrapper"
    >
      <h1>Categories</h1>
      <Box p={4} bg="primary">       
          <ul className='taglist field is-grouped is-grouped-multiline'>
            {group.map(category => (
              <li className='control' key={category.fieldValue}>
                <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  <div className='tags has-addons is-large'>
                    <span aria-label='Category' className='tag is-primary'>{category.fieldValue}</span>
                    <span aria-label='Category Count' className='tag is-dark'>{category.totalCount}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
      </Box>    
    </div>
  </Layout>
)

CategoriesPage.propTypes = {
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

export default CategoriesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`