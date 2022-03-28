import React from "react"
import { graphql } from "gatsby"

import Metadata from "../../components/SiteMetadata"
import Layout from "../../components/Layout"
import BlogItems from "../../components/Blogitems"

const Blog = ({ data }) => {
    return (
        <Layout>
            <BlogItems items={data} />
        </Layout>
    )
}

export default Blog

export const query = graphql`
  query {
allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                  category
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
      `