import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ProjectsRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline justify-content-center">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent justify-content-center column col-10 col-md-5 col-lg-4" key={post.id}>
              {/*is-6*/}
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : 'true'
                }`}
              >
                <header className="position-relative">
                  {post.frontmatter.featuredimage ? (
                    <div className="image-roll">
                      {/*featured-thumbnail*/}
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image for post ${post.frontmatter.title}`,
                          width:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.width,
                          height:
                            post.frontmatter.featuredimage.childImageSharp
                              .gatsbyImageData.height,
                        }}
                      />
                    </div>
                  ) : null}
                  <div className="post-meta projects-roll-description position-absolute">
                    <Link
                      className="title is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>

                  {/*{post.excerpt}*/}
                  <Link className="btn" to={post.fields.slug}>
                    Ver Más →
                  </Link>
                  </div>
                </header>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

ProjectsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function ProjectsRoll() {
  return (
    <StaticQuery
      query={graphql`
        query ProjectsRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "projects-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 300)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        height: 600
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ProjectsRollTemplate data={data} count={count} />}
    />
  );
}
