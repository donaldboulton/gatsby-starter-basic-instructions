/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import { graphql, Link, HeadProps, DataProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import rehypeReact from 'rehype-react'
import { RiTimerLine, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
import { MdList } from 'react-icons/md'
import { FaTags } from 'react-icons/fa'
import { BsFillCalendarFill } from 'react-icons/bs'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Counter from '../components/Counter'
import SiteTags from '../components/SiteTags'
import SiteCategory from '../components/SiteCategories'
import Bio from '../components/Bio'
import Checked from '../components/Checkbox'
import Stars from '../components/Stars'

require('prismjs')
require('prismjs/themes/prism-okaidia.css')

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    counter: Counter,
    tags: SiteTags,
    categories: SiteCategory,
    checked: Checked,
  },
}).Compiler

const styles = {
  'article blockquote': {
    'background-color': 'cardBg',
  },
  pagination: {
    a: {
      color: 'muted',
      '&.is-active': {
        color: 'text',
      },
      '&:hover': {
        color: '#918080',
      },
    },
  },
}

type DataProps = {
  data: {
    allMarkdownRemark: {
      frontmatter: {
        title: string
        description: string
        path: string
        date: string
        tags: string[]
        category: string
        featuredImage: object
      }
      timeToRead: string
    }
  }
}

const Pagination = props => (
  <div className="pagination -post" sx={styles.pagination}>
    <ul>
      {props.previous && props.previous.frontmatter.template === 'blog-post' && (
        <li>
          <Link to={props.previous.frontmatter.path} rel="prev">
            <p
              sx={{
                color: 'muted',
              }}
            >
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{' '}
              Previous
            </p>
            <span className="page-title">{props.previous.frontmatter.title}</span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === 'blog-post' && (
        <li>
          <Link to={props.next.frontmatter.path} rel="next">
            <p
              sx={{
                color: 'muted',
              }}
            >
              Next{' '}
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
  const { markdownRemark } = data
  const { frontmatter, htmlAst, excerpt } = markdownRemark
  const postNode = data.markdownRemark
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const Image = frontmatter.featuredImage ? postNode.frontmatter.featuredImage.childImageSharp.gatsbyImageData : ''
  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }

  const tags = frontmatter.tags || []
  let taglist = 'Tags: '
  if (tags.length > 0) {
    taglist += tags.join(', ')
  }

  return (
    <>
      <Stars />
      <Layout className="page">
        <Seo
          title={frontmatter.title}
          description={frontmatter.description ? frontmatter.description : excerpt}
          image={Image}
          url={url}
          article={true}
        />
        <article className="blog-post">
          <header className="featured-banner">
            <section className="article-header">
              <h1>{frontmatter.title}</h1>
              <div>
                <span className="icon -calendar">
                  <BsFillCalendarFill size="0.7em" />
                </span>
                &ensp;
                <time sx={{ color: 'muted' }}>{frontmatter.date}</time>
                &ensp;
                <span
                  sx={{
                    color: 'muted',
                  }}
                >
                  <span className="icon -timer">
                    <RiTimerLine size="0.8em" />
                  </span>{' '}
                  <small sx={{ color: 'muted' }}>{postNode.timeToRead} min read</small>
                </span>
              </div>
              {tags.length > 0 && (
                <div
                  sx={{
                    color: 'muted',
                  }}
                >
                  <span className="icon -tags">
                    <FaTags size="0.8em" />
                  </span>{' '}
                  <span>
                    <Link aria-label="Tags" to="/tags/">
                      <small>{taglist}</small>
                    </Link>
                  </span>
                  &ensp;
                  <span className="icon -category">
                    <MdList size="1.1em" />
                  </span>{' '}
                  <span>
                    <Link aria-label="Categories" to="/categories/">
                      <small>Categories: {frontmatter.category}</small>
                    </Link>
                  </span>
                </div>
              )}
            </section>
            {Image ? <GatsbyImage image={Image} alt={frontmatter.title + ' - Featured image'} className="cover" /> : ''}
          </header>
          <Bio />
          <div className="blog-post-content">{renderAst(htmlAst)}</div>
        </article>
        {(previous || next) && <Pagination {...props} />}
      </Layout>
    </>
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
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        category
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

export function Head(props: HeadProps<DataProps>) {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content="Blog" />
      <meta property="og:description" content="Blog Posts Lists" />
      <meta property="twitter:title" content="Blog" />
      <meta property="twitter:description" content="Blog Posts Lists" />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          about: {
            '@id': 'https://gatsbystarterbasicinstructions.gatsbyjs.io/',
          },
          audience: 'public',
          abstract:
            'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          author: {
            '@id': 'https://donboulton.com',
          },
          copyrightHolder: {
            '@id': 'https://gatsbystarterbasicinstructions.gatsbyjs.io/',
          },
          copyrightYear: 2022,
          creator: {
            '@id': 'https://gatsbystarterbasicinstructions.gatsbyjs.io/',
          },
          description:
            'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          image: {
            '@type': 'ImageObject',
            url: 'https://gatsbystarterbasicinstructions.gatsbyjs.io/static/assets/blood.jpg',
            width: '1400',
            height: '450',
          },
          inLanguage: 'en',
          name: 'Basic Instructions',
          publisher: {
            '@id': 'https://gatsbystarterbasicinstructions.gatsbyjs.io/',
          },
          url: 'https://gatsbystarterbasicinstructions.gatsbyjs.io/',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Posts',
          url: url,
          image: {
            '@type': 'ImageObject',
            url: 'https://gatsbystarterbasicinstructions.gatsbyjs.io/static/assets/blood.jpg',
            width: '1400',
            height: '450',
          },
          publisher: {
            '@type': 'Mansbooks',
            name: 'Donald Boulton',
          },
          license: 'http://publiuslogic.com/blog/0bsd-licence',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          description: 'Breadcrumbs list',
          itemListElement: [
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://gatsbystarterbasicinstructions.gatsbyjs.io/',
                name: 'Home',
              },
              position: '1',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': url,
                name: 'NotFound',
              },
              position: '2',
            },
          ],
          numberOfItems: '2',
          name: 'Breadcrumbs',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@id': 'https://gatsbystarterbasicinstructions.gatsbyjs.io/',
          '@type': 'Organization',
          address: 'OKC, Middle Earth',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'donaldboulton@gmail.com',
            telephone: '+405-863-2165',
          },
          description:
            'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          email: 'donaldboulton@gmail.com',
          founder: {
            '@id': 'https://donboulton.com',
          },
          location: 'OKC, Middle Earth',
          image: {
            '@type': 'ImageObject',
            url: 'https://gatsbystarterbasicinstructions.gatsbyjs.io/static/assets/blood.jpg',
            width: '1400',
            height: '450',
          },
          logo: {
            '@type': 'ImageObject',
            url: 'data:image/png;base64,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',
          },
          name: 'PubliusLogic',
          sameAs: [
            'mailto:donaldboulton@gmail.com',
            'tel:+405-863-2165',
            'https://www.facebook.com/donboulton',
            'https://www.instagram.com/boulton3662',
            'https://twitter.com/donboulton',
            'https://www.linkedin.com/donboulton',
            'https://github.com/donaldboulton/',
          ],
          url: 'https://gatsbystarterbasicinstructions.gatsbyjs.io/',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://donboulton.com',
          name: 'Donald Boulton',
          url: 'https://donboulton.com',
          worksFor: {
            '@id': 'https://mansbooks.com/',
          },
        })}
      </script>
    </>
  )
}
