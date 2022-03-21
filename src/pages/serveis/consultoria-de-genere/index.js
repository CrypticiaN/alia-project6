import * as React from "react";

import Layout from "../../../components/Layout";
import ProjectsRoll from "../../../components/ProjectsRoll";

export default class ServiciosIndexPage extends React.Component {
  render() {
    return (
      <Layout className="container" >
          <section className="container">
              <div className="page-intro row">
                  <div className="col-5">
                      <h1 className="has-text-weight-bold is-size-1">
                          Consultoria de Gènere
                      </h1>
                  </div>
                  <div className="col-7">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                      Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus.
                  </div>
              </div>
          </section>
          <section className="section">
              <div className="container">
                  <div className="content">
                      <ProjectsRoll/>
                  </div>
              </div>
          </section>
      </Layout>
    );
  }
}
