import * as React from "react";

import Layout from "../../components/Layout";
import ProjectsRoll from "../../components/ProjectsRoll";


export default class ProjectsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <section className="container">
            <div className="page-intro row">
                <div className="col-md-5">
                    <h1 className="has-text-weight-bold is-size-1">
                        Projectes
                    </h1>
                </div>
                <div className="col-md-7">
                    tags

                </div>
            </div>
          </section>
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
