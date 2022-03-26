/*
import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Article from "../components/BlogRoll" // Component with styling for article


const DigitalGarden = (props) => {

  const allArticles = props.data.articles.nodes
  const [articles, setArticles] = useState(allArticles)

  const filterArticles = (tag) => {

    const filtered = allArticles.filter(article => {

      if (article.frontmatter.tags.includes(tag)) {
        if (allArticles.length !== articles.length && !articles.includes(article) ) {
          return article
        }
        return article
      }

    })

    setArticles(filtered)

    return
  }

  const getAllArticles = () => {
    setArticles(allArticles)

    return
  }

  return (

      <Layout>
        <section className="flex flex-wrap justify-center">
          <button onClick={() => getAllArticles()} className="article-category m-2">All</button>
          {props.data.tags.group.map(tag =>
              <button
                  key={tag.fieldValue}
                  onClick={() => filterArticles(tag.fieldValue)}
                  className="article-category m-2">
                {tag.fieldValue}
              </button>)}
        </section>
        <section className="flex flex-col py-12">
          {articles.map(article => <Article key={article.frontmatter.title} article={article} />)}

        </section>
      </Layout>
  )

}

export default DigitalGarden

export const pageQuery = graphql`
{
  articles: allMdx(
    filter: {fields: {slug: {regex: "/digital-garden/"}}}, 
    sort: {fields: [frontmatter___date], order: DESC}) {
    nodes {
      frontmatter {
        title
        category
        excerpt
        tags
      }
      fields {
        slug
      }
    }
  }
  tags: allMdx {
    group(field: frontmatter___tags) {
      fieldValue
    }
  }
}
`
*/
