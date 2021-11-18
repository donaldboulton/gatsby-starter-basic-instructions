/** @jsx jsx */
import { jsx, Heading, Box } from "theme-ui"
import * as React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { FaList } from "@react-icons/all-files/fa/FaList";

const SiteCategories = ({ group, ...rest }) => {
  const { categoryTitle = `Posts Categories` } = rest
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  return (
    <>
      <Box>
        <div>
          <Heading as='h3'>
            <span className="icon -list">
              <FaList />
            </span>{" "}
            &nbsp;{categoryTitle}
          </Heading>
        <div>
            <nav className='nav-scroll'
              sx={{
                background: "#111",
              }}
            >
              <div
                sx={{
                maxHeight: "70vh",
                  background: "#111",
                }}
              >
                <ul className='taglist field is-grouped is-grouped-multiline'>
                  {data.allMarkdownRemark.group.map(category => (
                    <li className='control menu-item' key={category.fieldValue}>
                      <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                        <div className='tags has-addons is-large'>
                          <span aria-label='Tag' className='tag is-primary'>{category.fieldValue}</span>
                          <span aria-label='Tag Count' className='tag is-dark'>{category.totalCount}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </Box>
    </>
  )
}

export default SiteCategories

