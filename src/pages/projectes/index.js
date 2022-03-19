import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";


export default class ServiciosIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <section className="container">
            <div className="page-intro row">
                <div className="col-5">
                    <h1 className="has-text-weight-bold is-size-1">
                        Projectes
                    </h1>
                </div>
                <div className="col-7">
                    tags
                </div>
            </div>
          </section>
          <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
