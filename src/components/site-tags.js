/** @jsx jsx */
import { jsx, Heading, Box } from "theme-ui"
import * as React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { FaTags } from "@react-icons/all-files/fa/FaTags";

const SiteTags = ({ group, ...rest }) => {
  const { tagsTitle = `Posts Tags` } = rest
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
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
            <span className="icon -tags">
              <FaTags />
            </span>{" "}
            &nbsp;{tagsTitle}
          </Heading>
        </div>
        <nav className='nav-scroll'
          sx={{
            background: "#111",
          }}
        >
          <div>
            <ul className='taglist field is-grouped is-grouped-multiline'>
              {data.allMarkdownRemark.group.map(tag => (
                <li className='control menu-item' key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <div className='tags has-addons is-large'>
                      <span aria-label='Tag' className='tag is-primary'>{tag.fieldValue}</span>
                      <span aria-label='Tag Count' className='tag is-dark'>{tag.totalCount}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Box>
    </>
  )
}

export default SiteTags

