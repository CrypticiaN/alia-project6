import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class ServiciosIndexPage extends React.Component {
  render() {
    return (
      <Layout className="container" >
        <div
          className="row"
          // full-width-image-container
          style={{
            // backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
            <div className="col-4">
                <h1
                    className="has-text-weight-bold is-size-1"
                    style={{
                        /* boxShadow: "0.5rem 0 0 rgb(89,22,143), -0.5rem 0 0 rgb(89,22,143)",
                           backgroundColor: "rgb(89,22,143)",
                           color: "white",
                           padding: "",*/
                    }}
                >
                    Servicios
                </h1>
            </div>
            <div className="col-8">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
            </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProjectsRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
