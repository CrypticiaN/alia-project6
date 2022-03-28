import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const getCategories = items => {
    let categoryItems = items.map(item => {
        return item.node.frontmatter.category
    })
    let uniqueCategories = new Set(categoryItems)
    let categories = Array.from(uniqueCategories)
    categories = ["all posts", ...categories]
    return categories
}

const activeButtonClass = {
    backgroundColor: "#555",
    color: "#fff",
}

class BlogItems extends Component {
    state = {
        items: this.props.items.allMarkdownRemark.edges,
        blogPostItems: this.props.items.allMarkdownRemark.edges,
        categories: getCategories(this.props.items.allMarkdownRemark.edges),
        selectedItem:
            getCategories(this.props.items.allMarkdownRemark.edges) &&
            getCategories(this.props.items.allMarkdownRemark.edges)[0],
    }

    handleItems = category => {
        if (category === "all posts") {
            this.setState({
                blogPostItems: [...this.state.items],
                selectedItem: category,
            })
        } else {
            this.setState({
                blogPostItems: [
                    ...this.state.items.filter(edge => {
                        return edge.node.frontmatter.category === category
                    }),
                ],
                selectedItem: category,
            })
        }
    }

    render() {
        console.log(this.state.selectedItem)
        return (
            <ul className="">
                <div className="">
                    {this.state.categories.map((category, index) => {
                        return (
                            <button
                                type="button"
                                key={index}
                                onClick={() => this.handleItems(category)}
                                style={
                                    this.state.selectedItem === category
                                        ? activeButtonClass
                                        : null
                                }
                            >
                                {category}
                            </button>
                        )
                    })}
                </div>

                {this.state.blogPostItems.map(edge => {
                    return (
                        <li className="" key={edge.node.id}>
                            <h2>
                                <Link to={`/blog/${edge.node.fields.slug}/`}>
                                    {edge.node.frontmatter.title}
                                </Link>
                            </h2>
                            <div className="">
                <span>
                  Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                </span>
                            </div>
                            {edge.node.frontmatter.featured && (
                                <Img
                                    className=""
                                    fluid={edge.node.frontmatter.featuredimage.childImageSharp.fluid}
                                    alt={edge.node.frontmatter.title}
                                />
                            )}
                            <p className="">{edge.node.excerpt}</p>
                            <div className="">
                                <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BlogItems
