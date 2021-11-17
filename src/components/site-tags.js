/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
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
      <div>
        <Heading as='h3'>
          <FaTags /> 
          {tagsTitle}
        </Heading>
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
      </div>
    </>
  )
}

export default SiteTags

